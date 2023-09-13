const leftButton = document.getElementById("left-co-button");
const rightButton = document.getElementById("right-co-button");

const largeGear = document.getElementById("large-gear");

let dots = document.getElementsByClassName("dot");

let currentCard = 0;

function showSlides(n)
{
    currentCard = n;
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      dots[currentCard].className += " active";
    largeGear.style.transform = "rotate(" + (30*currentCard) + "deg)";
}

leftButton.addEventListener("click", () => {
    if(currentCard > 0)
    {
        showSlides(currentCard-1);
    }
})

rightButton.addEventListener("click", () => {
    if(currentCard < 5)
    {
        showSlides(currentCard+1);
    }
})