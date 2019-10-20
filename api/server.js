const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// add routers files here 


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// add endpoints here


// main page to test api
server.get('/', (req, res) => {
  res.send(`<h2>It's alive!</h2>`);
});

module.exports = server;