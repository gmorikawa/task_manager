const mongoose = require('mongoose');
const MemberModel = require('../models/Member');

const { ObjectId } = mongoose.Types;

const service = {
    get: async () => {
        const members = await MemberModel.find().populate('user');
        return members;
    },
    getBy: async (id) => {
        const member = await MemberModel.findById(id).populate('user');
        return member;
    },
    getByTeam: async (team_id) => {
        const filter = {
            team: ObjectId(team_id)
        };

        const members = await MemberModel.findOne(filter).populate('user');
        return members;
    },
    getByUserAndTeam: async (team_id, user_id) => {
        const filter = {
            user: ObjectId(user_id),
            team: ObjectId(team_id)
        };
    
        const member = await MemberModel.findOne(filter).populate('user');
        return member;
    },
    insert: async (newMember) => {
        await MemberModel.create(newMember);
        return true;
    },
    update: async (id, modifiedMember) => {
        const filter = {
            _id: ObjectId(id)
        };

        await MemberModel.updateOne(filter, modifiedMember);
        return true;
    },
    delete: async (id) => {
        const filter = {
            _id: ObjectId(id)
        };
    
        await MemberModel.deleteOne(filter);
        return true;
    }
};

module.exports = service;