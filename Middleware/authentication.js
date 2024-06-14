const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = async (req, res, next) => {
    const token = req.headers.authorization;

    try {
        if (token) {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if (decoded) {
                // Attach userId to the request object for subsequent middleware or routes
                req.userId = decoded.userId;
                next();
            } else {
                res.status(401).json({ message: "Please login again" });
            }
        } else {
            res.status(401).json({ message: "Please login first" });
        }
    } catch (error) {
        // Handle JWT verification errors
        res.status(401).json({ message: "Unauthorized" });
    }
};

module.exports = { authenticate };
