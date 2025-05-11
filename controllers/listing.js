const Listing=require("../models/listing.js");
module.exports.index=async(req,res)=> {
   
            const allListings=await Listing.find({});
            res.render("index.ejs",{allListings});
}
module.exports.renderNew=(req,res)=> {
    res.render("new.ejs");
}
module.exports.new=async (req,res)=> {
    console.log(req.file);
    let url=req.file.path;
    let filename=req.file.filename;
    const newList= new Listing(req.body.listing);
    newList.image={url,filename};
    newList.owner=req.user._id;
    await newList.save();
    req.flash("success","New listing has been added");
    res.redirect("/listings");

   
    
}
module.exports.show=async (req,res)=> {
    let {id}=req.params;
    const listing= await Listing.findById(id).populate({
        path:"reviews",
    populate: {
        path:"author"
    }})
        .populate("owner");
    if(!listing) {
        req.flash("error","This Listing doesnot exist anymore");
        res.redirect("/listings");
    }
    res.render("show.ejs",{listing});
}
module.exports.renderEdit=async (req,res)=> {
    let {id}=req.params;
    const listing=await Listing.findById(id);
    if(!listing) {
        req.flash("error","This Listing doesnot exist");
        res.redirect("/listings");
    }
    let originalUrl=listing.image.url;
    originalUrl=originalUrl.replace("/upload","upload/h_10,w_10");
    res.render("Edit.ejs",{listing});
}
module.exports.Edit=(async (req, res) => {
    let { id } = req.params;
    
    let listing=await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if( typeof req.file!=="undefined") {
        let url=req.file.path;
        let filename=req.file.filename;
        listing.image={url,filename};
        await listing.save();
    }
    req.flash("success","Listing has been Updated");
    res.redirect(`/listings/${id}`);
})

module.exports.delete=async(req,res)=> {
    let{id}=req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing has been deleted");
    return res.redirect("/listings");
}
module.exports.search=async (req, res) => {
    let query = req.query.q;
  
   
    if (query) {
     
       
        const results = await Listing.find({ title: { $regex: query, $options: "i" } });
       
        res.render("../listings/search", { results });
    
      
    } else {
      res.render("../listings/search", { results: [] });
    }
  }