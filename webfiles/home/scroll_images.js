const leftButton = document.getElementById("left-image-button")
const rightButton = document.getElementById("right-image-button")
const imageContainer = document.getElementById("scroll-image-container")
const viewMoreButton = document.getElementById("view-more")

let currImage = 0
let dots = document.getElementsByClassName("dot");

function showSlides(n)
{
    currImage = n;
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      dots[currImage].className += " active";
    imageContainer.style.transform = "translate(-" + (currImage) + "00%, 0)"
}

leftButton.addEventListener("click", () => {
    
    if (currImage == 0)
        return

    if(currImage == 5)
        viewMoreButton.classList.add("is-hidden")
    
    showSlides(currImage-1)
})

rightButton.addEventListener("click", () => {
    if (currImage >= 5)
        return
    
    showSlides(currImage+1)
    
    if(currImage == 5)
        viewMoreButton.classList.remove("is-hidden")
})