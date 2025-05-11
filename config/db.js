const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data/inventory.db');

db.serialize(() => {
    db.run(
        `CREATE TABLE IF NOT EXISTS items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            price REAL NOT NULL,
            description TEXT
        )`
    );
    db.run(
        `CREATE TABLE IF NOT EXISTS admins (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL
        )`
    );
});

module.exports = db;