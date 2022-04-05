import "../styles/attractions.css";
import { gsap } from "gsap";

gsap.to(".box", 1, {
  scale: 1,
  opacity: 1,
  yoyo: true,
  y: 60,
  ease: "power1.inOut",
  stagger: {
    amount: 1.5,
    from: "left",
  },
});
