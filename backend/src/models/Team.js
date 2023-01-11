const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    leader_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Team', schema);