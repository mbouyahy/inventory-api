const item = require('../models/itemModel');

exports.listItems = (req, res) => {
    item.getAllItems((err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.json(rows);
    })
};
