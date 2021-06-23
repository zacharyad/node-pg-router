const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/dogs', require('./dogs'));

module.exports = router;
