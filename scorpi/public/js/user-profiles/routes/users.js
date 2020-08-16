// var express = require('express');
// var router = express.Router();
// const ObjectID = require('mongodb').ObjectID;

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   if(!req.isAuthenticated()){
//     res.redirect('/auth/login');
//   }
//   const users = req.app.locals.users;
//   const _id = ObjectID(res.session.passport.user);

//   users.findOne({ _id }, (err, results) => {
//     if(err) {
//       throw err;
//     }

//     res.render('account',{ ...results });
//   });
// });


// router.get('/:username', (req, res, next) => {
//   const users = req.app.locals.users;
//   const username = req.params.username;

//   user.findOne({ username }, (err, results) => {
//     if(err || !results){
//       res.render('public-profile', { messages: {error: ['User not found']}});
//     }

//     res.render('public-profile', { ...results, username });
//   });
// });

// router.post('/', (req, res, next) => {
//   if(!req.isAuthenticated()){
//     res.redirect('/auth/login');
//   }

//   const users = req.app.locals.users;
//   const {names, phone, address, bio, company, city, state, country} = req.body;
//   const _id = ObjectID(req.session.passport.user);

//   users.updateOne({ _id }, {$set: {names, phone, address, bio, company, city, state, country}});
//   if(err){
//     throw err;
//   }

//   res.redirect('/users');
// });

// module.exports = router;

var express = require('express');
var router = express.Router();
const ObjectID = require('mongodb').ObjectID;


// Configure user account profile edit
// --------------------------------------------------
router.get('/', function(req, res, next) {
  if (!req.isAuthenticated()) { 
    res.redirect('/auth/login');
  }
  const users = req.app.locals.users;
  const _id = ObjectID(req.session.passport.user);

  users.findOne({ _id }, (err, results) => {
    if (err) {
      throw err;
    }

    res.render('account', { ...results });
  });
});
// --------------------------------------------------


// Get public profile for any user
// --------------------------------------------------
router.get('/:username', (req, res, next) => {
  const users = req.app.locals.users;
  const username = req.params.username;

  users.findOne({ username }, (err, results) => {
    if (err || !results) {
      res.render('public-profile', { messages: { error: ['User not found'] } });
    }

    res.render('public-profile', { ...results, username });
  });
})
// --------------------------------------------------


// Handle updating user profile data
// --------------------------------------------------
router.post('/', (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login');
  }

  const users = req.app.locals.users;
  const { names, phone, address, bio, company, city, state, country } = req.body;
  const _id = ObjectID(req.session.passport.user);

  users.updateOne({ _id }, { $set: { names, phone, address, bio, company, city, state, country } }, (err) => {
    if (err) {
      throw err;
    }
    
    res.redirect('/users');
  });
});
// --------------------------------------------------

module.exports = router;
