const { PushAPI, CONSTANTS } = require("@pushprotocol/restapi");
const { ethers } = require("ethers");
const config = require('../backend/config');

const signer = new ethers.Wallet(config.pushManager.WALLET_KEY)
let pushUser;
(async() => {
 pushUser = await PushAPI.initialize(signer, { env: CONSTANTS.ENV.STAGING });
})()

module.exports = {

sendDataToPush : (userAddress , txnData) => {
    pushUser.channel.send([userAddress], {
    notification: {
      title: "defiStreamz#",
      body: (txnData),
    },
  });
}
}