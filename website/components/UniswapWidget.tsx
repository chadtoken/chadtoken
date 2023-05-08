import { darkTheme, SwapWidget } from '@uniswap/widgets';
import { hooks } from '../connectors/metaMask';
import '@uniswap/widgets/fonts.css';

const { useProvider } = hooks;
const tokenList = [
  {
    "name": "Dai Stablecoin",
    "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    "symbol": "DAI",
    "decimals": 18,
    "chainId": 1,
    "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
  },
  {
    "name": "Tether USD",
    "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    "symbol": "USDT",
    "decimals": 6,
    "chainId": 1,
    "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png"
  },
  {
    "name": "USD Coin",
    "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    "symbol": "USDC",
    "decimals": 6,
    "chainId": 1,
    "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
  },
  {
    "name": "Chad",
    "address": "0xb4577d084f289e696ddfac178c11663e573900f1",
    "symbol": "CHAD",
    "decimals": 18,
    "chainId": 1,
    "logoURI": "https://www.chadtoken.org/logo.png"
  },
];

const UniswapWidget = () => {
  const provider = useProvider();
  return (
    <div className="Uniswap" style={{ width: '100%' }}>
      <SwapWidget
        provider={provider}
        tokenList={tokenList}
        theme={darkTheme}
        defaultOutputTokenAddress="0xb4577d084f289e696ddfac178c11663e573900f1"
      />
    </div>
  );
};

export default UniswapWidget;
