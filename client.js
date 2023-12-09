const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080?addressToWatch=null&category=1000&userAddress=0x6Fb447Ae94F5180254D436A693907a1f57696900');

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