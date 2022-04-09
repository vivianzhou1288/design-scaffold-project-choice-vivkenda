import "../styles/cuisine.css";
import { gsap } from "gsap";

const food = [
  {
    img: "../images/964.jpg",
    name: "Cong You Bing",
  },
  {
    img: "../images/963.jpg",
    name: "Peking Duck",
  },
  {
    img: "../images/965.jpg",
    name: "Red Braised Pork Belly",
  },
  {
    img: "../images/966.jpg",
    name: "Stir-Fried Rice Cakes",
  },
  {
    img: "../images/967.jpg",
    name: "Chow Mein",
  },
  {
    img: "../images/1032.jpg",
    name: "Sichuan Mala Chicken",
  },
  {
    img: "../images/998.jpg",
    name: "Mapo Tofu",
  },
  {
    img: "../images/1033.jpg",
    name: "Fried Lobster",
  },
  {
    img: "../images/999.jpg",
    name: "Fried Dumplings",
  },
  {
    img: "../images/9910.jpg",
    name: "Chinese Sauerkraut Boiled Fish",
  },
  {
    img: "../images/9911.jpg",
    name: "Fried Rice",
  },
  {
    img: "../images/9912.jpg",
    name: "Noodles with Beef and Cucumber",
  },
  {
    img: "../images/9913.jpg",
    name: "Buddha Jumps Over the Wall",
  },
  {
    img: "../images/9914.jpg",
    name: "Drunken Noodles",
  },
  {
    img: "../images/4554.jpg",
    name: "Hot and Sour Soup",
  },
  {
    img: "../images/1034.jpg",
    name: "Honey Walnut Shrimp",
  },
  {
    img: "../images/9916.jpg",
    name: "Roast Pork",
  },
  {
    img: "../images/9922.jpg",
    name: "Egg Tofu",
  },
];
const DOMSelectors = {
  display: document.querySelector(".display"),
  displayCard: document.querySelector("#display-card"),
};

food.forEach((food) => {
  console.log(food);
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="display-card">
    <img class="display-img"src="${food.img}">
    <h2 class="display-name" >${food.name}</h2>
    </div>;`
  );
});
