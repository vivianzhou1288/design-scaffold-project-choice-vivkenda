import "../styles/style.css";
import { gsap } from "gsap";

const tl = gsap.timeline({ delay: 0.3 });

tl.from(".words", {
  opacity: 0,
  duration: 1.3,
  y: -50,
  stagger: 0.4,
});

tl.to(
  ".header-img",
  { y: -25, opacity: 1, duration: 4, ease: "elastic", stagger: 0.3 },
  "-=1.5"
);
