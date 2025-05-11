const db = require('../config/db');

exports.getAllItems = (callback) => {
    db.all(`SELECT * FROM items`,[], callback);
};

exports.addItem = (name, price, description, callback) => {
    db.run(`INSERT INTO items (name, price, description) VALUES (?, ?, ?)`, 
        [name, price, description], callback);
};

exports.deleteItem = (id, callback) => {
    db.run(`DELETE FROM items WHERE id = ?`, [id], callback);
}
