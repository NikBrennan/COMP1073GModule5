/*  
    Object template that represents a vacation rental property.
    Properties : name, price,rating, location, rooms, availability and features
*/
class RentalProperty{
    constructor(name, price, rating, location, rooms, availability, features, image, lat, lng){
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.location = location;
        this.rooms = rooms;
        this.availability = availability;
        this.features = features;
        this.image = image;
        this.lat = lat;             // Module 5 Project Customization
        this.lng = lng;             // Module 5 Project Customization
    }
}



/*
    Method to display a description of the property 
*/
RentalProperty.prototype.description = function(){
    // This #rooms bedroom property located in #location offers features such as #features, and can be rented for the cost of #price per night.
    // The property is owned by #name and has a rating of #rating.
    let text = "This " + this.rooms + " bedroom property located in " + this.location + " offers features such as a " + this.features + ", and can be rented for the cost of $" + this.price + " per night. This property is owned by " + this.name + " and has a rating of " + this.rating + ".";
    // Create a p element and add the text to it, then append it to the body.
    let p = document.createElement("p");
    p.append(text);
    document.body.appendChild(p);
}


/*
    Method that checks availability.
*/
RentalProperty.prototype.available = function(){
    if(this.availability == true){
        return "available";
    }
    else{
        return "not available";
    }
}

/*
    Instantiate two different rental properties.
*/
property1 = new RentalProperty("Nik Brennan", 45.00, 4.7, "Barrie, Ontario", 3, true, ["pool table", "in-ground pool"], "images/pool-room.jpg", 44.406979, -79.674308);
property2 = new RentalProperty("Josh Brennan", 60.00, 4.8, "London, Ontario", 4, true, ["ping-pong table", "cinema"], "images/cinema-room.jpg", 42.982801, -81.243048);

/*
    Object template for special rate properties that inherits from the RentalProperty object.
    Includes a type property that is set to special rate ( - 20% of the regular price).
*/
class SpecialRateProperty extends RentalProperty{
    specialRate = 0.2;
    type = "Special Rate";
    constructor(name, price, rating, location, rooms, availability, features, image, lat, lng){
        super(name, price, rating, location, rooms, availability, features, image, lat, lng);
    }
}

/*
    Method to calculate and show the reduced rate.
*/
SpecialRateProperty.prototype.reducedRate = function(){
    let reducedRate = this.price - (this.price*this.specialRate);
    // let p = document.createElement("p");
    // p.append(reducedRate);
    // document.body.appendChild(p);
    return reducedRate;
}

/*
    Instantiate one special rate property.
*/
specialRate1 = new SpecialRateProperty("Jim Jones", 50.00, 4.6, "Ottawa, Ontario", 4, true, ["pool table", "in-ground pool"], "images/inground-pool.jpg", 45.417844, -75.700720);

/*
    Object template for super host properties that inherits from the RentalProperty object.
    Sets the type to superhost and includes a method to display the super host rating.
*/

class SuperHostProperty extends RentalProperty{
    superHost = 4.9;
    type = "Super Host";
    constructor(name, price, rating, location, rooms, availability, features, image, lat, lng){
        super(name, price, rating, location, rooms, availability, features, image, lat, lng);
    }
}

/*
    Method to display the super host rating.
*/
SuperHostProperty.prototype.superHost = function(){
    let superHost = this.superHost;
    let text = "This host has a super host rating of " + superHost + ".";
    let p = document.createElement("p");
    p.append(reducedRate);
    document.body.appendChild(p);
}

/*
    Instantiate one super host property.
*/
superHost1 = new SuperHostProperty("Clark Kent", 150, 4.9, "Metropolis", 6, true, ["cinema", "bar", "in-ground pool", "pool table"], "images/bar.jpg", 43.087729, -79.089514);

/*
    Display information in a creative way.

*/

/*
    Property 1
*/
let divProperty1 = document.getElementById("property");

let div1 = document.createElement("div");
div1.classList.add("property");

let image1 = document.createElement("img");
image1.src = property1.image;
divProperty1.appendChild(image1);

//Location and rating
let h2Location1 = document.createElement("h1");
h2Location1.innerText = property1.location;
div1.appendChild(h2Location1);
let pRating1 = document.createElement("p");
pRating1.innerText = property1.rating;
div1.appendChild(pRating1);
divProperty1.appendChild(div1);

//Other info
let pPrice = document.createElement("p");
pPrice.textContent = "Price: $" + property1.price + " per night";
divProperty1.appendChild(pPrice);

let pBedrooms = document.createElement("p");
pBedrooms.textContent = "Bedrooms: " + property1.rooms;
divProperty1.appendChild(pBedrooms);

let pFeatures = document.createElement("p");
pFeatures.textContent = "Features: " + property1.features;
divProperty1.appendChild(pFeatures);

let pAvailability = document.createElement("p");
pAvailability.textContent = "Available: " + property1.available();
divProperty1.appendChild(pAvailability);

let pContact = document.createElement("p");
pContact.textContent = "Contact: " + property1.name;
divProperty1.appendChild(pContact);



