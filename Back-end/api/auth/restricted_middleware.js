const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (token) {
            jwt.verify(token, process.env.JWT_SECRET, (err, decodedPayload) => {
                if (err) {
                    res.status(401).json({you: 'You cannot get in!'});
                }
                req.token = decodedPayload;
                next();
            })
        } else {
            res.status(401).json({you: 'You cannot get in, please verify your credentials!'});
        }
    } catch {
        res.status(401).json({you: 'You cannot get in'});
    }
}