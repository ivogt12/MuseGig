const Lister = require('../models/lister');
const User = require('../models/user');

module.exports = {
    create,
    show,
    delete: deleteReview
};

function create(req, res) {
    req.body.user = req.user
    Lister.findById(req.params.id, function(err, lister) {
        
        lister.applicant.push(req.body);
        lister.save();
        res.redirect(`/listers/${req.params.id}`)
    });
};

function show(req, res) {
    req.body.user = req.user
    Lister.find({user: req.body.user}, function(err, lister) {
            res.render('gigs/show', {title: 'Listing Description', lister});
    
    });
};

async function deleteReview(req, res, next) {
    try {
        const gig = await Lister.findOne({'applicant._id': req.params.id});
        gig.applicant.remove(req.params.id);
        await gig.save();
        res.redirect(`/listers/${gig._id}/apply`);
    } catch(err) {
        return next(err);
    }
};