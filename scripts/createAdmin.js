const db = require('../config/db');
const bcrypt = require('bcrypt');
require('dotenv').config();

const username = process.env.ADMIN_USERNAME || 'admin';
const password = process.env.ADMIN_PASSWORD || 'admin123';
if (!username || !password) {
  console.error('Please set ADMIN_USERNAME and ADMIN_PASSWORD environment variables.');
  process.exit(1);
}
const saltRounds = 1;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    return console.error('Error hashing password:', err);
  }

  db.run(
    'INSERT INTO admins (username, password_hash) VALUES (?, ?)',
    [username, hash],
    (err) => {
      if (err) {
        return console.error('Error inserting admin:', err.message);
      }
      console.log('Admin user created successfully!');
    }
  );
  console.log('Hashed password:', hash);
  console.log('Username:', username);
  console.log('Password:', password);

});
