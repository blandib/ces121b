
/*let menuElement = document.querySelector("#menu-items");
let menu = [];

const displayMenu = (menus) => {
    menus.forEach((item) => {
        const articleElement = document.createElement("article");
        const h2Element = document.createElement("h2");
        const h3Element = document.createElement("h3");
        const dlElement = document.createElement("dl");
        const dtElement = document.createElement("dt");
        const ddElement = document.createElement("dd");
        dtElement.textContent = item.detail;
        ddElement.textContent = item.description;
        h2Element.textContent = item.dishName;
        h3Element.textContent = item.dishPrice;
        
        const imgElement = document.createElement("img");
        imgElement.src = item.imageUrl;
        imgElement.alt = item.dish;
        articleElement.appendChild(h2Element);
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        dlElement.appendChild(dtElement);
        dlElement.appendChild(ddElement);
        articleElement.appendChild(dlElement);
        menuElement.appendChild(articleElement);
    });
};

const getMenu = async () => {
    try {
        const response = await fetch("https://blandib.github.io/cse121b/finalpro/menu.json");
        const data = await response.json();
        menu = data;
        displayMenu(menu);
    } catch (error) {
        console.error("Error fetching menu data:", error);
    }
};

// Call the getMenu function to populate the menu
getMenu();

const reset = () => {
    const menuItems = document.getElementById("menu-items"); // Corrected variable name
    const articles = menuItems.getElementsByTagName("article");
    while (articles.length > 0) {
        menuItems.removeChild(articles[0]);
    }
};*/

// get only unique categories - HARDEST ONE
// iterate over categories return buttons
// make sure to select buttons when they are available

