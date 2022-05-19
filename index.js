
const hamburgerIcon = document.querySelector(".hamburger-icon")
const links = document.querySelector(".links")

hamburgerIcon.addEventListener("click", function(){
    links.classList.toggle("showlinks")
})