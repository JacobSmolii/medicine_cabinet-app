
const environment = process.env.NODE_ENV || 'development'; // needed for deployment

const config = require('../knexfile')[environment];

module.exports = require('knex')(config);

