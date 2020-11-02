const { server } = require('./server');

server.listen(8087, () => console.log('Listening sidecar on http://localhost:8087'));