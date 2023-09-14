const leftCOButton = document.getElementById("left-co-button");
const rightCOButton = document.getElementById("right-co-button");

const largeGear = document.getElementById("large-gear");

let dots = document.getElementsByClassName("dot1");

let currentOCCard = 0;

function showCOSlides(n)
{
    currentOCCard = n;
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      dots[currentOCCard].className += " active";
    largeGear.style.transform = "rotate(" + (-30*currentOCCard) + "deg)";
}

leftCOButton.addEventListener("click", () => {
    if(currentOCCard > 0)
    {
        showCOSlides(currentOCCard-1);
    }
})

rightCOButton.addEventListener("click", () => {
    if(currentOCCard < 5)
    {
        showCOSlides(currentOCCard+1);
    }
})