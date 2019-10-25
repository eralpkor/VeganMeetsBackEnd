const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config()
// add routers files here 
const usersRouter = require('../users/users-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// add endpoints here
server.use('/', usersRouter)

// main page to test api
server.get('/', (req, res) => {
  res.send(`<h2>It's alive!</h2>`);
});

// server.get('/', (req, res) => {
//   res.send(process.env.SECRET_KEY);
// })

module.exports = server;