import "../styles/culture.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/*timeline animations */
function qs(selector, all = false) {
  return all
    ? document.querySelectorAll(selector)
    : document.querySelector(selector);
}

const sections = qs(".event-description", true);
const timeline = qs(".timeline");
const line = qs(".line");
line.style.bottom = `calc(100% - 20px)`;
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * 0.8;

function scrollHandler(e) {
  const { scrollY } = window;
  up = scrollY < prevScrollY;
  down = !up;
  const timelineRect = timeline.getBoundingClientRect();
  const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;

  const dist = targetY - timelineRect.top;
  console.log(dist);

  if (down && !full) {
    set = Math.max(set, dist);
    line.style.bottom = `calc(100% - ${set}px)`;
  }

  if (dist > timeline.offsetHeight + 50 && !full) {
    full = true;
    line.style.bottom = `-50px`;
  }

  sections.forEach((item) => {
    // console.log(item);
    const rect = item.getBoundingClientRect(); //     console.log(rect);

    if (rect.top + item.offsetHeight / 5 < targetY) {
      item.classList.add("show-me");
    }
  }); // console.log(up, down);

  prevScrollY = window.scrollY;
}

scrollHandler();
line.style.display = "block";
window.addEventListener("scroll", scrollHandler);

/*GSAP*/
const tl = gsap.timeline({ delay: 0.3 });
gsap.registerPlugin(ScrollTrigger);

tl.from(".heading", {
  opacity: 0,
  duration: 1.3,
  x: -50,
});
gsap.to(
  ".content",
  {
    scrollTrigger: {
      trigger: ".content",
      start: "top center",
    },
    y: -45,
    opacity: 1,
    duration: 1.75,
    ease: "back.out(1.7)",
    stagger: 0.3,
  },
  "-=1.5"
);

gsap.from(".newYear", {
  scrollTrigger: {
    trigger: ".newYear",
    start: "top center",
  },
  x: -120,
  opacity: 0,
  duration: 2,
  ease: "circ.out",
  stagger: 0.5,
});

gsap.from(".dragonBoat", {
  scrollTrigger: {
    trigger: ".dragonBoat",
    start: "center bottom",
  },
  x: 120,
  opacity: 0,
  duration: 2,
  ease: "circ.out",
  stagger: 0.5,
});

gsap.from(".mid-autumn", {
  scrollTrigger: {
    trigger: ".mid-autumn",
    start: "center bottom",
  },
  x: -120,
  opacity: 0,
  duration: 2,
  ease: "circ.out",
  stagger: 0.5,
});

gsap.from(".national-day", {
  scrollTrigger: {
    trigger: ".national-day",
    start: "center bottom",
  },
  x: 120,
  opacity: 0,
  duration: 2,
  ease: "circ.out",
  stagger: 0.5,
});

gsap.from(".winter-solistice", {
  scrollTrigger: {
    trigger: ".winter-solistice",
    start: "center bottom",
  },
  x: -120,
  opacity: 0,
  duration: 2,
  ease: "circ.out",
  stagger: 0.5,
});
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

const DOMSelectors = {
  normal: document.querySelector("#normal"),
  china: document.querySelector("#china"),
  body: document.getElementById("fullbody"),
  about: document.querySelector(".about"),
  traditions: document.querySelector(".traditions-grid"),
};

//normal
document.querySelector("#normal").addEventListener("click", function () {
  DOMSelectors.body.style.backgroundColor = "white";
  DOMSelectors.about.style.backgroundColor = "#dcdcdc";
  DOMSelectors.traditions.style.backgroundColor = "#dcdcdc";
});
//yellow
document.querySelector("#china").addEventListener("click", function () {
  DOMSelectors.body.style.backgroundColor = "lightyellow";
  DOMSelectors.about.style.backgroundColor = "#E9967A";
  DOMSelectors.traditions.style.backgroundColor = "#E9967A";
});
