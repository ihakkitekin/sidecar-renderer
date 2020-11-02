const client = require('./__client/server.bundle');

function renderClient(props) {
  return client.serverRender(props);
}

const express = require('express');

const server = express();

server.use(express.json());

server.post('/', (req, res) => {
  res.send(renderClient(req.body));
});

server.use((err, req, res, next) => {
  console.error(err.message);

  if (res.headersSent) {
    next(err);
  }

  res.status(500).send(err.message);
});


module.exports = {
  server
};