import "../styles/testing.css";
import { gsap } from "gsap";

const navSlide = () => {
  const menu = document.querySelector(".toggle-button");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelector(".nav-links li");

  menu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    console.log(Object.keys(navLinks));
    Object.keys(navLinks).forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    menu.classList.toggle("toggle");
  });
};
navSlide();