/*
    Property 2
*/
let divProperty2 = document.getElementById("property2");

let div2 = document.createElement("div");
div2.classList.add("property");

let image2 = document.createElement("img");
image2.src = property2.image;
divProperty2.appendChild(image2);

//Location and rating
let h2Location2 = document.createElement("h1");
h2Location2.innerText = property2.location;
div2.appendChild(h2Location2);
let pRating2 = document.createElement("p");
pRating2.innerText = property2.rating;
div2.appendChild(pRating2);
divProperty2.appendChild(div2);

//Other info
let pPrice1 = document.createElement("p");
pPrice1.textContent = "Price: $" + property2.price + " per night";
divProperty2.appendChild(pPrice1);

let pBedrooms1 = document.createElement("p");
pBedrooms1.textContent = "Bedrooms: " + property2.rooms;
divProperty2.appendChild(pBedrooms1);

let pFeatures1 = document.createElement("p");
pFeatures1.textContent = "Features: " + property2.features;
divProperty2.appendChild(pFeatures1);

let pAvailability1 = document.createElement("p");
pAvailability1.textContent = "Available: " + property2.available();
divProperty2.appendChild(pAvailability1);

let pContact1 = document.createElement("p");
pContact1.textContent = "Contact: " + property2.name;
divProperty2.appendChild(pContact1);

/*
    Property 3
*/
let divProperty3 = document.getElementById("property3");

let div3 = document.createElement("div");
div3.classList.add("property");

let image3 = document.createElement("img");
image3.src = specialRate1.image;
divProperty3.appendChild(image3);

//Location and rating
let h2Location3 = document.createElement("h1");
h2Location3.innerText = specialRate1.location;
div3.appendChild(h2Location3);
let pRating3 = document.createElement("p");
pRating3.innerText = specialRate1.rating;
div3.appendChild(pRating3);
divProperty3.appendChild(div3);

//Other info
let pPrice2 = document.createElement("p");
let pPriceReduction = document.createElement("p");
pPriceReduction.style.textDecoration = "line-through";
pPriceReduction.style.display = "inline-block";
pPriceReduction.textContent = specialRate1.price;
pPrice2.textContent = "Price: $";
pPrice2.append(pPriceReduction);
pPrice2.append(" " + specialRate1.reducedRate() + " per night");
divProperty3.appendChild(pPrice2);

let pBedrooms2 = document.createElement("p");
pBedrooms2.textContent = "Bedrooms: " + specialRate1.rooms;
divProperty3.appendChild(pBedrooms2);

let pFeatures2 = document.createElement("p");
pFeatures2.textContent = "Features: " + specialRate1.features;
divProperty3.appendChild(pFeatures2);

let pAvailability2 = document.createElement("p");
pAvailability2.textContent = "Available: " + specialRate1.available();
divProperty3.appendChild(pAvailability2);

let pContact2 = document.createElement("p");
pContact2.textContent = "Contact: " + specialRate1.name;
divProperty3.appendChild(pContact2);

/*
    Property 4
*/
let divProperty4 = document.getElementById("property4");

let div4 = document.createElement("div");
div4.classList.add("property");

let image4 = document.createElement("img");
image4.src = superHost1.image;
divProperty4.appendChild(image4);

//Location and rating
let h2Location4 = document.createElement("h1");
h2Location4.innerText = superHost1.location + " - " + superHost1.type;
div4.appendChild(h2Location4);
let pRating4 = document.createElement("p");
pRating4.innerText = superHost1.rating;
div4.appendChild(pRating4);
divProperty4.appendChild(div4);

//Other info
let pPrice3 = document.createElement("p");
pPrice3.textContent = "Price: $" + superHost1.price + " per night";
divProperty4.appendChild(pPrice3);

let pBedrooms3 = document.createElement("p");
pBedrooms3.textContent = "Bedrooms: " + superHost1.rooms;
divProperty4.appendChild(pBedrooms3);

let pFeatures3 = document.createElement("p");
pFeatures3.textContent = "Features: " + superHost1.features;
divProperty4.appendChild(pFeatures3);

let pAvailability3 = document.createElement("p");
pAvailability3.textContent = "Available: " + superHost1.available();
divProperty4.appendChild(pAvailability3);

let pContact3 = document.createElement("p");
pContact3.textContent = "Contact: " + superHost1.name;
divProperty4.appendChild(pContact3);










// Module 5 Project Customization




var map;
function initMap() {
  
    let div = document.getElementById('map'); 
  
    map = new google.maps.Map(div, {
      zoom: 7
    });

    let properties = [property1, property2, superHost1, specialRate1];

    properties.forEach(element => {
        let location = {
            lat: element.lat,
            lng: element.lng
        }
        
        let marker = new google.maps.Marker({
            position: location,
            map: map,
            title: element.name
        })
    });
};


if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPos);
}
else{
    console.log("Geolocation not supported");
};

function showPos(position){
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    var myLatLng = {lat, lng};
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        }    
    });
    map.setCenter(myLatLng);
};