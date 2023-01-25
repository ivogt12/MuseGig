const Lister = require('../models/lister');
const User = require('../models/user');


module.exports = {
    index,
    new: newList,
    create,
    show
}

function newList(req, res) {
    res.render('listers/new', {title: 'New Listing'});
    
};

function index(req, res) {
    User.listerInfo.find(function(err, listers) {
        console.log(listers)
        res.render('listers', {title: 'Listings', listers});
    });
};

function show(req, res) {
    User.listerInfo.findById(req.params.id, function(err, lister) {
        res.render('listers/show', {title: 'Listing Description', lister});
    });
};

function create(req, res) {
    // const listing = new Lister(req.body);
    User.findById(req.user._id, function(err, user) {
        user.listerInfo.push(req.body);
        user.save(function(err) {
            if (err) return res.redirect('/listers/new');
            // console.log(listing);
            res.redirect('/listers');
        });
    });
};