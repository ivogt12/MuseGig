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
        type: Number
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
}, {
    timestamps: true
});

const userSchema = new Schema({
  name: String,
  googleId: {
    type: String,
    required: true
  },
  applicantInfo: [applicantSchema],
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);