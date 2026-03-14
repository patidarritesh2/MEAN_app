const jwt = require('jsonwebtoken');

const JWT_SECRET = 'rfedf5gfe45gdgfdfd'
module.exports = (req, res, next) => {

    const header = req.headers.authorization;

    if (!header)
        return res.status(401).json({ message: "Access denied" });

    const token = header.split(" ")[1];

    try {
        const verified = jwt.verify(token, JWT_SECRET);
        req.user = verified;
        next();
    } catch {
        res.status(401).json({ message: "Invalid token" });
    }
};