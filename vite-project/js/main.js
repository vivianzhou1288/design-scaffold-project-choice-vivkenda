import "../styles/style.css";
import { gsap } from "gsap";

const tl = gsap.timeline({ delay: 0.3 });

tl.from(".words", { opacity: 0, duration: 1.8, y: -50, stagger: 0.4 });
