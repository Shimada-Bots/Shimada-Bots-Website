import JSON from "./directors-list.json" assert {type: "json"};

const leftDirectorsButton = document.getElementById("left-directors-button");
const rightDirectorsButton = document.getElementById("right-directors-button");

const conveyerBelt = document.getElementById("conveyer-belt");
const directorsSlider = document.getElementById("directors-slider");

let dots3 = document.getElementsByClassName("dot3");

let currentDirectorCard = 0;
let currCycle = 0;

function addDirector(director) {
    let newDirector = document.createElement('div');
        newDirector.className = "directors-card";
        newDirector.innerHTML = "<div style='padding: 5px; display: flex; flex-direction: column; align-items: center;'>" +
                                    "<img src='" + director.image + "' class='co-image'/>" +
                                    "<h4>" + director.name + "</h4>" +
                                    "<h2 style='color: #eee;'>" + director.title + "</h2>" +
                                "</div>" +
                                "<div style='padding: 5px; min-width: 50%;'>" +
                                    "<p>" + director.description + "</p>" +
                                "</div>";
        directorsSlider.appendChild(newDirector);
}

function populate() {
    let numDirectors = JSON.directors.length;
    for (let i = numDirectors - 1; i > 0; i++) {
        addDirector(JSON.directors[i]);
    }
    for (let i = 0; i < numDirectors; i++){
        addDirector(JSON.directors[i]);
    }
}

populate();

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