const jwt = require('jsonwebtoken');
const db = require('../data/dbConfig.js');
require('dotenv').config()


module.exports = {
  add,
  // find,
  findById,
  findBy,
}

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db('users')
    .select('id', 'username')
    .where({ id })
    .first();
}

function findBy(filter) {
  return db('users').where(filter);
}