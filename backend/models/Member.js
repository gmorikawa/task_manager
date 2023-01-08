const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    team: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Team',
        required: true
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },
    tasks: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Task',
        required: true
    }]
});

module.exports = mongoose.model('Member', schema);