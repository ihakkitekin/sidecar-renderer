const got = require('got');

function SidecarClient() { }

SidecarClient.prototype.get = async function (data) {
  try {
    const response = got.post('http://localhost:8087', {
      json: data
    });

    return response.text();
  } catch (error) {
    console.error(error.response.body);
    return error.response.body;
  }
}

module.exports = new SidecarClient();