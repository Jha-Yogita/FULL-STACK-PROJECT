# Wanderlust – Travel Booking Platform

A full-stack web application for listing, viewing, and managing travel destinations and stays. Built using the **MVC architecture**, the platform includes user authentication, dynamic listings, image uploads, reviews, and full CRUD capabilities.

## Features

### Implemented
- **User Authentication (Passport.js)**  
  Login, signup, and session-based access control using Passport with Local strategy.

- **Campground Listing and Management**  
  Users can create, edit, and delete listings for locations, including descriptions, prices, and geolocation.

- **Image Uploads with Cloudinary**  
  Secure, responsive image upload and management with Cloudinary integration.

- **Review and Rating System**  
  Authenticated users can add and delete reviews with star ratings.


- **Error Handling and Flash Messages**  
  Server-side error handling with user feedback using connect-flash.



## Tech Stack

| Layer           | Technologies                          |
|------------------|---------------------------------------|
| Frontend         | EJS, Bootstrap, HTML/CSS              |
| Backend          | Node.js, Express.js                   |
| Database         | MongoDB (Mongoose ODM)                |
| Authentication   | Passport.js, bcrypt                   |
| Image Hosting    | Cloudinary                            |
| Deployment       | Render (or Railway) + MongoDB Atlas   |


