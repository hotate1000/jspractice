'use strict'

const topLink = document.getElementById('top');

window.addEventListener("scroll", () => {
  const scrollValue = document.scrollingElement.scrollTop;
  if(scrollValue >= 300) {
    topLink.style.display = "inline";
  }else if(scrollValue < 300) {
    topLink.style.display = "none";
  }
});