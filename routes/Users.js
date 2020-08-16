const express = require('express')
const users = express.Router()
const cors = require('cors')
const ObjectID = require('mongodb').ObjectID;
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/User')
const { Router } = require('express')
const { schema, updateOne, findByIdAndUpdate } = require('../models/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'

// users.put('/:id', (req, res) => {
//   if(ObjectID .isValid(req.params.id))
//   return res.status(400).send('No record find with given ID: ' + req.params.id)

//   var updateRecord = {
//     username: req.body.username,
//     phone: req.body.phone,
//     address: req.body.address,
//     city: req.body.city,
//     state: req.body.state,
//     country: req.body.country,
//     email: req.body.email,
//   }


//   User.findByIdAndUpdate(req.params.id, 
//     { $set: updateRecord }, (err, docs) =>{
//       if(!err) res.send(docs)
//       else console.log('errpr while updating record')
//   })
// })

// user.delete('/:id', (req, res) => {
//   if(ObjectID .isValid(req.params.id))
//   return res.status(400).send('No record find with given ID: ' + req.params.id)

//   User.findByIdAndRemove(req.params.id, (req))
// })



users.get('/', (req, res) => {
  User.find((err, docs) => {
      if (!err) res.send(docs)
      else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
  })
})


users.get('/:id', (req, res) => {
  User.findOne((err, docs) => {
    if (!err) res.send(docs)
    else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
  })
})


users.put('/:id', (req, res) => {
  if (!ObjectID.isValid(req.params.id))
      return res.status(400).send('No record with given id : ' + req.params.id)

  var updatedRecord = {
    username: req.body.username,
    phone: req.body.phone,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    email: req.body.email,
  }

  User.findByIdAndUpdate(req.params.id, { $set: updatedRecord },{new:true}, (err, docs) => {
      if (!err) res.send(docs)
      else console.log('Error while updating a record : ' + JSON.stringify(err, undefined, 2))
  })
})

users.post('/register', (req, res) => {
  const today = new Date()
  const userData = {
    username: req.body.username,
    phone: req.body.phone,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    email: req.body.email,
    password: req.body.password,
    created: today
  }

  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post('/login', (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // Passwords match
          const payload = {
            _id: user._id,
            username: user.username,
            phone: user.phone,
            email: user.email
          }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        } else {
          // Passwords don't match
          res.json({ error: 'User does not exist' })
        }
      } else {
        res.json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    _id: decoded._id
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})





module.exports = users