const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

router.get('/item', adminController.listItems);
router.post('/item', adminController.addItem);
router.delete('/item/:id', adminController.deleteItem);

module.exports = router;