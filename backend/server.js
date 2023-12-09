const { PushAPI, CONSTANTS } = require("@pushprotocol/restapi");
const { ethers } = require("ethers");
const Web3 = require('web3');
const WebSocket = require('ws');
const config = require('./config');

const wss = new WebSocket.Server({ port: 8080 });
const signer = new ethers.Wallet(config.pushManager.WALLET_KEY)
let userAlice;
(async() => {
 userAlice = await PushAPI.initialize(signer, { env: CONSTANTS.ENV.STAGING });
})()

wss.on('connection', async function connection(ws, req) {
  const queryParams = new URLSearchParams(req.url);
  
  const [category, addressToWatch, userAddress] = [queryParams.get('category'), queryParams.get('/?addressToWatch'), queryParams.get('userAddress')];
  const web3Socket = new Web3(
    new Web3.providers.WebsocketProvider(config.chains['1'].socketRpc ,{
      clientConfig: {
        maxReceivedFrameSize: 100000000,
        maxReceivedMessageSize: 100000000,
      }
    })
  );

  const subscription = web3Socket.eth.subscribe('newBlockHeaders');
  subscription.on('data', async (blockHeader) => {
    try {
      const threads = [];
      const txnMap = {};
      const block = await web3Socket.eth.getBlock(blockHeader.number, true);
      delete block.logsBloom;
      if (!block || !block.transactions || !block.transactions.length) {
        logger.error(`No data in block ${blockHeader.number}`);
        return;
      }

      block.transactions.forEach((txn) => {

        if(category === 'null' && addressToWatch !== 'null'){
          if (((txn.to).toLowerCase() === (addressToWatch).toLowerCase()) || ((txn.from).toLowerCase() === (addressToWatch).toLowerCase())) {
            delete txn.input;
            delete txn.s;
            delete txn.r;
            delete txn.v;
            txnMap[txn.hash] = (txn);
          }
        }
        else if (addressToWatch !== 'null') {
          if ((txn.to).toLowerCase() === (config.defiId[category].routerAddress).toLowerCase() && (txn.from).toLowerCase() === addressToWatch.toLowerCase()) {
            delete txn.input;
            delete txn.s;
            delete txn.r;
            delete txn.v;
            txnMap[txn.hash] = (txn);
          }
        }
        else {
          if ((txn.to).toLowerCase() === (config.defiId[category].routerAddress).toLowerCase()) {
            delete txn.input;
            delete txn.s;
            delete txn.r;
            delete txn.v;
            txnMap[txn.hash] = (txn);
          }
        }
      });
      
      if (Object.keys(txnMap).length !== 0) {
        const response = userAlice.channel.send([userAddress], {
          notification: {
            title: "defiStreamz#",
            body: JSON.stringify(txnMap),
          },
        });
      }

    } catch (err) {
      
    }
  });
  subscription.on('error' , async(error) => {
    console.log(error);
  })

});
