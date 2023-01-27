const Lister = require('../models/lister');

module.exports = {
    index,
    new: newList,
    create,
    show,
    edit
}

function newList(req, res) {
    res.render('listers/new', {title: 'New Listing'});
    
};

function index(req, res) {
    Lister.find(function(err, listers) {
        res.render('listers', {title: 'Listings', listers});
    });
};

function show(req, res) {
    req.body.user = req.user
    Lister.findById(req.params.id, function(err, lister) {
        res.render('listers/show', {title: 'Listing Description', lister});
    });
};

function create(req, res) {
    req.body.user = req.user
    const listing = new Lister(req.body);
    // const dt = listing.date;
    // let date = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    // date += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    listing.save(function(err) {
        if (err) return res.redirect('/listers/new');
        res.redirect('/listers');
    });
};

async function edit(req, res, next) {
    try {
        const gig = await Lister.findById(req.params.id);
        gig.title = req.body.title
        gig.date = req.body.date
        gig.location = req.body.location
        gig.desc_ = req.body.desc_
        await gig.save()
        res.redirect(`/listers/${gig._id}`)
    } catch(err) {
        return next(err)
    }
};