const express = require('express');
const client = require('./client');

const port = 3000;
const app = express();

app.get('/', async (req, res) => {
  const data = await client.render({ name: req.query.name || 'World' });

  res.send(data);
})

app.listen(port, () => console.log(`App listening on http://localhost:${port}`));
