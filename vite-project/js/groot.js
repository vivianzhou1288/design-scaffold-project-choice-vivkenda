import "../styles/groot.css";
import { gsap } from "gsap";

var slideIndex = 1;
showDivs(slideIndex);

const DOMSelectors = {
  left: document.querySelector(".left"),
  right: document.querySelector(".right"),
};

DOMSelectors.left.addEventListener("click", function () {
  plusDivs(-1);
});

DOMSelectors.right.addEventListener("click", function () {
  plusDivs(1);
});

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
