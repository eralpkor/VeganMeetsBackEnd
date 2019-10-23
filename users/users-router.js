const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('./users-model');

// POST /register signup for our service
router.post('/register', (req, res) => {
  let user = req.body;

  Users.add(user)
    .then(added => {
      console.log(added);
      res.status(201).json({ message: added });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'error adding user...'});
    });
});

// POST /login after signup login to service
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  Users.findById({ username })
    .first()
    .then(u => {
      if (u === u.username && ) {
        
      }
    })
});

module.exports = router;

