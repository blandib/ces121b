/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Blandine Bukasa";
let currentYear = new Date().getFullYear();


const folderPath = "images"; 
const imageName = "../images/IMG.jpg"; 


const profilePicture = `${folderPath}/${imageName}`;


//console.log("Profile picture path:", profilePicture);

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imagesElement = document.querySelector("img");



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imagesElement.setAttribute("src", profilePicture);
imagesElement.setAttribute('alt', `Profile image of ${imageName}`);





/* Step 5 - Array */
const  favoriteFoods = ["Bobotie","Biltong and Droëwors","Boerewors","Pondu","Chikwanga","Pizza"];
foodElement.innerHTML = favoriteFoods.join(", ");
const favoriteFood = "Liboke De Poisson";
const newFood = "Moambe Chicken";
favoriteFoods.push(newFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
favoriteFoods.splice(",");
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;



