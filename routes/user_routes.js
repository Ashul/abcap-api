const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
// const JWT = require('jsonwebtoken')
const User = require('../models/user')

//API to Signup User
router.post('/apply', (req, res)=>{
    //check if user exits later

//hash password
let newUser = new User({
    name:req.body.name,
    email:req.body.email,
    mobile: req.body.mobile,
    amountReq: req.body.amountReq,
    reqFor: req.body.reqFor,
})
console.log(newUser)
//save User
newUser.save((err,user) => {
    // user.hash = undefined;
    if(err){
        res.status(401).json({ message:err });
    }
   else{ res.send(user)}
})
})

//API to get all users
router.get('/all', (req, res)=>{
    User.find({}, (err, user)=>{
        if(err){console.log(err)}
        else{res.send(user)}
    })
})

//API to get user by ID
router.get('/:id', (req, res) => {
    User.findOne({
        mobile: req.params.id
    }, (err, user)=>{
        if(err){console.log(err)}
        else{res.send(user)}
    })
})

//API to delete single user
router.delete('/:id', (req,res)=>{
    User.findByIdAndDelete(req.params.id, (err, result)=>{
        if(err){console.log(err)} // error handlers
        else{res.send("User Deleted")}
    })
})

//API to Update User 
router.put('/:id', (req,res)=>{
    let updateUser = req.body;
    User.findByIdAndUpdate(req.params.id, updateUser, {new:true},(err, user)=>{
        if(err){console.log(err)}
        else{
            res.send(user)
        }
    })
})


module.exports = router
