const mongoose = require('mongoose');
const UserModel = require('../models/User');

const { ObjectId } = mongoose.Types;

const service = {
    get: async () => {
        const users = await UserModel.find().select('username');
        return users;
    },
    getById: async (id) => {
        const user = await UserModel.findById(id).select('username');
        return user;
    },
    getByUsername: async (username) => {
        const filter = {
            username: username
        };
    
        const user = await UserModel.findOne(filter);
        return user;
    },
    insert: async (newUser) => {
        const user = await this.getByUsername(modifiedUser.username);

        if(user === null) {
            await UserModel.create(newUser);
            return true;
        } else {
            throw new Error('Username not available');
        }
    },
    update: async (id, modifiedUser) => {
        const filter = {
            _id: ObjectId(id)
        };

        const user = await this.getByUsername(modifiedUser.username)

        if(user === null) {
            await UserModel.updateOne(filter, modifiedUser);
            return true;
        } else {
            throw new Error('Username not available');
        }
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