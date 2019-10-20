const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('./users-model');

router.post('/register', (req, res) => {
  let user = req.body;

  Users.add(user)
    .then(added => {
      console.log(added);
      res.status(201).json({ message: added })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'error adding user...'})
    })
});



module.exports = router;

