const leftButton = document.getElementById("left-image-button")
const rightButton = document.getElementById("right-image-button")
const imageContainer = document.getElementById("scroll-image-container")
const viewMoreButton = document.getElementById("view-more")

let currImage = 0

leftButton.addEventListener("click", () => {
    if (currImage == 0)
        return

    if(currImage == 5)
        viewMoreButton.classList.add("is-hidden")
    
    imageContainer.style.transform = "translate(-" + (currImage - 1) + "00%, 0)"
    currImage--
    console.log(currImage)
})

rightButton.addEventListener("click", () => {
    if (currImage >= 5)
        return
    
    imageContainer.style.transform = "translate(-" + (currImage + 1) + "00%, 0)"
    currImage++
    console.log(currImage)

    if(currImage == 5)
        viewMoreButton.classList.remove("is-hidden")
})