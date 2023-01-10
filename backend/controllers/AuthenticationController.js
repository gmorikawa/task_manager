const express = require('express');
const router = express.Router();

const UserService = require('../services/UserService');

router.post('/login', async (req, res) => {
    const user = await UserService.getByUsername(req.body.username);

    if(user !== null && user.password === req.body.password) {
        const session = req.session;
        session.userid = user._id.toString();
        res.json({ isValid: true });
    } else {
        res.json({ isValid: false });
    }
});

module.exports = router;