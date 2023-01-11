const mongoose = require('mongoose');
const TaskModel = require('../models/Task');

const { ObjectId } = mongoose.Types;

const service = {
    getById: async (id) => {
        const task = await TaskModel.findById(id);
        return task;
    },
    getByMember: async (member_id) => {
        const filter = {
            member: ObjectId(member_id)
        };

        const tasks = await TaskModel.find(filter);
        return tasks;
    },
    getByMemberAndStatus: async (member_id, status) => {
        const filter = {
            member: ObjectId(member_id),
            isDone: status
        };

        const tasks = await TaskModel.find(filter);
        return tasks;
    },
    insert: async (newTask) => {
        await TaskModel.create(newTask);
        return true;
    },
    update: async (id, modifiedTask) => {
        const filter = {
            _id: ObjectId(id)
        };

        await TaskModel.updateOne(filter, modifiedTask);
        return true;
    },
    delete: async (id) => {
        const filter = {
            _id: ObjectId(id)
        };

        await TaskModel.deleteOne(filter);
        return true;
    }
};

module.exports = service;