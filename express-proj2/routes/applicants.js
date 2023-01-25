var express = require('express');
var router = express.Router();
const applicantsCtrl = require('../controllers/applicants');
const passport = require('passport');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/new', applicantsCtrl.new);
router.get('/show/:id', applicantsCtrl.show);
router.post('/', applicantsCtrl.create);


module.exports = router;
