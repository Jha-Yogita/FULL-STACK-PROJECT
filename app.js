
    require('dotenv').config();


const express=require("express");
const app=express();
const mongoose=require("mongoose");
const mongo_url="mongodb://127.0.0.1:27017/wanderlust";
const db_url=process.env.ATLAS_URL;
// const dburl=process.env.ATLAS_URL;
const path=require("path");
const Listing=require("./WEB-D-FULL-STACK-PROJECT/models/listing.js");
const Review=require("./WEB-D-FULL-STACK-PROJECT/models/listing.js");
const methodOverride = require("method-override");
const ejsMate=require("ejs-mate");
const ExpressError=require("./utils/ExpressError.js");
const listings=require("./routes/listing.js");
const reviews=require("./routes/review.js");
const users=require("./routes/user.js");
const session =require("express-session");
const MongoStore=require('connect-mongo');
const flash=require("connect-flash");
const passport=require("passport");
const localStrategy=require("passport-local");
const User=require("./WEB-D-FULL-STACK-PROJECT/models/user.js");
app.engine("ejs",ejsMate);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views/listings"));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
main().then(()=> {
    console.log("connected to db");
}).catch(err=> {
    console.log(err);
})
async function main() {
    await mongoose.connect(db_url);
}
const store =MongoStore.create({
    mongoUrl:db_url,
    crypto:{
        secret:process.env.SECRET
    },
    touchAfter:24*3600,
})
store.on(("error"),()=>{
    console.log("ERROR IN MONGO SESSION",err);
})
const sessionOptions= {
    store:store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie: {
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true
    },

};


// maintain /->session->flash
app.get("/",(req,res)=> {
    res.redirect("/listings");
})


app.use(session(sessionOptions));
app.use(flash());
app.use(passport.session());
app.use(passport.initialize());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use((req,res,next)=> {
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;

    next();
})

// app.get("/getdemo",async(req,res)=> {
//     let fakeUser=new User({email:"student@gmail.com",username:"student-a"});
//     let registeredUser=await User.register(fakeUser,"helloworld");
//     res.send(registeredUser);
// })
//user
app.use("/",users);
//listing routes
app.use("/listings",listings);
//review routes
app.use("/listings/:id/reviews",reviews);
app.get("/myreviews", async (req, res) => {
    const userId = res.locals.currUser._id;
    const listings = await Listing.find({ owner: userId })
        .populate({
            path: 'reviews',
            populate: {
                path: 'author', 
                select: 'username' 
            }
        });
    res.render("../users/reviews.ejs", { listings });
});
app.get("/myposts",async (req,res)=> {
    
    const userId = res.locals.currUser._id;
    const listings = await Review.find({ owner:userId }).populate("owner");
    res.render("../users/posts.ejs",{posts:listings});
})



// app.get("/testListing",(req,res)=> {
//     let sampleListing=new Listing({
//         title:"my new villa",
//         description:"by the beach",
//         price:1200,
//         location:"goa",
//         country:"India",
//     })
//     sampleListing.save();
//     console.log("saved succesfully");
//     res.send("succesfully");
// })

app.all("*",(req,res,next)=> {
    next(new ExpressError(404,"Page Not Found"));
})
app.use((err,req,res,next)=> {
    let{status=500,message="Some error occcurred"}=err;
    res.status(status).render("../error.ejs",{message});
})
app.listen(8080,()=> {
    console.log("working");
})