document.addEventListener('DOMContentLoaded', () => {
    const restaurantList = document.getElementById('restaurant-list');
    const regionButtons = document.querySelectorAll(".region-button");
    const cuisineDropdown = document.getElementById('cuisine-dropdown');
    const applyFiltersButton = document.getElementById('apply-filters-button');
    
      let selectedRegion = 'All';
      let selectedCuisine = 'All';
  
    // List of restaurants
  
    const restaurants = [
        {
            name: "Elfuego by COLLIN'S",
            region: "East",
            neighbourhood: "Changi",
            cuisine: "European",
            category: "Restaurant",
            price: "$$$",
            link: "https://www.google.com/maps/place/Elfuego+by+COLLIN%E2%80%99S%C2%AE+Jewel+Changi+Airport/@1.3596093,103.9871351,17z/data=!3m1!5s0x31da3c8963249ae3:0xc47898720f015825!4m6!3m5!1s0x31da3dde6d5ecc1f:0x11621115117edff7!8m2!3d1.3596039!4d103.98971!16s%2Fg%2F11h6qdr8bs?entry=ttu",
            instagram: "https://www.instagram.com/elfuegosg/",
            image: "images/elfuego.jpeg",
        },
        {
            name: "Poulet Bijou",
            region: "East",
            neighbourhood: "Changi",
            cuisine: "French",
            category: "Restaurant",
            price: "$$$",
            link: "https://www.google.com/maps/place/Poulet+Bijou+-+Jewel+Changi+Airport/@1.3599008,103.9873618,17z/data=!3m2!4b1!5s0x31da3c8963249ae3:0xc4789872c75c8dc0!4m6!3m5!1s0x31da3de82243ee3d:0xe8764f97301c3e90!8m2!3d1.3598954!4d103.9899367!16s%2Fg%2F11rqmzptql?entry=ttu",
            instagram: "https://www.instagram.com/pouletsingapore/",
            image: "images/pouletbijou.jpeg",
        },
        {
            name: "The Original Boat Noodle",
            region: "East",
            neighbourhood: "Changi",
            cuisine: "Thai",
            category: "Restaurant",
            price: "$",
            link: "https://www.google.com/maps/place/The+Original+Boat+Noodle/@1.3294859,103.9598919,14.54z/data=!3m1!5s0x31da3cd7a2f40b67:0x6c70a15f6ac15168!4m14!1m7!3m6!1s0x31da3d97aff964db:0x34dd71619006d21d!2sThe+Original+Boat+Noodle!8m2!3d1.3342227!4d103.9622105!16s%2Fg%2F11f5v5kkq_!3m5!1s0x31da3d97aff964db:0x34dd71619006d21d!8m2!3d1.3342227!4d103.9622105!16s%2Fg%2F11f5v5kkq_?entry=ttu",
            instagram: "hhttps://www.instagram.com/boatnoodlesg",
            image: "images/oriboatnood.jpeg",
        },
        {
            name: "Suki-Suki Hot Pot",
            region: "North",
            neighbourhood:"Yishun",
            cuisine: "Thai",
            category: "Restaurant",
            price: "$$",
            link: "https://www.google.com/maps/place/Suki-Suki+Hot+Pot/@1.4145175,103.8282661,17z/data=!3m1!4b1!4m6!3m5!1s0x31da155a5bd57573:0xfd91275d0e9f33e6!8m2!3d1.4145121!4d103.830841!16s%2Fg%2F11ft80c8bw?entry=ttu",
            instagram: "https://www.instagram.com/sukisukihotpot.sg/",
            image: "images/sukisuki.jpeg",
        },
        {
            name: "Coba Coba",
            region: "North",
            neighbourhood:"Yishun",
            cuisine: "Malay",
            category: "Coffee Shop",
            price: "$",
            link: "https://www.google.com/maps/place/Coba+Coba/@1.4315973,103.8310066,17z/data=!3m1!5s0x31da14652bd7fd65:0x650ae11022b6a2cc!4m17!1m10!3m9!1s0x31da1465327d33a5:0x956cc1a1deef981f!2sCoba+Coba!8m2!3d1.4315919!4d103.8335815!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11bw4svmjy!3m5!1s0x31da1465327d33a5:0x956cc1a1deef981f!8m2!3d1.4315919!4d103.8335815!16s%2Fg%2F11bw4svmjy?entry=ttu",
            instagram: "https://www.instagram.com/cobasg/",
            image: "images/cobacoba.jpeg",
        },
        {
            name: "Deanna's Kitchen",
            region: "West",
            neighbourhood: "Jurong",
            cuisine: "Chinese",
            category: "Coffee shop",
            price: "$",
            link: "https://www.google.com/maps/place/Deanna%E2%80%99s+Kitchen+Jurong+East+Outlet-+Authentic+Halal+Prawn+Noodles/@1.3392644,103.7365241,17z/data=!3m2!4b1!5s0x31da101a5e0384db:0x57c7ec5427782985!4m6!3m5!1s0x31da174282284349:0x8ae5be79213bf3f4!8m2!3d1.339259!4d103.739099!16s%2Fg%2F11g9gpd6y4?entry=ttu",
            image: "images/deanna2.jpeg",
        },
        {
            name: "Fluff Stack",
            region: "West",
            neighbourhood: "Jurong",
            cuisine: "Dessert",
            category: "Cafe",
            price: "$$",
            link: "https://www.google.com/maps/place/Fluff+Stack+(Westgate)/@1.3343838,103.7402086,17z/data=!3m2!4b1!5s0x31da100fa832bb29:0x9abb5ecccfd1d4bd!4m6!3m5!1s0x31da11e6ff1de531:0xa46be4f9016c66b4!8m2!3d1.3343784!4d103.7427835!16s%2Fg%2F11ll8bfqjm?entry=ttu",
            instagram: "https://www.instagram.com/fluffstack/",
            image: "images/fluffstack.jpeg",
        },
        {
            name: "Poulet",
            region: "West",
            neighbourhood: "Jurong",
            cuisine: "French",
            category: "Restaurant",
            price: "$$",
            link: "https://www.google.com/maps/place/Poulet+-+Westgate/@1.3338285,103.7399068,17z/data=!3m2!4b1!5s0x31da100fa832bb29:0x9abb5ecccfd1d4bd!4m6!3m5!1s0x31da100faaff69d9:0x75de55a117e43573!8m2!3d1.3338231!4d103.7424817!16s%2Fg%2F11c51rbbn2?entry=ttu",
            instagram: "https://www.instagram.com/pouletsingapore/",
            image: "images/pouletbijou.jpeg",
        },
        {
            name: "Anna's",
            region: "Northeast",
            neighbourhood: "Punggol",
            cuisine: "Western",
            category: "Cafe",
            price: "$$",
            link: "https://www.google.com/maps/place/Anna's/@1.3873017,103.8698009,13.66z/data=!3m1!5s0x31da1600bd9ed403:0x17a0e9aeff2c68e3!4m6!3m5!1s0x31da150d03683813:0xfce3307bcad2c33b!8m2!3d1.4032692!4d103.9132265!16s%2Fg%2F11td1gl_cz?entry=ttu",
            instagram: "https://www.instagram.com/annassourdough_official",
            image: "images/annas.jpeg",
        },
        {
            name: "Fluff Stack",
            region: "Central",
            neighbourhood: "City Hall",
            cuisine: "Dessert",
            category: "Cafe",
            price: "$$",
            link: "https://www.google.com/maps/place/Fluff+Stack+(Suntec)/@1.2944681,103.8554395,17z/data=!3m2!4b1!5s0x31da19af25771877:0x64dca8531f0ccf88!4m6!3m5!1s0x31da193f8fa8128b:0x9bc14da8a1453e71!8m2!3d1.2944627!4d103.8580144!16s%2Fg%2F11h4wb5k8t?entry=ttu",
            instagram: "https://www.instagram.com/fluffstack/",
            image: "images/fluffstack.jpeg",
        },
    
        {
            name: "Konditory Artisan Bakes",
            region: "Central",
            neighbourhood: "Bugis",
            cuisine: "Bakery",
            category: "Takeaway",
            price: "$",
            link: "https://www.google.com/maps/place/Konditori+Artisan+Bakes/@1.3016576,103.8570921,17z/data=!3m2!4b1!5s0x31da19b11ec684dd:0x8f056354cf202b13!4m6!3m5!1s0x31da19b1190e4425:0xcf781e9c454f3801!8m2!3d1.3016522!4d103.859667!16s%2Fg%2F11c2lrycgs?entry=ttu",
            instagram: "https://www.instagram.com/konditorisg",
            image: "images/konditory.jpeg",
        },
        {
            name: "Tipo Pasta Bar",
            region: "Central",
            neighbourhood: "Bugis",
            cuisine: "Italian",
            category: "Restaurant",
            price: "$$",
            link: "https://www.google.com/maps/place/Tipo+Pasta+Bar/@1.3026274,103.8584511,17z/data=!3m2!4b1!5s0x31da19b6db17b685:0x992358902a0e7d8c!4m6!3m5!1s0x31da19232fb34b5d:0x4948faa7a00dcb3!8m2!3d1.302622!4d103.861026!16s%2Fg%2F11fd76cq1w?entry=ttu",
            image: "images/tipo1.jpeg",
        },
        
    ];
  
    // highlight button on click 
  
    function highlightOnClick(clickedButton) {
      selectedRegion = clickedButton.getAttribute("data-region");
        regionButtons.forEach((button) => {
          button.classList.remove("highlighted");
      });
        clickedButton.classList.add("highlighted");
    }
     // function to filter and display restaurants based on the selected region
  
     function filterRestaurants(selectedRegion) {
      console.log("Filtering with Region:", selectedRegion);
      // Filter restaurants by the selected region
          const selectedCuisine = cuisineDropdown.value;
    
  
      let filteredRestaurants = restaurants.filter((restaurant) => {
          return selectedRegion === 'All' || restaurant.region === selectedRegion;
      });
  
      filteredRestaurants = filteredRestaurants.filter((restaurant) => {
          return (
              (selectedCuisine === "All" || restaurant.cuisine === selectedCuisine)
          );
       });
  
      console.log("After Region and Additional Filters:", filteredRestaurants);
  
        // display filtered restaurants
        displayRestaurants(filteredRestaurants);
      }
    
      function displayRestaurants(restaurants) {
        restaurantList.innerHTML = '';
  
  
  
        restaurants.forEach((restaurant) => {
            const restaurantCard = document.createElement("div");
            restaurantCard.classList.add('restaurant-card');
  
            // Restaurant Image
            const imageElement = document.createElement("img");
            imageElement.src = restaurant.image; 
            imageElement.alt = restaurant.name; 
            restaurantCard.appendChild(imageElement);
  
            // restaurant details
            const details = document.createElement('div');
            details.classList.add("details");
            
            // Restaurant Name (with Link)
            const nameLink = document.createElement('a');
            nameLink.href = restaurant.link;
            nameLink.target = '_blank'; // Open link in a new tab
            nameLink.textContent = restaurant.name;
    
            const nameHeading = document.createElement('h2');
            nameHeading.appendChild(nameLink);
            details.appendChild(nameHeading);
  
            // Neighbourhood 
            const neighbourhoodParagraph = document.createElement('p');
            neighbourhoodParagraph.textContent =`Neighbourhood: ${restaurant.neighbourhood}`;
            details.appendChild(neighbourhoodParagraph);
  
            // Category
            const categoryParagraph = document.createElement('p');
            categoryParagraph.textContent = `Category: ${restaurant.category}`;
            details.appendChild(categoryParagraph);
  
            // Price Point
            const priceParagraph = document.createElement('p');
            priceParagraph.textContent = `Price: ${restaurant.price}`;
            details.appendChild(priceParagraph);
        
            // Cuisine
            const cuisineParagraph = document.createElement('p');
            cuisineParagraph.textContent = `Cuisine: ${restaurant.cuisine}`;
            details.appendChild(cuisineParagraph);
        
            restaurantCard.appendChild(details);
            restaurantList.appendChild(restaurantCard);
        });
     }
  
    regionButtons.forEach((button)=> {
        button.addEventListener('click',() => {
            selectedRegion = button.getAttribute("data-region");
            filterRestaurants(selectedRegion);
            highlightOnClick(button);
        });
    });
  
    cuisineDropdown.addEventListener('change', () => {
      // Use the last selected region
      filterRestaurants(selectedRegion);
   
    });
  });
  