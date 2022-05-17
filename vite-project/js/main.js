import "../styles/style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ delay: 0.3 });
gsap.registerPlugin(ScrollTrigger);

tl.from(".words", {
  opacity: 0,
  duration: 1.3,
  y: -50,
  stagger: 0.4,
});

gsap.to(
  ".header-img",
  {
    scrollTrigger: {
      trigger: ".words",
      start: "bottom center",
    },
    y: -25,
    opacity: 1,
    duration: 4,
    ease: "elastic",
    stagger: 0.3,
  },
  "-=1.5"
);
export default {
  data() {
    return {
      title: "",
      id: "",
    };
  },
  methods: {
    getInfo(e) {
      this.title = e.target.id;
    },
  },
};

const path = document.querySelectorAll("path");
const map = document.querySelector(".mapOfChina");

const DOMSelectors = {
  province: document.getElementById,
};
