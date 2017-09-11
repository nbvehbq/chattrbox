let socket;

const init = (url) => {
  socket = new WebSocket(url);
  console.log('connecting...');
};

const registerOpenHandler = (handlerFunction) => {
  socket.onopen = () => {
    console.log('open');
    handlerFunction();
  };
};

const registerMessageHandler = (handlerFunction) => {
  socket.onmessage = (e) => {
    console.log('message', e.data);

    let data = JSON.parse(e.data);
    handlerFunction(data);
  };
};

const sendMessage = (payload) => {
  socket.send(JSON.stringify(payload));
};

export default {
  init,
  registerOpenHandler,
  registerMessageHandler,
  sendMessage
};
