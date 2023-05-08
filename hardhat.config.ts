import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";


const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  etherscan: {
    apiKey: "",
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://mainnet.infura.io/v3/cefa7de205f543888138627880fab9cb",
        blockNumber: 16962846
      }
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/cefa7de205f543888138627880fab9cb",
      accounts: [
        "714918f6b824133aa59850cc9f997de18a572deca62be22cbeacab98a3d4eea5"
      ],
    },
  }
};

export default config;
