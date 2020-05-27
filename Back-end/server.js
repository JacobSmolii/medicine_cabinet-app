require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');

const restricted = require('./api/auth/restricted_middleware');
const authRoute = require('./api/auth/authorization');
const home_route = require('./api/end_points')
const server = express();

server.use(cors())
server.use(helmet())
server.use(bodyParser.json());
server.use(cookieParser());

server.use('/api/med_cab', authRoute);
server.use('/api/med_cab', restricted, home_route)

module.exports = server;