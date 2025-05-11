const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
    const { username, password} = req.body;
    db.get(`SELECT * FROM admins WHERE username = ?`,[username], (err, user) => {
       if (err) {
            return res.status(500).json({ error: 'Database error', details: err.message });
        }
        if (!user) {
            return res.status(401).json({ error: 'User not found',  username, password });
        }

        bcrypt.compare(password, user.password_hash, (err, isMatch) => {
            if (isMatch){
                const token = jwt.sign({id: user.id, username: user.username}, process.env.SECRET_KEY, {expiresIn: '1h'});
                res.json({token});
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
        });
    });
};