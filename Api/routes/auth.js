const router = require("express").Router();  //use as app.use as we can't use app.use everywhere so we make router
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER

router.post("/register", async(req, res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
       const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPass
        // password: req.body.password
       });

       const user = await newUser.save();
       res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }
});

//LOGIN

router.post("/login", async(req, res) => {
    try{
         const user = await User.findOne({username: req.body.username});
         !user && res.status(400).json("wrong credentials!");
        // console.log(req.body.password,"pass");
         const validated = await bcrypt.compare(req.body.password, user.password);
        // const validated = await compare(req.body.password, user.password);
         !validated && res.status(400).json("wrong credentials!");
        //  console.log(user,"user in auth ");
        // console.log(validated,"valid ");
         const { password, ...others } = user._doc;    //search while login console what is there in __doc in user
        // console.log(user._doc,"user doc");
        // console.log(others,"ithers");
        res.status(200).json(others);
    }catch(err){
         res.status(500).json(err);
    }
})

module.exports  = router;