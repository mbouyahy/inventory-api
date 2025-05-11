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

exports.addItem = (req, res) => {
    const { name, price, description } = req.body;
    if (!name || !price) {
        return res.status(400).json({ error: 'Name and price are required' });
    }
    item.addItem(name, price, description, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.status(201).json({ message: 'Item added successfully' });
    });
}

exports.deleteItem = (req, res) => {
    const id = req.params.id;
    item.deleteItem(id, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.status(204).send();
    });
}
