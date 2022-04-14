var express = require('express');
var router = express.Router();
let usersModel = require('../models/users');

/*sing-up*/
router.post('/sign-up', async function(req, res, next) {
  let email = await usersModel.findOne({emailAddress: req.body.emailAddressUp});

  if(!email){
    var newUser = new usersModel({
      userName: req.body.userName,
      userFirstName: req.body.userFirstName,
      emailAddress: req.body.emailAddressUp,
      password: req.body.password
    })
    newUserSave = await newUser.save();
    req.session.user = {
      name: newUserSave.userName,
      firstName: newUserSave.userFirstName,
      id: newUserSave._id
    }

    res.redirect('/home')
  }else {
    res.redirect('/')
  }
});

/*sign-in*/
router.post('/sign-in', async function(req, res, next) {
  let user = await usersModel.findOne({emailAddress: req.body.emailAddressIn});
  
  if(req.body.passwordIn == user?.password){
    req.session.user = {
      name: user.userName,
      firstName: user.userFirstName,
      id: user._id
    }

    res.redirect('/home')
  } else {
    res.redirect('/')
  }
});

/* logput */

router.get('/logout', async function(req, res, next) {
  req.session.user = null;

  res.redirect('/')
});

module.exports = router;
