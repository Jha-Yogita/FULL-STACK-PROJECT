const sampleListings = [
  {
    "title": "Cozy Apartment in Downtown",
    "description": "A charming apartment located in the heart of the city, with great access to public transport and local amenities.",
    "image": { "url": "https://images.unsplash.com/photo-1604601638406-edc29b54dcf7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "filename": "photo-1701716271532-0593f814b9a6.jpg" },
    "price": 1200,
    "location": "New York",
    "country": "USA",
    "owner": "678fe9d05db85ee062e4b36f"
  },
  {
    "title": "Spacious Villa with Ocean View",
    "description": "A luxurious villa with a breathtaking view of the ocean, featuring modern amenities and a private pool.",
    "image": { "url": "https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "filename": "photo-1724877446843-2eaa6b34d115.jpg" },
    "price": 4500,
    "location": "Malibu",
    "country": "USA",
    "owner": "678fe9d05db85ee062e4b36f"
  },
  {
    "title": "Charming Cottage by the Lake",
    "description": "A beautiful little cottage located right by the lake, perfect for a weekend getaway or a peaceful retreat.",
    "image": { "url": "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "filename": "photo-1724877446843-2eaa6b34d115.jpg" },
    "price": 1000,
    "location": "Lake Tahoe",
    "country": "USA",
    "owner": "678fe9d05db85ee062e4b36f"
  },
  {
    "title": "Modern Apartment in Paris",
    "description": "Located in the 5th arrondissement, this modern apartment is perfect for tourists who want to experience the Parisian lifestyle.",
    "image": { "url": "https://plus.unsplash.com/premium_photo-1667162805450-a3c3469338b9?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "filename": "photo-1724877446843-2eaa6b34d115.jpg" },
    "price": 1800,
    "location": "Paris",
    "country": "France",
    "owner": "678fe9d05db85ee062e4b36f"
  },
  {
    "title": "Luxury Penthouse in Tokyo",
    "description": "A stunning penthouse with panoramic views of the city skyline, offering unparalleled luxury and convenience.",
    "image": { "url": "https://images.unsplash.com/photo-1509648033237-ae6ef40c2838?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "filename": "photo-1724877446843-2eaa6b34d115.jpg" },
    "price": 7000,
    "location": "Tokyo",
    "country": "Japan",
    "owner": "678fe9d05db85ee062e4b36f"
  },
  {
    "title": "Country House with Large Garden",
    "description": "A peaceful country house surrounded by a large garden, perfect for gardening enthusiasts and nature lovers.",
    "image": { "url": "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "filename": "photo-1724877446843-2eaa6b34d115.jpg" },
    "price": 2200,
    "location": "Bavaria",
    "country": "Germany",
    "owner": "678fe9d05db85ee062e4b36f"
  },
  {
    "title": "Chic Studio in London",
    "description": "This chic studio apartment is centrally located, ideal for young professionals or students who want to live in London’s vibrant city center.",
    "image": { "url": "https://images.unsplash.com/photo-1580202313707-46a966af5c6f?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "filename": "photo-1724877446843-2eaa6b34d115.jpg" },
    "price": 1500,
    "location": "London",
    "country": "UK",
    "owner": "678fe9d05db85ee062e4b36f"
  },
  {
    "title": "Beachfront Apartment in Sydney",
    "description": "Enjoy the sun, surf, and sand from this beautiful beachfront apartment with amazing views of the Pacific Ocean.",
    "image": { "url": "https://plus.unsplash.com/premium_photo-1666241368300-a1115df75b7c?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "filename": "photo-1724877446843-2eaa6b34d115.jpg" },
    "price": 2000,
    "location": "Sydney",
    "country": "Australia",
    "owner": "678fe9d05db85ee062e4b36f"
  },
  {
    "title": "Historical Mansion in Rome",
    "description": "A grand mansion located near the Colosseum, blending ancient Roman architecture with modern comforts.",
    "image": { "url": "https://images.unsplash.com/photo-1576874748772-584aa2bee2d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "filename": "photo-1724877446843-2eaa6b34d115.jpg" },
    "price": 5500,
    "location": "Rome",
    "country": "Italy",
    "owner": "678fe9d05db85ee062e4b36f"
  },
  {
    "title": "Mountain Cabin in Swiss Alps",
    "description": "A cozy mountain cabin offering incredible views of the Swiss Alps, ideal for skiing enthusiasts and winter vacations.",
    "image": { "url": "https://plus.unsplash.com/premium_photo-1684348962187-988fc3d7f024?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "filename": "photo-1724877446843-2eaa6b34d115.jpg" },
    "price": 3000,
    "location": "Zermatt",
    "country": "Switzerland",
    "owner": "678fe9d05db85ee062e4b36f"
  },
  {
    "title": "Riverside Condo in Bangkok",
    "description": "A beautiful condo located along the Chao Phraya River, offering serene views of the water and modern living spaces.",
    "image": { "url": "https://plus.unsplash.com/premium_photo-1683586218149-e3b33ff9c02a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "filename": "photo-1724877446843-2eaa6b34d115.jpg" },
    "price": 1300,
    "location": "Bangkok",
    "country": "Thailand",
    "owner": "678fe9d05db85ee062e4b36f"
  },
  {
    "title": "Luxury Ranch in Texas",
    "description": "A sprawling ranch in Texas with acres of land, horses, and a spacious home perfect for anyone looking to live the ranch life.",
    "image": { "url": "https://images.unsplash.com/photo-1605096048662-5ab61695a122?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "filename": "photo-1724877446843-2eaa6b34d115.jpg" },
    "price": 5500,
    "location": "Dallas",
    "country": "USA",
    "owner": "678fe9d05db85ee062e4b36f"
  },
  {
    "title": "Contemporary Loft in Berlin",
    "description": "A sleek and modern loft in the heart of Berlin, perfect for young creatives and professionals looking for a vibrant lifestyle.",
    "image": { "url": "https://plus.unsplash.com/premium_photo-1683586218091-27e0c39a7417?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "filename": "photo-1724877446843-2eaa6b34d115.jpg" },
    "price": 2200,
    "location": "Berlin",
    "country": "Germany",
    "owner": "678fe9d05db85ee062e4b36f"
  },
  {
    "title": "Elegant Studio in Barcelona",
    "description": "An elegant studio in a prime location of Barcelona, close to all the city's best attractions and vibrant neighborhoods.",
    "image": { "url": "https://images.unsplash.com/photo-1568605115459-4b731184f961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "filename": "photo-1724877446843-2eaa6b34d115.jpg" },
    "price": 1450,
    "location": "Barcelona",
    "country": "Spain",
    "owner": "678fe9d05db85ee062e4b36f"
  },
  {
    "title": "Charming Barn Conversion",
    "description": "A converted barn that combines rustic charm with modern comfort, perfect for those looking for a rural retreat.",
    "image": { "url": "https://images.unsplash.com/photo-1520190282873-afe1285c9a2a?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "filename": "photo-1724877446843-2eaa6b34d115.jpg" },
    "price": 1700,
    "location": "Kent",
    "country": "UK",
    "owner": "678fe9d05db85ee062e4b36f"
  }
]
module.exports = { data: sampleListings };
