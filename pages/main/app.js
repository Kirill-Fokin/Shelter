const burger = document.querySelector(".burger");
const slider = document.querySelector(".slider");
const dark = document.querySelector(".dark");
const navigation = document.querySelector(".navigation");



//burger-menu =============================================================

navigation.addEventListener('click', function(e) {
  if (e.target.classList.contains('navigation__link')) {
    burger.classList.remove("open")
  dark.classList.remove("open")
  navigation.classList.remove("open")
  };
})

burger.addEventListener("click", ()=> {
 if (burger.classList.contains("open")) {
  burger.classList.remove("open")
  dark.classList.remove("open")
  navigation.classList.remove("open")
 } else {
  burger.classList.add("open");
  dark.classList.add("open")
  navigation.classList.add("open")
 }
})

dark.addEventListener('click', ()=>{
  dark.classList.remove('open');
  burger.classList.remove('open');
  navigation.classList.remove('open');
});

slider.addEventListener('click', function (event) {
  // const target = event.traget;
  // if (target.classList.contains('.card')) {
    
  // }
});


//modal =============================================================
const cardButtons = document.querySelectorAll('.card__button');

console.log(cardButtons);

cardButtons.forEach((el)=> el.addEventListener('click', function(e){
  dark.classList.add("open");
  modalWindow.classList.add('modal');
  console.log(e);
}));


const popUp= document.createElement('div');
popUp.classList.add('pop-up');

const crossButton= document.createElement('div');
popUp.classList.add('cross');
const modalWindow = document.createElement('div');
modalWindow.classList.add('modal');

dark.append(modalWindow);



