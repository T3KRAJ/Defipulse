const Web3 = require('web3');
const WebSocket = require('ws');
const config = require('./config');
const {sendDataToPush} = require('../helper/sendPush');
const { sanitizeTransaction } = require('../helper/santitseTransaction');

const wss = new WebSocket.Server({ port: 8080 });

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
      const block = await web3Socket.eth.getBlock(blockHeader.number, true);
      delete block.logsBloom;
      if (!block || !block.transactions || !block.transactions.length) {
        console.error(`No data in block ${blockHeader.number}`);
        return;
      }

      block.transactions.forEach(async (txn) => {

        if(category === 'null' && addressToWatch !== 'null'){
          if (((txn.to).toLowerCase() === (addressToWatch).toLowerCase()) || ((txn.from).toLowerCase() === (addressToWatch).toLowerCase())) {
            const txnData = await sanitizeTransaction(txn);
             sendDataToPush(userAddress , txnData);
          }
        }
        else if (addressToWatch !== 'null') {
          if ((txn.to).toLowerCase() === (config.defiId[category].routerAddress).toLowerCase() && (txn.from).toLowerCase() === addressToWatch.toLowerCase()) {
            const txnData = await sanitizeTransaction(txn);
             sendDataToPush(userAddress , txnData);
          }
        }
        else {
          if ((txn.to).toLowerCase() === (config.defiId[category].routerAddress).toLowerCase()) {
            const txnData = sanitizeTransaction(txn);
             sendDataToPush(userAddress , txnData);
          }
        }
      });
    } catch (err) {
      
    }
  });
  subscription.on('error' , async(error) => {
    console.log(error);
  })

});
