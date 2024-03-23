/* LESSON 3 - Programming Tasks */

/* Profile Object  */


let myprofile = {
    name: "Blandine Bukasa",
    photo: "./images/IMG.jpg",
    favoriteFoods: [
        "Chakalaka and Rice",
        "Biltong and Droëwors",
        "Boerewors","Pondu",
        "Chikwanga","Pizza"
    ],
    hobbies: [
        "Studing Web development",
        "Waching YouTube videos",
        "Listening to music",
        "Coding",
        "Learning"
    ],
   placesLived: [],
     /*= { 
            place:  "Johannesburg, SA ,5 years",
        length:"cape town ,4 years"

    }*/
   
}

let placeslived = {
    place: "Johannesburg, SA",
    length: "5 years",
    place: "Cape town, SA",
    length: "3 years",
    place: "Durban",
    length: "2 years"
} 
myprofile.placesLived.push(placeslived)

/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */
document.querySelector("#name").textContent = myprofile.name;

/* Name */

/* Photo with attributes */
const photoElement = document.querySelector("#photo");
photoElement.setAttribute("src", myprofile.photo);
photoElement.setAttribute('alt', `Profile image of ${myprofile.photo}`);
/* Favorite Foods List*/
myprofile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
})

/* Hobbies List */
myprofile.hobbies.forEach(hobbies => {
    let ul = document.createElement("li");
    ul.textContent = hobbies;
    document.querySelector("#hobbies").appendChild(ul);
})

/* Places Lived DataList */

myprofile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place; // Use the 'place' property from the object
    document.querySelector("#places-lived").appendChild(dt); // Append <dt> to the <dl>

    let dd = document.createElement("dd");
    dd.textContent = place.length; // Use the 'length' property from the object
    document.querySelector("#places-lived").appendChild(dd); // Append <dd> to the <dl>
});