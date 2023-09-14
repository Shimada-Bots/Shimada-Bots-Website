const leftTTButton = document.getElementById("left-tt-button");
const rightTTButton = document.getElementById("right-tt-button");

const smallGears = document.getElementsByClassName("small-gear")

let dots2 = document.getElementsByClassName("dot2");

let currentTTCard = 0;

function showTTSlides(n)
{
    currentTTCard = n;
    for (i = 0; i < dots.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
      }
    dots2[currentTTCard].className += " active";
    
    smallGears[0].style.transform = "rotate(" + (15+30*currentTTCard) + "deg)";
    smallGears[1].style.transform = "rotate(" + (-30*currentTTCard) + "deg)";
    smallGears[2].style.transform = "rotate(" + (15+30*currentTTCard) + "deg)";
}

leftTTButton.addEventListener("click", () => {
    if(currentTTCard > 0)
    {
        showTTSlides(currentTTCard-1);
    }
})

rightTTButton.addEventListener("click", () => {
    if(currentTTCard < 5)
    {
        showTTSlides(currentTTCard+1);
    }
})