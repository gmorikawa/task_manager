const mongoose = require('mongoose');
const UserModel = require('../models/User');

const { ObjectId } = mongoose.Types;

const service = {
    get: async () => {
        const users = await UserModel.find();
        return users;
    },
    getById: async (id) => {
        const user = await UserModel.findById(id);
        return user;
    },
    getByUsername: async (username) => {
        const filter = {
            username: username
        };
    
        const user = await UserModel.find(filter);
        return user;
    },
    insert: async (newUser) => {
        await UserModel.create(newUser, null);
        return true;
    },
    update: async (id, modifiedUser) => {
        const filter = {
            _id: ObjectId(id)
        };
    
        await UserModel.updateOne(filter, modifiedUser);
        return true;
    },
    delete: async (id) => {
        const filter = {
            _id: ObjectId(id)
        };
    
        await UserModel.deleteOne(filter);
        return true;
    }
};

module.exports = service;