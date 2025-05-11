const User=require("../models/user.js");
module.exports.signUp=(req,res)=> {
    res.render("../users/signup.ejs");
}
module.exports.postSignup=async(req,res)=> {
    try{
        let{username,email,password}=req.body;
    const newUser=new User({email,username});
    const registeredUser=await User.register(newUser,password);
    req.login(registeredUser,(err)=> {
        if(err) {
            return next(err);
        }
        req.flash("success","Welcome to Wanderlust");
        res.redirect("/listings");
    })
   }catch(err) {
        req.flash("failure",err.message);
        res.redirect("/signup")
    }
}
module.exports.renderLogin=(req,res)=> {
    res.render("../users/login.ejs");
}
module.exports.Login=async(req,res)=> {
    req.flash("success","Welcome to wanderlust");
    
    let redirectUrl=res.locals.redirectUrl || "/listings";
   
    res.redirect(redirectUrl);
}
module.exports.logout=async(req,res)=> {
    req.logout((err)=> {
        if(err) {
            return next(err);
        }
        req.flash("success","Welcome to wanderlust");
        let redirectUrl=res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl);
    })
 }
  



