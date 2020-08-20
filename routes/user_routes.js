const express = require('express');
const router = express.Router();
const User = require('../models/user')
const Contact = require('../models/contact')


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
//save User
newUser.save((err,user) => {
    // user.hash = undefined;
    if(err && !user){
        res.status(401).json({ message:err });
    }
   else{ res.status(200).json({ status: 'SUCCESS', data: user })}
})
})

//API to get all users
router.get('/all', (req, res)=>{
    User.find({}, (err, user)=>{
        if(err && !user){
            res.status(401).json({ message:err });
        }
       else{ res.status(200).json({ status: 'SUCCESS', data: user })}
    })
})

//API to get user by ID
router.get('/:id', (req, res) => {
    User.findOne({
        mobile: req.params.id
    }, (err, user)=>{
        if(err && !user){
            res.status(401).json({ message:err });
        }
       else{ res.status(200).json({ status: 'SUCCESS', data: user })}
    })
})

//API to delete single user
router.delete('/:id', (req,res)=>{
    User.findByIdAndDelete(req.params.id, (err, result)=>{
        if(err && !user){
            res.status(401).json({ message:err });
        }
       else{ res.status(200).json({ status: 'SUCCESS', data: user })}
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



router.post('/contact', (req, res)=>{
    //check if user exits later

//hash password
let newUser = new User({
    name:req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message
})
//save User
newUser.save((err,user) => {
    // user.hash = undefined;
    if(err && !user){
        res.status(401).json({ message:err });
    }
   else{ res.status(200).json({ status: 'SUCCESS', data: user })}
})
})

//API to get all users
router.get('/allcontact', (req, res)=>{
    User.find({}, (err, user)=>{
        if(err && !user){
            res.status(401).json({ message:err });
        }
       else{ res.status(200).json({ status: 'SUCCESS', data: user })}
    })
})



module.exports = router
