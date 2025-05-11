const express=require("express");
const router=express.Router();
const User=require("../WEB-D-FULL-STACK-PROJECT/models/user.js");
const Listing=require("../WEB-D-FULL-STACK-PROJECT/models/user.js");
const wrapAsync=require("../utils/wrapAsync")
const passport = require("passport");
const {saveRedirectUrl}=require("../middleware.js");
const userController=require("../WEB-D-FULL-STACK-PROJECT/controllers/user.js");
const mongoose=require("mongoose");

router
.route("/signup")
.get(userController.signUp)
.post(wrapAsync(userController.postSignup));

router
.route("/login")
.get(saveRedirectUrl,userController.renderLogin)
.put(saveRedirectUrl,passport.authenticate("local",{failureRedirect:'/login',failureFlash:true}),userController.Login);


router.get("/logout",userController.logout);
module.exports=router;


