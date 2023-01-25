const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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

module.exports = mongoose.model('Lister', listerSchema);