const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const {isLoggedIn}=require("../middleware.js");
const {isOwner}=require("../middleware.js");
const{validateListing}=require("../middleware.js");
const listingSchema=require("../controllers/listing.js");
const multer=require("multer");
const {storage}=require("../cloudConfig.js");
const Listing = require("../WEB-D-FULL-STACK-PROJECT/models/listing.js");
const upload=multer({storage});

router
.route("/")
.get(wrapAsync(listingSchema.index))
.post(isLoggedIn,upload.single("listing[image]"),validateListing,wrapAsync(listingSchema.new));

router.get("/new",isLoggedIn,wrapAsync(listingSchema.renderNew));
router.get("/search", listingSchema.search);
router
.route("/:id")
.get(wrapAsync(listingSchema.show))
.put(isLoggedIn,upload.single("listing[image]"), validateListing,wrapAsync(listingSchema.Edit))
.delete(isLoggedIn,isOwner,wrapAsync(listingSchema.delete));

router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingSchema.renderEdit));





module.exports=router;