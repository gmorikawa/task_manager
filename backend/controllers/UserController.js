const express = require('express');
const router = express.Router();
const UserService = require('../services/UserService');

router.get('/', (req, res) => {
    UserService.get()
        .then((users) => {
            res.json(users);
        });
});

router.post('/', (req, res) => {
    const newUser = req.body;

    UserService.insert(newUser)
        .then((value) => res.json(value))
        .catch((err) => res.json(err));
});

router.put('/:id', (req, res) => {
    const modifiedUser = req.body;
    const id = req.params.id;

    UserService.update(id, modifiedUser)
        .then((value) => res.json(value))
        .catch(err => res.json(err));
});

// delete route should not exist
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    UserService.delete(id)
        .then(() => { res.json({ success: true }); })
        .catch(err => { res.json(err); });
});

module.exports = router;