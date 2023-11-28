document.addEventListener('DOMContentLoaded', () => {
    const restaurantList = document.getElementById('restaurant-list');
    const regionButtons = document.querySelectorAll(".region-button");

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
            name: "Suki-Suki Hot Pot",
            region: "North",
            neighbourhood:"Yishun",
            cuisine: "Thai",
            category: "Restaurant",
            price: "$$",
            link: "https://www.google.com/maps/place/Suki-Suki+Hot+Pot/@1.4145175,103.8282661,17z/data=!3m1!4b1!4m6!3m5!1s0x31da155a5bd57573:0xfd91275d0e9f33e6!8m2!3d1.4145121!4d103.830841!16s%2Fg%2F11ft80c8bw?entry=ttu",
            instagram: "https://www.instagram.com/sukisukihotpot.sg/",
        },
        {
            name: "Deanna's Kitchen",
            region: "West",
            neighbourhood: "Jurong",
            cuisine: "Chinese",
            category: "Coffee shop",
            price: "$",
            link: "https://www.google.com/maps/place/Deanna's+Kitchen+Kembangan+Outlet-+Authentic+Halal+Prawn+Noodles/@1.3196624,103.9100336,17z/data=!3m1!4b1!4m6!3m5!1s0x31da19e025fcc2fb:0xbb58f071ac363960!8m2!3d1.319657!4d103.9126085!16s%2Fg%2F11ks217psx?entry=ttu",
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
        var regionButtons = document.querySelectorAll(".region-button");
        for (var i = 0; i < regionButtons.length; i++) {
            regionButtons[i].classList.remove("highlighted");
        }
        clickedButton.classList.add("highlighted");
    }

     // function to filter and display restaurants based on the selected region

     function filterRestaurants(selectedRegion) {
        restaurantList.innerHTML = "";

        // filter restaurants based on the selected region
        const filteredRestaurants = restaurants.filter(restaurant => restaurant.region === selectedRegion); 

        // display filtered restaurants
        filteredRestaurants.forEach((restaurant) => {
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
            const pricePointParagraph = document.createElement('p');
            pricePointParagraph.textContent = `Price: ${restaurant.price}`;
            details.appendChild(pricePointParagraph);
        
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
            const selectedRegion = button.getAttribute("data-region");
            filterRestaurants(selectedRegion);
            highlightOnClick(button);
        });
    });
});