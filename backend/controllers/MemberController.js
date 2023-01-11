const express = require('express');
const router = express.Router();
const UserService = require('../services/UserService');
const TeamService = require('../services/TeamService');
const MemberService = require('../services/MemberService');
const auth = require('../middleware/Authentication');

router.get('/:team_id', auth, (req, res) => {
    MemberService.getByTeam(req.params.team_id)
        .then((members) => {
            res.json(members);
        });
});

router.post('/', auth, async (req, res) => {
    const team = await TeamService.getById(req.body.team_id);
    const user = await UserService.getByUsername(req.body.username);

    if(team != null && user != null) {
        const newMember = {
            team: team._id,
            user: user._id
        };

        const member = await MemberService.getByUserAndTeam(newMember.team, newMember.user);

        if(member === null) {
            MemberService.insert(newMember)
                .then((value) => res.json(value))
                .catch((err) => res.json(err));
        } else {
            res.json({ success: false, msg: 'Duplicate user in team' });
        }
    } else {
        res.json({ success: false, msg: 'User or team doesn\'t exists' });
    }
});

router.delete('/:id', auth, (req, res) => {
    const id = req.params.id;
    MemberService.delete(id)
        .then(() => { res.json({ success: true }); })
        .catch(err => { res.json(err); });
});

module.exports = router;