require('dotenv').config();
module.exports = {
  chains: {
    '-1': {
      'localName': 'Binance',
    },
    '1': {
      'localName': 'Ethereum',
      'chainName': 'Evm',
      'chainSymbol': 'ETH',
      'rpc': 'https://aged-bold-general.quiknode.pro/aca755115e18fb7c58c55a9e7c1af78e55e9cde2/',
      'socketRpc': (process.env.environment === 'production') ? process.env.prodSocketRpc : 'wss://aged-bold-general.quiknode.pro/aca755115e18fb7c58c55a9e7c1af78e55e9cde2/',
      'publicRpc': (process.env.environment === 'production') ? process.env.prodRpc : 'https://aged-bold-general.quiknode.pro/aca755115e18fb7c58c55a9e7c1af78e55e9cde2/',
    },
  },
  defiId: {
    '1000': {
      'localName': 'UniswapV2',
      'dexName': 'UniswapV2',
      'chainName': 'Ethereum',
      'chainId': '1',
      'chainSymbol': 'EVM',
      'routerAddress': '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
      'factoryAddress': '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
    },


    '1100': {
      'localName': 'UniswapV2',
      'dexName': 'SushiswapV2',
      'chainName': 'Ethereum',
      'chainId': '1',
      'chainSymbol': 'EVM',
      'routerAddress': '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
      'factoryAddress': '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac'
    },

    '1300': {
      'localName': 'UniswapV3',
      'dexName': 'UniswapV3',
      'chainName': 'Ethereum',
      'chainId': '1',
      'chainSymbol': 'EVM',
      'routerAddress': '0xc36442b4a4522e871399cd717abdd847ab11fe88'
    },

    '1400': {
      "localName": "AaveV2",
      "lendborrowName": "AaveV2",
      "chainName": "Ethereum",
      "chainId": "1",
      "chainSymbol": "EVM",
      "poolAddress": "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9",
      "routerAddress": "0xeffc18fc3b7eb8e676dac549e0c693ad50d1ce31",
      "lendingPoolAddressProvider": "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5",
      "dataPoolProvider": "0x00e50FAB64eBB37b87df06Aa46b8B35d5f1A4e1A",
      "dataProvider": "0x057835Ad21a177dbdd3090bB1CAE03EaCF78Fc6d"
    }
  }
}