const data =[
  {
    "name": "Jennifer",
    "img": '/assets/cards/pets-jennifer.jpg',
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": '/assets/cards/sophia.jpg',
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": '/assets/cards/pets-woody.jpg',
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": '/assets/cards/pets-katrine.jpg',
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": '/assets/cards/pets-timmy.jpg',
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": '/assets/cards/freddie.jpg',
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  },

  {
    "name": "hery",
    "img": "../../assets/images/henry.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]




const burger = document.querySelector(".burger");
const slider = document.querySelector(".slider");
const modal = document.querySelector(".modal");
const navigation = document.querySelector(".navigation");
const body = document.querySelector(".body");
const popUp  = document.querySelector(".pop-up");
const modalBox = document.querySelector(".modal__box");



//burger-menu =============================================================

navigation.addEventListener('click', function(e) {
  if (e.target.classList.contains('navigation__link')) {
    burger.classList.remove("open")
    modal.classList.remove("modal")
    navigation.classList.remove("open")
    body.classList.remove("open")
  };
})

burger.addEventListener("click", ()=> {
 if (burger.classList.contains("open")) {
  burger.classList.remove("open")
  modal.classList.remove("open")
  body.classList.remove("open")
  navigation.classList.remove("open")
 } else {
  body.classList.add("open")
  burger.classList.add("open");
  modal.classList.add("open")
  navigation.classList.add("open")
 }
})

  modal.addEventListener('click', ()=>{
    modal.classList.remove('open');
    burger.classList.remove('open');
    navigation.classList.remove('open');
    body.classList.remove("open")
    modalBox.classList.remove('open');
});
















//modal =============================================================
const cards = document.querySelectorAll('.card');
const cardsTexts = document.querySelectorAll('.card__text');
const cardButtons = document.querySelectorAll('.card__button');

const subtextPars = document.querySelectorAll('.sybtext__par');
const modalImage = document.querySelector('.modal__image');
const modalTitle = document.querySelector('.modal__title');
const modalSubtitle = document.querySelector('.modal__subtitle');
const modalText = document.querySelector('.modal__text');


cardsTexts.forEach((el) => console.log(el.textContent));
 for (let i = 0; i < cardButtons.length ; i++ ) {
  cardButtons[i].dataset.value = cardsTexts[i].textContent;
}

cardButtons.forEach((el)=> el.addEventListener('click', function(e){
  modal.classList.add('open');
  modalBox.classList.add('open');
  body.classList.add('open');
  const cardName = this.dataset.value;

  for (i = 0; i < data.length; i++) {
    if (data[i].name == cardName) {
      const currentPet = data[i];
      modalImage.src = currentPet.img;
      modalTitle.textContent = cardName;
      modalSubtitle.textContent = currentPet.type + ' - ' + currentPet.breed;
      modalText.textContent = currentPet.description;
      subtextPars[0].textContent = 'Age: ' + currentPet.age;
      subtextPars[1].textContent = currentPet.inoculations;
      subtextPars[2].textContent = currentPet.diseases;
      subtextPars[3].textContent = currentPet.parasites;  
    }
   }




}));









//Slider =====================================
// const cards = document.querySelectorAll('.card');
// const cardsTexts = document.querySelectorAll('.card__text');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

const rightSlider = document.querySelector('.slider-left');
const middleSlider = document.querySelector('.slider-middle');
const leftSlider = document.querySelector('.rslider-right');











const pets = [0,1,2,3,4,5,6,7,8,9]

function getRandom() {
  return Math.random(0, 9);
}


console.log(getRandom(2,5));




// const leftNewArrow = document.querySelector('.left');
const rightNewArrow = document.querySelector('.our-friends_button');
const leftNewArrow = document.querySelector('.our-friends__title');
let offset = 0;


leftNewArrow.addEventListener('click', ()=> {
  offset -= 63
  document.querySelector('.slider-new2').style.left = offset + 'rem';
})









// rightNewArrow.addEventListener('click' , () => {
//   offset += 900;

//   document.querySelector('.slider-new').style.right =  offset  + 'px';


//   document.querySelector('.slider-new').style.right =  offset  + 'px';
  
//   const newSLide = document.createElement('div')
//   newSLide.classList.add('slide');
 

  
//   const newimage = document.createElement('img')

//   newimage.classList.add('slider-new-img');
  

//   newimage.src = '/assets/cards/sophia.jpg'
//   newSLide.append(newimage);
//   const newimage2 = document.createElement('img')

//   newimage2.classList.add('slider-new-img');
  

//   newimage2.src = '/assets/cards/sophia.jpg'
//   newSLide.append(newimage2);
//     const newimage3 = document.createElement('img')

    
//   newimage3.classList.add('slider-new-img');
//   newimage3.src = '/assets/cards/sophia.jpg';
//   newSLide.append(newimage3);

//   document.querySelector('.slider-new ').append(newSLide);
// //  (document.querySelector('.slider-new ').childNodes[0].remove());
// });


// leftNewArrow.addEventListener('click' , () => {

//   const newSLide = document.createElement('div')
//   newSLide.classList.add('slide');
 

  
//   const newimage = document.createElement('img')

//   newimage.classList.add('slider-new-img');
  

//   newimage.src = '/assets/cards/sophia.jpg'
//   newSLide.append(newimage);
//   const newimage2 = document.createElement('img')

//   newimage2.classList.add('slider-new-img');
  

//   newimage2.src = '/assets/cards/sophia.jpg'
//   newSLide.append(newimage2);
//     const newimage3 = document.createElement('img')

    
//   newimage3.classList.add('slider-new-img');
//   newimage3.src = '/assets/cards/sophia.jpg';
//   newSLide.append(newimage3);

//   document.querySelector('.slider-new ').prepend(newSLide);
//   offset -= 900;
//   document.querySelector('.slider-new').style.right =  offset  + 'px';
// });







{/* <div class="slide slider-right">
                  <img class="slider-new-img" src="/assets/cards/freddie.jpg" alt="" >
                  <img class="slider-new-img" src="/assets/cards/pets-charly.jpg" alt="" >
                  <img class="slider-new-img" src="/assets/cards/pets-jennifer.jpg" alt="" class="slider-image">
                </div> */}