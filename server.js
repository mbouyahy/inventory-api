const express = require('express');
const app = express();
const itemRoutes = require('./routes/itemRoutes');
const adminRoutes = require('./routes/adminRoutes');

const authRoutes = require('./routes/authRoutes');

require('dotenv').config();

app.use(express.json());
app.use('/', itemRoutes);
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

