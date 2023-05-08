// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract Yes is ERC20, ERC20Burnable {
    IERC20 public chadToken;
    IERC20 public pepeToken;
    IERC20 public wojakToken;
    IERC20 public xenToken;
    mapping(uint => mapping(uint256 => mapping(address => uint256)))
        public stakedBalances;
    mapping(uint => mapping(uint256 => mapping(address => uint256)))
        public stakedAt;
    mapping(uint => mapping(uint256 => mapping(address => uint256)))
        public lastClaimed;
    mapping(uint => mapping(uint256 => mapping(address => uint256)))
        public lastTimeClaimed;
    mapping(uint256 => uint256) public lockTimeMultipliers;
    mapping(uint256 => uint256) public lockTimes;
    mapping(uint256 => uint256) public tokenFactors;
    mapping(uint256 => uint256) public totalStaked;
    uint256 public startTime;
    mapping(uint256 => IERC20) public tokenIndex;
    uint256 public BASE_MULTIPLIER = 1 << 128;
    uint256 public constant EPOCH = 1 weeks;

    event Staked(address indexed user, uint256 amount);
    event Unstaked(address indexed user, uint256 amount);

    constructor() ERC20("Yes", "YES") {
        startTime = block.timestamp;
        chadToken = IERC20(0xb4577d084f289E696dDFAC178C11663E573900f1);
        wojakToken = IERC20(0x5026F006B85729a8b14553FAE6af249aD16c9aaB);
        pepeToken = IERC20(0x6982508145454Ce325dDbE47a25d4ec3d2311933);
        xenToken = IERC20(0x06450dEe7FD2Fb8E39061434BAbCFC05599a6Fb8);
        tokenIndex[0] = chadToken;
        tokenIndex[1] = wojakToken;
        tokenIndex[2] = pepeToken;
        tokenIndex[3] = xenToken;
        tokenFactors[0] = 100000; // 1 * 100000
        tokenFactors[1] = 30000; // 0.3 * 100000
        tokenFactors[2] = 5; // 0.00005 * 100000
        tokenFactors[3] = 500; // 0.005 * 100000
        lockTimeMultipliers[0] = 120; // 1 week = 1.2x
        lockTimeMultipliers[1] = 150; // 1 month = 1.5x
        lockTimeMultipliers[2] = 200; // 3 months = 2x
        lockTimeMultipliers[3] = 300; // 6 months = 3x
        lockTimeMultipliers[4] = 500; // 1 year = 5x
        lockTimes[0] = EPOCH;
        lockTimes[1] = 4 * EPOCH;
        lockTimes[2] = 12 * EPOCH;
        lockTimes[3] = 24 * EPOCH;
        lockTimes[4] = 48 * EPOCH;
    }

    modifier valid(uint256 token, uint256 timelock) {
        require(timelock < 5, "Invalid lock period");
        require(token < 4, "Invalid token");
        _;
    }

    function stake(
        uint256 token,
        uint256 timelock,
        uint256 amount
    ) public valid(token, timelock) {
        require(amount > 0, "Amount must be greater than 0");
        _claimRewards(token, msg.sender, timelock);
        tokenIndex[token].transferFrom(msg.sender, address(this), amount);
        stakedBalances[token][timelock][msg.sender] += amount;
        stakedAt[token][timelock][msg.sender] = block.timestamp;
        totalStaked[token] += amount;
        emit Staked(msg.sender, amount);
    }

    function unstake(
        uint256 token,
        uint256 timelock,
        uint256 amount
    ) public valid(token, timelock) {
        require(
            stakedBalances[token][timelock][msg.sender] >= amount,
            "Insufficient staked balance"
        );
        require(
            block.timestamp - stakedAt[token][timelock][msg.sender] >=
                lockTimes[timelock],
            "Stake cannot be ended early"
        );
        require(amount > 0, "Amount must be greater than 0");
        _claimRewards(token, msg.sender, timelock);
        stakedBalances[token][timelock][msg.sender] -= amount;
        tokenIndex[token].transfer(msg.sender, amount);
        totalStaked[token] -= amount;
        emit Unstaked(msg.sender, amount);
    }

    function claimRewards(
        uint256 token,
        uint256 timelock
    ) public valid(token, timelock) {
        _claimRewards(token, msg.sender, timelock);
    }

    function claimAllRewards() public {
        for (uint256 token = 0; token < 4; ++token) {
            for (uint256 timelock = 0; timelock < 5; ++timelock) {
                _claimRewards(token, msg.sender, timelock);
            }
        }
    }

    function _claimRewards(
        uint256 token,
        address user,
        uint256 timelock
    ) internal {
        uint256 totalOwed = _calculateRewards(token, user, timelock);
        lastClaimed[token][timelock][user] = _getEpochOfTimestamp(
            block.timestamp
        );
        lastTimeClaimed[token][timelock][user] = block.timestamp;
        if (totalOwed > 0) _mint(user, totalOwed);
    }

    function _calculateRewards(
        uint256 token,
        address user,
        uint256 timelock
    ) internal view returns (uint256) {
        if (
            lastTimeClaimed[token][timelock][user] == 0 ||
            stakedBalances[token][timelock][user] == 0
        ) {
            return 0;
        }
        uint256 startEpoch = lastClaimed[token][timelock][user];
        uint256 endEpoch = _getEpochOfTimestamp(block.timestamp);
        uint256 totalOwed;
        uint256 balanceScaled = stakedBalances[token][timelock][user] *
            lockTimeMultipliers[timelock] *
            tokenFactors[token];
        // Handle first epoch
        if (startEpoch != endEpoch) {
            uint256 timeLeftInStartEpoch = EPOCH -
                ((lastTimeClaimed[token][timelock][user] - startTime) % EPOCH);
            totalOwed +=
                (timeLeftInStartEpoch *
                    (BASE_MULTIPLIER >> startEpoch) *
                    balanceScaled) /
                EPOCH /
                BASE_MULTIPLIER /
                100 /
                100000;
        }
        for (uint256 i = startEpoch + 1; i < endEpoch; i++) {
            if (i > 128) break;
            totalOwed +=
                (balanceScaled * (BASE_MULTIPLIER >> i)) /
                BASE_MULTIPLIER /
                100 /
                100000;
        }
        // Handle current epoch
        uint256 lastTime = (endEpoch == lastClaimed[token][timelock][user])
            ? lastTimeClaimed[token][timelock][user]
            : startTime;
        uint256 secondsSinceLastUpdate = (block.timestamp - lastTime) % EPOCH;
        uint256 rawEarnAmountForThisEpoch = (balanceScaled *
            (BASE_MULTIPLIER >> endEpoch)) /
            BASE_MULTIPLIER /
            100 /
            100000;
        uint256 scaledEarningsThisEpoch = (rawEarnAmountForThisEpoch *
            secondsSinceLastUpdate) / EPOCH;
        return totalOwed + scaledEarningsThisEpoch;
    }

    function calculateRewards(
        uint256 token,
        address user,
        uint256 timelock
    ) public view returns (uint256) {
        return _calculateRewards(token, user, timelock);
    }

    function getAllStakedBalances(
        uint256 token,
        address user
    ) public view returns (uint256) {
        uint total;
        for (uint timelock = 0; timelock < 5; ++timelock) {
            total += stakedBalances[token][timelock][user];
        }
        return total;
    }

    function calculateAllRewards(
        uint256 token,
        address user
    ) public view returns (uint256) {
        uint total;
        for (uint timelock = 0; timelock < 5; ++timelock) {
            total += _calculateRewards(token, user, timelock);
        }
        return total;
    }

    function _getEpochOfTimestamp(
        uint256 timestamp
    ) internal view returns (uint256) {
        return (timestamp - startTime) / (EPOCH);
    }

    function getBaseMultiplier() public view returns (uint256) {
        return (BASE_MULTIPLIER >> getCurrentEpoch());
    }

    function getCurrentEpoch() public view returns (uint256) {
        return _getEpochOfTimestamp(block.timestamp);
    }
}
