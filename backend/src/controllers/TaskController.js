const express = require('express');
const router = express.Router();
const TaskService = require('../services/TaskService');
const auth = require('../middleware/Authentication');

router.get('/:member_id', auth, (req, res) => {
    TaskService.getByMember(req.params.member_id)
        .then((tasks) => {
            res.json(tasks);
        });
});

router.get('/:member_id/completed', auth, (req, res) => {
    TaskService.getByMemberAndStatus(req.params.member_id, true)
        .then((tasks) => {
            res.json(tasks);
        });
});

router.get('/:member_id/inprogress', auth, (req, res) => {
    TaskService.getByMemberAndStatus(req.params.member_id, false)
        .then((tasks) => {
            res.json(tasks);
        });
});

router.post('/', auth, (req, res) => {
    const newTask = req.body;

    TaskService.insert(newTask)
        .then((value) => res.json(value))
        .catch((err) => res.json(err));
});

router.put('/:id', auth, (req, res) => {
    const modifiedTask = req.body;
    const id = req.params.id;

    TaskService.update(id, modifiedTask)
        .then((value) => res.json(value))
        .catch((err) => res.json(err));
});

router.put('/:id/changeStatus', auth, async (req, res) => {
    TaskService.getById(req.params.id)
        .then(async (result) => {
            result.isDone = !result.isDone;
            TaskService.update(result._id, result)
                .then(() => { res.json({ success: true }); })
                .catch((err) => { res.json({ success: false }); });
        })
        .catch((err) => {
            res.json(err);
        });
});

router.delete('/:id', auth, (req, res) => {
    TaskService.delete(req.params.id)
        .then(() => { res.json({ success: true }); })
        .catch(err => { res.json(err); });
});

module.exports = router;