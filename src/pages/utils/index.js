
export const initializeWebSocket = async (userAddress, category) => {
    const ws = new WebSocket(`ws://localhost:8080?userAddress=${userAddress}&category=${category}`);
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
};