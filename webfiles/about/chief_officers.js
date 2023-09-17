const leftCOButton = document.getElementById("left-co-button");
const rightCOButton = document.getElementById("right-co-button");

const largeGear = document.getElementById("large-gear");
const coWindow = document.getElementById("co-rotate");

let dots = document.getElementsByClassName("dot1");

let currentCOCard = 0;

let currCODegrees = 0;

Number.prototype.mod = function (n) {
  "use strict";
  return ((this % n) + n) % n;
};

function showCOSlides(n)
{
    if(n > 4)
    {
        difference = 1;
        currentCOCard = 0;
    }
    else if (n < 0)
    {
        difference = -1;
        currentCOCard = 4;
    }
    else
    {
        difference = n - currentCOCard;
        currentCOCard = n;
    }

    currCODegrees += difference
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
    dots[currentCOCard].className += " active";
    
    largeGear.style.transform = "rotate(" + (60*currCODegrees) + "deg)";
    coWindow.style.transform = "rotate(" + (72*currCODegrees) + "deg)";
}

leftCOButton.addEventListener("click", () => {
    showCOSlides(currentCOCard-1);
})

rightCOButton.addEventListener("click", () => {
    showCOSlides(currentCOCard+1);
})