const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const {validateReview,isAuthor,isLoggedIn}=require("../middleware.js");
const reviewController=require("../controllers/review.js");
// reviews routes //
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.postReview));
router.delete("/:reviewId",isLoggedIn,isAuthor,wrapAsync(reviewController.deleteReview));
module.exports=router;