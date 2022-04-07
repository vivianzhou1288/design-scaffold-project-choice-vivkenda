import "../styles/attractions.css";
import { gsap } from "gsap";

gsap.from(".box", 1, {
  scale: 0.1,
  opacity: 0,
  y: 60,
  ease: "power1.inOut",
});
