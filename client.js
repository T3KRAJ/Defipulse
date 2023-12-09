const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080?addressToWatch=0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D&category=null&userAddress=0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D');

ws.onopen = () => {
  console.log('WebSocket connection established.');
};

ws.onmessage = (event) => {
  console.log(`Received message: ${event.data}`);
};

ws.onerror = (error) => {
  console.error(`WebSocket error: ${error}`);
};

ws.onclose = () => {
  console.log('WebSocket connection closed.');
};