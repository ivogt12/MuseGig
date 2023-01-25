const Lister = require('../models/lister');
const Applicant = require('../models/applicant');
const User = require('../models/user');

module.exports = {
    show,
    new: newApp,
    create
};

function show(req, res) {
    User.findById(req.params.id, function(err, user) {
        // Applicant.findById(req.params.id, function(err, applicant) {
            res.render(`applicants/show/${user._id}`, {title: 'My Profile Page', user})
        });
    // });
};

function newApp(req, res) {
    res.render('applicants/new', {title: 'Profile Info'});
};

function create(req, res) {
    // const newUser = User(req.body);
    // newUser._id = req.user._id;
    User.findById(req.user._id, function(err, user) {
        // User.find({name: newUser.firstName}, function(err, user){
            User.save(function(err) {
                if (err) return res.redirect('/applicants/new');
                res.redirect(`/applicants/show/${user._id}`);
            });
    // });
});
};