const express=require('express');
const router=express.Router();

Router.get('/register', (req, res)=>{
    res.render('register');

});

module.exports = router;
