require('dotenv').config({path:'../.env'});
module.exports = {
  pushManager: {
    WALLET_KEY: process.env.WALLET_KEY

  },
  chains: {
    '-1': {
      'localName': 'Binance',
    },
    '1': {
      'localName': 'Ethereum',
      'chainName': 'Evm',
      'chainSymbol': 'ETH',
      'socketRpc': (process.env.environment === 'production') ? process.env.PROD_SOCKET_RPC : process.env.SOCKET_RPC,
      'publicRpc': (process.env.environment === 'production') ? process.env.PROD__RPC : process.env.RPC,
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
      'localName': 'SushiswapV2',
      'dexName': 'SushiswapV2',
      'chainName': 'Ethereum',
      'chainId': '1',
      'chainSymbol': 'EVM',
      'routerAddress': '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
      'factoryAddress': '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac'
    },

    '1200': {
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
      "localName": "1Inch",
      "chainName": "Ethereum",
      "chainId": "1",
      "chainSymbol": "EVM",
      "routerAddress": "0x1111111254EEB25477B68fb85Ed929f73A960582"
    }
  }
}