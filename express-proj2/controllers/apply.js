const Lister = require('../models/lister');
const User = require('../models/user');

module.exports = {
    create
};

function create(req, res) {
    User.findById(req.user._id, function(err, user) {
        user.applicantInfo.push(req.body);
        user.save(function(err) {
            res.redirect(`/listers/${req.params.id}`)
        })
    });
};