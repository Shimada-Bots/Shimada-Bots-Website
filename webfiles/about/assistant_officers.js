const leftAOButton = document.getElementById("left-ao-button");
const rightAOButton = document.getElementById("right-ao-button");

const smallGears = document.getElementsByClassName("small-gear");
const AOCardWrappers = document.getElementsByClassName("ao-card-wrapper");
const AOCards = document.getElementsByClassName("ao-card");

let dots2 = document.getElementsByClassName("dot2");

let currentAOCard = 0;
let currAODegrees = 0;

function showAOSlides(n)
{
    if(n > 3)
    {
        difference = 1;
        currentAOCard = 0;
    }
    else if (n < 0)
    {
        difference = -1;
        currentAOCard = 3;
    }
    else
    {
        difference = n - currentAOCard;
        currentAOCard = n;
    }

    currAODegrees += difference;
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
      }
    dots2[currentAOCard].className += " active";
    
    smallGears[0].style.transform = "rotate(" + (15+90*currAODegrees) + "deg)";
    smallGears[1].style.transform = "rotate(" + (-90*currAODegrees) + "deg)";
    smallGears[2].style.transform = "rotate(" + (15+90*currAODegrees) + "deg)";
}

leftAOButton.addEventListener("click", () => {
    showAOSlides(currentAOCard-1);
})

rightAOButton.addEventListener("click", () => {
    showAOSlides(currentAOCard+1);
})