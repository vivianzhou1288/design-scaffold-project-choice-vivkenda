import "../styles/cuisine.css";
import { gsap } from "gsap";

const food = [
  {
    img: "../images/964.jpg",
    name: "Cong You Bing",
    description:
      "Cong You Bing is also known as scallion pancake or green onion pancake. It is a Chinese, savory, unleavened flatbread with minced scallions, and is ususally pan-fried.",
  },
  {
    img: "../images/963.jpg",
    name: "Peking Duck",
    description:
      "Peking Duck is a dish that originated in Beijing. It consists of thin roasted duck meat and strips of crispy duck skin topped with scallions and sauce. It is usually wrapped in thin pancakes.",
  },
  {
    img: "../images/965.jpg",
    name: "Red Braised Pork Belly",
    description:
      "Red Braised Pork Belly, also known as hong shao rou, is a classic pork dish from mainland China. The dish consists of a combination of red-cooked pork, ginger, garlic, aromatic spices, chilies, sugar, star anise, light and dark soy sauce, and rice wine.",
  },
  {
    img: "../images/966.jpg",
    name: "Stir-Fried Rice Cakes",
    description:
      "Stir-fried rice cakes, also known as Chao Nian Gao, is typically eaten during Chinese New Year since it is considered to bring good luck and fortune fo the new year.",
  },
  {
    img: "../images/967.jpg",
    name: "Chow Mein",
    description:
      "Chow mein, or Chinese stir-fried noodles consists of noodles, vegatables, and sometimes meat or tofu.Over the centuries, many variations of Chow Mein were developed in many regions of China. Chow Mein was introduced to other countries by Chinese immigrants.",
  },
  {
    img: "../images/1032.jpg",
    name: "Sichuan Mala Chicken",
    description:
      "Sichuan Mala Chicken, or La Zi Ji, is a Sichuan dish that is popular in China. The chicken is usually coated with spices and stir-fried in dried chili peppers. Not recommended for people who cannot handle the heat 😤.",
  },
  {
    img: "../images/998.jpg",
    name: "Mapo Tofu",
    description:
      "Mapo Tofu is a popular Chinese dish from the Sichuan province. The dish consists of tofu in a spicy sauce, based on douban and douchi, along with minced meat.",
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
  displayCard: document.querySelector(".display-card"),
};

food.forEach((food) => {
  console.log(food);
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="card-container">
    <div class="card">
        <div class="front">
  <img class = "display-img" src="${food.img}" alt="">
          <h1 class="card-title">${food.name}</h1>
        </div>
        <div class="back"><h1 class="description">sjadksfhaebjbf Back jdafksygdj descriptions jskashdashf</h1></div>
    </div>
  </div> `
  );
});
