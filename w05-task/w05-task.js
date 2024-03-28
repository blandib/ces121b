/* W05: Programming Tasks */
/* Declare and initialize global variables */

let templesElement = document.querySelector("#temples");
let templeList = [];

const displayTemples = (temples) => {
    temples.forEach((temp) => {
        const articleElement = document.createElement("article");
        const h3Element = document.createElement("h3");
        h3Element.textContent = temp.templeName;
        const imgElement = document.createElement("img");
        imgElement.src = temp.imageUrl;
        imgElement.alt = temp.location;
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        templesElement.appendChild(articleElement);
    });
};
/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const data = await response.json();
    templeList = data;
    displayTemples(templeList);
};

getTemples();
// reset Function 
const reset = () => {
    const templesElement = document.getElementById("temples");
    const articles = templesElement.getElementsByTagName("article");
    while (articles.length > 0) {
        templesElement.removeChild(articles[0]);
    }
};

// Function to filter temples based on user selection
let filterTemples = (temples) => {
    // Clear the output
    reset();

    // Get the value of the HTML element with ID 'filtered'
    let filter = document.getElementById("filtered").value;

    // Use a switch statement to respond to different cases
    switch (filter) {
        case "utah":
            // Filter temples located in the state of Utah
            displayTemples(temples.filter(temp => temp.location.includes("Utah")));

            break;
        case "notutah":
            // Filter temples located outside the state of Utah
            displayTemples(temples.filter(temp => ! temp.location.includes("Utah")));
            break;
        case "before-1950":
            // Filter temples built before 1950
            displayTemples(temples.filter(temp => new Date(temp.dedicatedDate) < new Date(1950,0 ,1)));
            break;
            case "all":
                displayTemples(temples);
                break;
        default:
            displayTemples(temples);
            break;
    }
};

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList)});