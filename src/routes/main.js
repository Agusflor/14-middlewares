const express = require('express');
const { index, contact, about, music, noEntry, admin, login } = require('../controllers/mainController');
const router = express.Router();
const adminAccess= require('../middlewares/admin')


router.get('/', index)
router.get('/contact', contact),
router.get('/about', about),
router.get('/music', music),
router.get('/admin', adminAccess, admin)
router.get('/noEntry', noEntry)
router.get('/login', login)

module.exports= router;