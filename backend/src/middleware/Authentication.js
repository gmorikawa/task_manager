const isAuthorized = (req, res, next) => {
    session = req.session;

    if(session.userid) {
        return next();
    } else {
        const err = new Error();
        res.json({ status: 'not_auth' });
    }
}

module.exports = isAuthorized;