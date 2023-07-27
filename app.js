// JS for Shelter 

const burger = document.querySelector(".burger");

burger.addEventListener("click", ()=> {
 if (burger.classList.contains("open")) {
  burger.classList.remove("open")
 } else {
  burger.classList.add("open")
 }
})