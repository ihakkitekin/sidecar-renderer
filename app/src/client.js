const ipc = require('node-ipc');

ipc.config.id = 'app';
ipc.config.retry = 1500;

ipc.connectTo(
  'sidecar',
  function () {
    ipc.of.sidecar.on(
      'connect',
      function () {
        ipc.log('## connected to sidecar ##', ipc.config.delay);
      }
    );
    ipc.of.sidecar.on(
      'disconnect',
      function () {
        ipc.log('disconnected from sidecar');
      }
    );
    ipc.of.sidecar.on(
      'message',
      function (data) {
        ipc.log('got a message from sidecar : ', data);
      }
    );
  }
);

module.exports.sendMessageToSidecar = function sendMessageToSidecar(props) {
  return new Promise((resolve) => {
    ipc.of.sidecar.emit(
      'message',
      props
    );

    ipc.of.sidecar.on(
      'message',
      function (data) {
        resolve(data)
      }
    );
  })
}