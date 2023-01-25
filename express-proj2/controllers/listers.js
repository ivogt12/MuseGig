const Lister = require('../models/lister');

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
    Lister.find(function(err, listers) {
        console.log(listers)
        res.render('listers', {title: 'Listings', listers});
    });
};

function show(req, res) {
    Lister.findById(req.params.id, function(err, lister) {
        res.render('listers/show', {title: 'Listing Description', lister});
    });
};

function create(req, res) {
    const listing = new Lister(req.body);
    listing.save(function(err) {
        if (err) return res.redirect('/listers/new');
        console.log(listing);
        res.redirect('/listers');
    });
};