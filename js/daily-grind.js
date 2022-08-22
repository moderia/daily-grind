//alert("its working");

//One unique image, with appropriate and matching content in the alt tag.  

//A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)

// A unique color that supports the image and paragraph of content

// here are the items we need to change for each coffee:

// image - src  of pic
// alt - alt tag of pic
// description - a paragraph of content about the coffee 
//name - a name of todays coffee 
// color - a color representing the coffee 
// today - the current day of the week

// we may also use the following, but not part of coffe itself 

function coffeeTemplate(coffee){
    let myReturn= "";
   
   myReturn += 
   `
       <p> 
           <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
           <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}s daily coffee special is 
           <strong class="feature">${coffee.name}</strong>, ${coffee.desc}
       </p>
   `;
   
   
    return myReturn;
   }
   
       
   
   let myDate  = new Date();
   let myDay = myDate.getDay();
   let coffee = "";
   
   //use location object to access querystring (address bar)
   const queryString = window.location.search;
       
   //output to console    
   console.log(queryString);
       
   //separate querystring parameters
   const urlParams = new URLSearchParams(queryString);
   
   if(urlParams.has("day")){//data avaible? show data from url
   
       myDay=urlParams.get("day");
   }
   //forced to be an interger
   myDay = parseInt(myDay);
   
   switch (myDay) {
   
       case 0:
           today = "Sunday";
           coffee = {
               color: "Black",
               name: "Cold Brew",
               pic: "images/cold-brew.jpg",
               alt: "Cold Brew Pic",
               day: "Sunday",
               desc: `Strong Cold Brew to prepare for Monday!`
            };
       break;
   
       case 1:
           today = "Monday";
           coffee = {
               color: "Yellow",
               name: "Carmel Latte",
               pic: "images/caramel-latte.jpg",
               alt: "Caramel Latte Picture",
               day: "Monday",
               desc: `Calorie packed Caramel Latte to start off your week!`
            };
       break;
   
       case 2:
           today ="Tuesday";
           coffee = {
               color: "Grey",
               name: "Drip",
               pic: "images/drip.jpg",
               alt: "Drip Picture",
               day: "Monday",
               desc: `Drip to hard you gonna f*** around and drown off this wave -Lil Baby (Drip to Hard)`
            };
       break;
       
       case 3:
           today ="Wendsday";
           coffee = {
               color: "pink",
               name:"Bubble Tea",
               pic:"images/bubble-tea.jpg",
               alt: "A Picture of a Bubble Tea",
               day: "Wednesday",
               desc:`I like me some bubble tea`
   
   
           };
           break;
   
           case 4:
               today ="Thursday";
               coffee = {
                   color: "Brown",
                   name:"Mocha",
                   pic:"images/mocha.jpg",
                   alt: "A Picture of a Mocha",
                   day: "Thursday",
                   desc:`I like me some Mocha`
       
       
               };
       break;
       
       case 5:
           today ="Friday";
           coffee = {
               color: "White",
               name:"Pumpkin Spice Latte",
               pic:"images/pumpkin-spice-latte.jpg",
               alt: "A Picture of a Pumpkin Spice Latte",
               day: "Friday",
               desc:`I like me some Pumpkins`
   
   
           };
       break;
   
       case 6:
           today ="Saturday";
           coffee = {
               color: "Gold",
               name:"Frappaccino",
               pic:"images/frappaccino.jpg",
               alt: "A Picture of a Frappe",
               day: "Saturday",
               desc:`I love Frappes`
   
   
           };
   
       
       default:
           today = "something went wrong";
       
   }
   //let coffeeData = coffeeTemplate(coffee);
   //alert(coffeeData);
   
   //loads coffee data to the html page
   document.getElementById("coffee3").innerHTML = coffeeTemplate(coffee);
   document.querySelector("html").style.backgroundColor = coffee.color;
   //console.log(coffee);