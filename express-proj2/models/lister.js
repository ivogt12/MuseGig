const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const applicantSchema = new Schema( {
    resume: String
    // contact_info: 
  }, {
    timestamps: true
  });

const listerSchema = new Schema({
    title: {
        type: String
    },
    date: {
        type: Date
    },
    time: {
        type: Number
    },
    location: {
        type: String
    },
    desc_: {
        type: String
    },
    applicant: [applicantSchema],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Lister', listerSchema);