function sanitizeTransaction(txn){
    delete txn.type;
    delete txn.blockHash;
    delete txn.input;
    delete txn.s;
    delete txn.r;
    delete txn.v;
    delete txn.transactionIndex;
    return txn;
  }

  module.exports = {sanitizeTransaction}