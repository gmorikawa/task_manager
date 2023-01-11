const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        default: false
    },
    member: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Member'
    }
});

module.exports = mongoose.model('Task', schema);