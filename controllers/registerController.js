const Register = require('../models/register');

const register_new_user = (req, res) => {
  res.render('register', { title: 'Register New Account' });
}

const register_user = (req, res) => {
	console.log(res);
  }

module.exports = {
  register_new_user,
  register_user
}