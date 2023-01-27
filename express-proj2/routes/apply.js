var express = require('express');
var router = express.Router();
const applyCtrl = require('../controllers/apply');
const passport = require('passport');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/listers/:id/apply', applyCtrl.create);
router.get('/listers/:id/apply', applyCtrl.show);
router.delete('/apply/:id', applyCtrl.delete);

module.exports = router;
