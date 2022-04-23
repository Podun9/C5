//import express router
const express = require('express'); 
const router = express.Router();

//import controllers
const rootController = require('./controllers/root');

//api
//halaman home
router.get('/', rootController.home);

//halaman game
router.get('/game', rootController.game);

//halaman login 
router.get('/login', rootController.login);
router.post('/login', (req, res) => {
    res.body.email
    res.body.password
});

//halaman register
router.get('/register', rootController.register);
router.post('/login', (req, res) => {
    res.body.email
    res.body.password
});


//kita exports
module.exports = router;