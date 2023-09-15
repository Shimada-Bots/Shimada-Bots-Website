const leftDirectorsButton = document.getElementById("left-directors-button");
const rightDirectorsButton = document.getElementById("right-directors-button");

const conveyerBelt = document.getElementById("conveyer-belt")

let dots3 = document.getElementsByClassName("dot3");

let currentDirectorCard = 0;
let currCycle = 0;

function populate()
{
    
}

function showDirectorsSlides(n)
{
    if(n > 6)
    {
        difference = 1;
        currentDirectorCard = 0;
    }
    else if (n < 0)
    {
        difference = -1;
        currentDirectorCard = 6;
    }
    else
    {
        difference = n - currentDirectorCard;
        currentDirectorCard = n;
    }

    for (i = 0; i < dots3.length; i++) {
        dots3[i].className = dots3[i].className.replace(" active", "");
      }
    dots3[currentDirectorCard].className += " active";


}

leftDirectorsButton.addEventListener("click", () => {
    showDirectorsSlides(currentDirectorCard-1);
})

rightDirectorsButton.addEventListener("click", () => {
    showDirectorsSlides(currentDirectorCard+1);
})