const express = require('express');
const registerController = require('../controllers/registerController');

const router = express.Router();

router.get('/register', registerController.register_new_user);
router.post('/', registerController.register_user);

module.exports = router;