const express = require('express');
const router = express.Router();
const TeamService = require('../services/TeamService');
const auth = require('../middleware/Authentication');

router.get('/', auth, (req, res) => {
    const user_id = session.userid;
    
    TeamService.getByUser(user_id)
        .then((teams) => {
            res.json(teams);
        });
});

router.post('/', auth, (req, res) => {
    const newTeam = req.body;
    newTeam.leader_id = session.userid;

    TeamService.insert(newTeam)
        .then((value) => res.json(value))
        .catch((err) => res.json(err));
});

router.put('/:id', auth, (req, res) => {
    const modifiedTeam = req.body;
    const id = req.params.id;

    TeamService.update(id, modifiedTeam)
        .then((value) => res.json(value))
        .catch(err => res.json(err));
});

router.delete('/:id', auth, (req, res) => {
    const id = req.params.id;
    TeamService.delete(id)
        .then(() => { res.json({ success: true }); })
        .catch(err => { res.json(err); });
});

module.exports = router;