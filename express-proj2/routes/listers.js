var express = require('express');
var router = express.Router();
const listersCtrl = require('../controllers/listers');
const passport = require('passport');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.get('/', listersCtrl.index);
router.get('/new', listersCtrl.new);
router.get('/:id', listersCtrl.show);
router.post('/', listersCtrl.create);

module.exports = router;