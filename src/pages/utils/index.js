
export const initializeWebSocket = async (addressToWatch, userAddress, categoryId=null) => {
    const ws = new WebSocket(`ws://localhost:8080?addressToWatch=${addressToWatch}&category=${categoryId}&userAddress=${userAddress}`);
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