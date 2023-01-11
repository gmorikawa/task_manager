const mongoose = require('mongoose');
const TeamModel = require('../models/Team');

const { ObjectId } = mongoose.Types;

const service = {
    get: async () => {
        const teams = await TeamModel.find();
        return teams;
    },
    getById: async (id) => {
        const team = await TeamModel.findById(id);
        return team;
    },
    getByUser: async (user_id) => {
        const filter = {
            leader_id: ObjectId(user_id)
        };
        const teams = await TeamModel.find(filter);
        return teams;
    },
    insert: async (newUser) => {
        await TeamModel.create(newUser);
        return true;
    },
    update: async (id, modifiedTeam) => {
        const filter = {
            _id: ObjectId(id)
        };
    
        await TeamModel.updateOne(filter, modifiedTeam);
        return true;
    },
    delete: async (id) => {
        const filter = {
            _id: ObjectId(id)
        };
    
        await TeamModel.deleteOne(filter);
        return true;
    }
}

module.exports = service;