// items
const menu = [
  {
    id: 1,
    title: "Chicken Fajitas",
    category: "Lunch",
    price: 59.99,
    img: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Flavorful-Chicken-Fajitas_EXPS_GHBZ18_12540_B08_15_8b.jpg",
    desc: `  delicious combination of crispy chicken strips, cooked with bell pepper & onions. Serve these amazing chicken fajitas `,
  },
  {
    id: 2,
    title: "Chicken Shrimp Fajita Nachos",
    category: "Lunch",
    price: 69.99,
    img: "https://th.bing.com/th/id/OIP.QUoErqaurnRHTETu1PiKEgAAAA?rs=1&pid=ImgDetMain",
    desc: ` Chicken Shrimp Fajita Nachos are a harmonious medley of savory, spicy, and creamy elements, perfect for sharing with friends or enjoying as a satisfying meal. 🌮🍤🧀`,
  },
  {
    id: 3,
    title: "Grilled Steak Nachos",
    category: "Dinner",
    price: 70.99,
    img: "https://th.bing.com/th/id/R.9da716ba1dfb7114711a5142f187129e?rik=vUSUm11ZXp640g&riu=http%3a%2f%2ftastefullyfrugal.org%2fwp-content%2fuploads%2f2018%2f08%2fGrilled-Steak-Nachos-2-of-5.jpg&ehk=VcBKbzU6mMcC0WO99E92FZzJXrjZ3JEuDCi1m6x305A%3d&risl=&pid=ImgRaw&r=0",
    desc: `Grilled Steak Nachos are a fiesta of textures and tastes—a party in your mouth where every component plays a flavorful role! 🌮🥩🧀🍅🥬`,
  },
  {
    id: 4,
    title: "chocolate chips pancake",
    category: "Breakfast",
    price: 40.99,
    img: "https://www.allthingsmamma.com/wp-content/uploads/2022/03/Chocolate-Chip-Pancakes-Hero-1-scaled.jpg",
    desc: `These Chocolate Chip Pancakes are sweetly delicious and filled with yummy chocolate chips. This super easy recipe is perfect for busy mornings. `,
  },
  {
    id: 5,
    title: "Reuben Stuffed Waffle",
    category: "Breakfast",
    price: 22.99,
    img: "https://www.gopresto.com/i/1588626044236/n/uploads/Reuben_Stuffed_Waffle.jpg",
    desc: ` the Reuben Stuffed Waffle is a savory, cheesy, and slightly tangy delight—a creative twist on both waffles and Reuben sandwiches. Enjoy this unique combination of comfort food! 🧀🥓🧇`,
  },
  {
    id: 6,
    title: "Oreo Milkshake",
    category: "Snack",
    price: 18.99,
    img: "https://bakewithshivesh.com/wp-content/uploads/2021/05/IMG_4013-scaled.jpg",
    desc: `Get ready to whip up the most scrumptious Oreo milkshake you've ever tasted! It's rich, creamy, and loaded with delicious cookies and cream texture`,
  },
  {
    id: 7,
    title: "Koeksisters",
    category: "Breakfast",
    price: 8.99,
    img: "https://netstorage-briefly.akamaized.net/images/30e55949bc124cda.jpg?imwidth=600",
    desc: ` Koeksisters have a golden crunchy crust and liquid syrup centre, are very sticky and sweet, and taste like honey`,
  },
  {
    id: 9,
    title: "Carame",
    category: "Snack",
    price: 20.99,
    img: "https://i.pinimg.com/originals/8b/21/50/8b21507a788eb500effe3b2dff4b5141.jpg",
    desc: ` Let's delve into the delightful world of caramel. 🍬.`,
  },
  {
    id: 10,
    title: "Cookies",
    category: "Snack",
    price: 11.99,
    img: "https://s-i.huffpost.com/gen/1264627/images/o-BEST-COOKIE-RECIPE-facebook.jpg",
    desc: `Imagine a cookie that's not just tasty but downright irresistible. When you take a bite, it transports you back to childhood memories or fills your senses with warmth`,
  },
  {
    id: 11,
    title: "Sosaties",
    category: "Dinner",
    price: 70.99,
    img: "https://th.bing.com/th/id/OIP.x64QD37CWru9TSSUQkkdKwHaKp?w=1069&h=1536&rs=1&pid=ImgDetMain",
    desc: ` Sosaties are a delightful South African dish of skewered lamb and apricot kebabs, often enjoyed during a classic South African braai (which means grill or barbecue in Afrikaans). `,
  },
  {
    id: 12,
    title: "Spicy Boerewors",
    category: "Lunch",
    price: 80.99,
    img: "https://th.bing.com/th/id/R.fda8a7779f856b10fd6fe2d779333fd0?rik=7f6qnsoFO5gqIA&riu=http%3a%2f%2fbuzzsouthafrica.com%2fwp-content%2fuploads%2fBoerewors-Serve.jpg&ehk=BJ%2fNoz0llCviS1k4xWmXuWRINLroiqw41rsRGR8vopo%3d&risl=&pid=ImgRaw&r=0",
    desc: ` It’s savory and smoky with a perfect blend of spices that makes it stand out from other sausages. `,
  },
  {
    id: 13,
    title: "Potjiekos",
    category: "Dinner",
    price: 120.99,
    img: "https://th.bing.com/th/id/R.01fad6f05a552055b74e96e9a4ea5de4?rik=D5oS2Q8BiVbjwA&riu=http%3a%2f%2fworlds-recipes.online%2fwp-content%2fuploads%2f2019%2f05%2fFB_IMG_1557527223214-1.jpg&ehk=GXuNf7B%2f%2bRZuS5dHnOX0Kh01xXhhDk6LKRiivr%2b101c%3d&risl=&pid=ImgRaw&r=0",
    desc: ` The taste of Potjiekos is unlike any other stew.So, imagine sitting by the fire, surrounded by laughter, as the aroma of Potjiekos fills the air. It’s a taste of tradition, history, and community all in one delicious pot. 🍲🔥`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} class="photo" alt=${item.title} />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">R${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>
      ${category}
      </button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll(".filter-btn");
  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCategory);
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}