
const Listing=require("./models/listing.js");
const Review=require("./models/review.js");
const {listingSchema,reviewSchema}=require("./Schema.js");
const ExpressError=require("./utils/ExpressError");
module.exports.isLoggedIn=(req,res,next)=> {
    
    if(!req.isAuthenticated()) {
        
        
        req.flash("error","You must be logged in first");
        return res.redirect("/login");
    }
    next();

}
module.exports.saveRedirectUrl=(req,res,next)=> {
    if(req.session.redirectUrl) {
        res.locals.redirectUrl=req.originalUrl;
    }
   next();
}
module.exports.isOwner=async(req,res,next)=> {
    let {id}=req.params;
    const listing=await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)) {
        req.flash("error","You dont have the permssion ");
         return res.redirect(`/listings/${id}`);
    }
    next();

}
module.exports.isAuthor=async(req,res,next)=> {
    let{id,reviewId}=req.params;
    const review=await Review.findById(reviewId);
    if(review && review.author && !review.author.equals(res.locals.currUser._id)) {
        req.flash("error","You dont have the permssion ");
        return res.redirect(`/listings/${id}`);

    }
    next();
}
module.exports.validateListing=async(req,res,next)=> {
    
        let {error}= await listingSchema.validate(req.body);
       
        if(error) {
            let errMsg=error.details.map((el)=>el.message).join(",");
           
            return next(new ExpressError(400,errMsg));
            
        }
        next();
    
};
module.exports.validateReview=async(req,res,next)=> {
    let {error}=  reviewSchema.validate(req.body);
   
    if(error) {
        let errMsg=error.details.map((el)=>el.message).join(",");
       
        return next(new ExpressError(400,errMsg));
        
    }
    next();

}