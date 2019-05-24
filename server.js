const express = require('express');
const cors = require('cors');

const server = express();

const userAuth = require('./routers/authRouter');
const bookRecommendation = require('./routers/recommendationRouter');

server.use(express.json());
server.use(cors());

server.use('/api', userAuth);
server.use('/', bookRecommendation);

server.get('/', () => {
  res.send('The server is working')
});

module.exports = server;