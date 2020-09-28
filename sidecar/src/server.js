const ipc = require('node-ipc');
const client = require('./__client/server.bundle');

function renderClient(props) {
  return client.serverRender(props);
}

ipc.config.id = 'sidecar';
ipc.config.retry = 1500;
ipc.config.maxConnections = 1;

ipc.serveNet(
  function () {
    ipc.server.on(
      'message',
      function (data, socket) {
        const html = renderClient(data);
        ipc.server.emit(
          socket,
          'message',
          html
        );
      }
    );

    ipc.server.on(
      'socket.disconnected',
      function (data, socket) {
        console.log('DISCONNECTED\n\n', arguments);
      }
    );
  }
);

ipc.server.on(
  'error',
  function (err) {
    ipc.log('Got an ERROR!', err);
  }
);

module.exports = ipc.server;