const express = require('express');
const cors = require('cors');
const server = express();
const port = 5000;
const { routes } = require('./routes/routes.js');

server.use(cors());
server.use(express.json());

routes(server);

server.listen(port, () => console.log('server is running on port:', port));
