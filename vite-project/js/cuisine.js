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
    description:
      "Families usually order fried lobster during the Lunar New Year or for special occasions. The dish consists of fried lobster, along with scallions.",
  },
  {
    img: "../images/999.jpg",
    name: "Fried Dumplings",
    description:
      "Fried dumplings is a favorite in China. They are usually pan-fried and consist of pork, cabbage, shiitake mushrooms, and garlic chives.",
  },
  {
    img: "../images/9910.jpg",
    name: "Chinese Sauerkraut Boiled Fish",
    description:
      "Chinese Sauerkraut Boiled Fish, also known as Szechuan Fish or Suan Cai Yu, is a szechuan style fish stew with pickled mustard greens.",
  },
  {
    img: "../images/9911.jpg",
    name: "Fried Rice",
    description:
      "Fried Rice is a common dish in China. It consists of white grain rice, that is usually leftover rice from the day before. You can add whatever you like into the dish. Usually, ingredients consists of eggs, green onions, vegetables, meat, soy sauce, and oil.",
  },
  {
    img: "../images/9912.jpg",
    name: "Noodles with Beef and Cucumber",
    description: "This dish consists of noodles with beef and cucumber.",
  },
  {
    img: "../images/9913.jpg",
    name: "Buddha Jumps Over the Wall",
    description:
      "This dish has an unique name of Budda Jumps Over the Wall. During the Qing Dynasty, a scholar who travelledby foot carried preserved food in a clay jar. When he began cooking the dish, the scent attracted a meditating monk. The monk proceeded to jump over the wall to eat the dish. The dish is a herbal soup full of nutritious Chinese ingredients that consists of abalone, chicken feet, dried scallops, dried medicinal herbs, and deer sinews.",
  },
  {
    img: "../images/9914.jpg",
    name: "Drunken Noodles",
    description:
      "Drunken Noodles is a stir fry noodle dish that is also known as Thai food. The dish consists of rice noodles, chicken (or other proteins), produce like shallots, carrots, and garlic, as well as sauces like oyster sauce, soy sauce, and fish sauce.",
  },
  {
    img: "../images/4554.jpg",
    name: "Hot and Sour Soup",
    description:
      "Hot and Sour Soup is a popular Sichuan cuisine. There are many variations of the soup in the Hunan province, as well as Beijing. Ingredients consist of dried shiitake mushrooms, dried lily flowers, pork, tofu, and wood ears.",
  },
  {
    img: "../images/1034.jpg",
    name: "Honey Walnut Shrimp",
    description:
      "Honey Walnut Shrimp is a Hong-Kong style recipe. THe dish consists of crispy battered shrimp tossed in a creamy sauce and topped with sugar-coated walnuts.",
  },
  {
    img: "../images/9916.jpg",
    name: "Roast Pork",
    description:
      "Roast Pork, or Siu Yuk, can be found in an average Chinese restaurant. For this dish, you will need a slab of pork belly that still had the ribs attached. An oven is needed to cook this dish.",
  },
  {
    img: "../images/9922.jpg",
    name: "Egg Tofu",
    description:
      "Egg Tofu is a special tofu made from water, eggs, and soy milk. You can pan fry, boil, and braise egg tofu. Egg tofu can also be eaten raw.",
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
        <div class="back"><h1 class="description">${food.description}</h1></div>
    </div>
  </div> `
  );
});
