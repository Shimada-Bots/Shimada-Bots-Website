import JSON from "./directors-list.json" assert {type: "json"};

const leftDirectorsButton = document.getElementById("left-directors-button");
const rightDirectorsButton = document.getElementById("right-directors-button");

const conveyerBelt = document.getElementById("conveyer-belt");
const conveyerOverslider = document.getElementById("conveyer-overslider");
const directorsSlider = document.getElementById("directors-slider");
const directorsOverslider = document.getElementById("directors-overslider");

let dots3 = document.getElementsByClassName("dot3");

let currentDirectorCard = 0;
let currCycle = 0;
let cycleOffset = 0;
const directorWidth = 120;

function addConveyerSegment() {
    let newConveyerSegment = document.createElement('img');
    newConveyerSegment.src = "/Shimada-Bots-Website/assets/icons/conveyer-segment.png";
    newConveyerSegment.style.width = "100%";
    conveyerBelt.appendChild(newConveyerSegment);
}

function addDirector(director) {
    let newDirector = document.createElement('div');
    newDirector.className = "directors-card";
    newDirector.innerHTML = "<div style='padding: 5px; display: flex; flex-direction: column; align-items: center; text-align: center;'>" +
                                "<img src='" + director.image + "' class='co-image'/>" +
                                "<h4>" + director.name + "</h4>" +
                                "<p style='color: #eee; font-family: Varino; font-size: 100%'>" + director.title + "</p>" +
                            "</div>" +
                            "<div style='padding: 5px; margin-left: 2%; min-width: 55%;'>" +
                                "<p>" + director.description + "</p>" +
                            "</div>";
    directorsSlider.appendChild(newDirector);
    
    addConveyerSegment();
}

function populate() {
    let numDirectors = JSON.directors.length;
    for (let i = 0; i < numDirectors; i++) {
        addDirector(JSON.directors[i]);
    }
    for (let i = 0; i < numDirectors; i++){
        addDirector(JSON.directors[i]);
    }

    cycleOffset = -numDirectors;
    directorsOverslider.style.transform = "translate(" + directorWidth * cycleOffset + "%, 0)";
    conveyerOverslider.style.transform = "translate(" + (100 * cycleOffset)  + "%, 0)";
}

populate();

function swipeSlides(difference) {
    if (difference > 0) {
        for(let i = 0; i < difference; i++) {
            directorsSlider.appendChild(directorsSlider.firstElementChild.cloneNode(true));
            directorsSlider.removeChild(directorsSlider.firstElementChild);
            conveyerBelt.appendChild(conveyerBelt.firstElementChild.cloneNode(true));
            conveyerBelt.removeChild(conveyerBelt.firstElementChild);
        }
    }
    else {
        for(let i = 0; i < -difference; i++) {
            directorsSlider.prepend(directorsSlider.lastElementChild.cloneNode(true));
            directorsSlider.removeChild(directorsSlider.lastElementChild);
            conveyerBelt.prepend(conveyerBelt.lastElementChild.cloneNode(true));
            conveyerBelt.removeChild(conveyerBelt.lastElementChild);
        }
    }

    currCycle += difference;
    directorsOverslider.style.transform = "translate(" + (directorWidth * (cycleOffset + currCycle)) + "%, 0)";
    directorsSlider.style.transform = "translate(" + (-currCycle * directorWidth) + "%, 0)";

    conveyerOverslider.style.transform = "translate(" + (100 * (cycleOffset + currCycle)) + "%, 0)";
    conveyerBelt.style.transform = "translate(" + (-currCycle * 100) + "%, 0)";
}

function showDirectorsSlides(n)
{
    let difference = 0;
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

    for (let i = 0; i < dots3.length; i++) {
        dots3[i].className = dots3[i].className.replace(" active", "");
      }
    dots3[currentDirectorCard].className += " active";
    
    swipeSlides(difference);
}

window.showDirectorsSlides = showDirectorsSlides;

leftDirectorsButton.addEventListener("click", () => {
    showDirectorsSlides(currentDirectorCard-1);
})

rightDirectorsButton.addEventListener("click", () => {
    showDirectorsSlides(currentDirectorCard+1);
})