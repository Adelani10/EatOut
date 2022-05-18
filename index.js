
const hamburgerIcon = document.querySelector(".hamburger-icon")
const finks = document.querySelector(".finks")

hamburgerIcon.addEventListener("click", function(){
    finks.classList.toggle("showlinks")
})