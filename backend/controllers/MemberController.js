const express = require('express');
const router = express.Router();
const MemberService = require('../services/MemberService');
const auth = require('../middleware/Authentication');

router.get('/:team_id', auth, (req, res) => {
    MemberService.getByTeam(req.params.team_id)
        .then((members) => {
            res.json(members);
        });
});

router.post('/', auth, (req, res) => {
    const newMember = req.body;

    MemberService.insert(newMember)
        .then((value) => res.json(value))
        .catch((err) => res.json(err));
});

router.delete('/:id', auth, (req, res) => {
    const id = req.params.id;
    MemberService.delete(id)
        .then(() => { res.json({ success: true }); })
        .catch(err => { res.json(err); });
});

module.exports = router;