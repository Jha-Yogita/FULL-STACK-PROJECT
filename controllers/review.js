
const Listing=require("../models/listing.js");
const Review=require("../models/review.js");
module.exports.postReview=async(req,res)=> {
    let listing=await Listing.findById(req.params.id);
    let newReview=new Review(req.body.review);
    newReview.author=req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success","Your Review Has been added");
    res.redirect(`/listings/${req.params.id}`);
}
module.exports.deleteReview=async(req,res)=> {
    let {id,reviewId}=req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Your Review Has been deleted");
    res.redirect(`/listings/${id}`);
    
};