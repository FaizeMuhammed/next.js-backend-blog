const express = require('express');
const { register, login, logout,checkAuth } = require('../controllers/authController');
const router = express.Router();
const { protect, admin } = require('../middleware/auth');




router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/status',protect , (req, res) => {
    res.json({ isAuthenticated: true, user: req.user }); 
  });
router.get('/check',checkAuth)  



 


module.exports = router;