$(document).ready(function(){
  $('.slider').bxSlider({
  });
});



// -----------------------<< mega-menu >>-------------------
// $(".main-nav li").hover(function(){
//   $('.mega-menu').css("opacity", "0");
//   $('.mega-menu').css("zIndex", "-1");
// });
// $(".main-nav .home-nav").hover(function(){
//   $('.mega-menu').css("opacity", "1");
//   $('.mega-menu').css("zIndex", "12");
// });
// $(".mega-menu").mouseleave(function(){
//   $('.mega-menu').css("opacity", "0");
//   $('.mega-menu').css("zIndex", "-1");
// });

// -----------------------<< popup >>----------------------
let ourLogin = document.querySelectorAll('.name .scoop .img-overlay .overlay .save');

ourLogin.forEach( log => {
  log.addEventListener('click', (e) => {
    // create overlay
    let overlay = document.createElement("div");
    // add class overlay
    overlay.className = 'popup-overlay';
    // append to body
    document.body.appendChild(overlay);
    // create popup box
    let popupBox = document.createElement("div");
    // add class popupBox
    popupBox.className = 'popup-contentBox'
    document.body.appendChild(popupBox);
    //  add img 
    let picture = document.createElement("img");
    picture.className = "picture-red";
    popupBox.appendChild(picture);
    // heading box
    let headingFour = document.createElement("h4");
    headingFour.className="heading-style";
    let headingFourTxt = document.createTextNode("Create a free business account");
    headingFour.appendChild(headingFourTxt);
    popupBox.appendChild(headingFour);
    // add paragraph
    let paragraph = document.createElement("p");
    paragraph.className = "paragraph-style";
    let paragraphTxt = document.createTextNode("Get in front of 400 million people looking to buy, make, and do.");
    paragraph.appendChild(paragraphTxt);
    popupBox.appendChild(paragraph);
    // add input one
    let inputOne = document.createElement("input");
    inputOne.className = "input-one";
    inputOne.placeholder = "Email";
    popupBox.appendChild(inputOne);
    // add input two
    let inputTwo = document.createElement("input");
    inputTwo.className = "input-two";
    inputTwo.placeholder = "Create a password";
    popupBox.appendChild(inputTwo);
    // add input three
    let inputThree = document.createElement("input");
    inputThree.className = "input-three";
    inputThree.placeholder = "Age";
    popupBox.appendChild(inputThree);
    // add button
    let btnSubmit = document.createElement("button");
    let btnSubmitTxt = document.createTextNode("Create account");
    btnSubmit.className = "btn-submit";
    btnSubmit.appendChild(btnSubmitTxt);
    popupBox.appendChild(btnSubmit);
    // add span
    let span = document.createElement("span");
    span.className = "span-style";
    let spanTxt = document.createTextNode("By continuing, you agree to Pinterest's Business Terms of Service and acknowledge you've read our Privacy Policy");
    span.appendChild(spanTxt);
    popupBox.appendChild(span);
    





    // create the close span
    let closeButton = document.createElement("span");
    // create the close button text
    let closeButtontxt = document.createTextNode("X");
    // append txt to close button
    closeButton.appendChild(closeButtontxt);
    closeButton.className="close-button";
    closeButtontxt.className="txt-close";
    // add close to popup box
    popupBox.appendChild(closeButton);


  }); 
});
// close popup
document.addEventListener('click' , function(e){
  if (e.target.className == 'close-button') {
    e.target.parentNode.remove();
    document.querySelector('.popup-overlay').remove();

  }
});


// Scroll to top
var scrolltop = $(".scroll-top");
$(window).scroll(function () {
  if ($(this).scrollTop() >= 700) {
    scrolltop.fadeIn();
  } else {
    scrolltop.hide();
  }
});

scrolltop.click(function () {
  $("html,body").animate({ scrollTop: 0 }, 600);
});

// check Local color storage
let mainColors = localStorage.getItem("colors_option");
if (mainColors !== null) {
  console.log("not empty");
  console.log(localStorage.getItem("colors_option"));
  document.documentElement.style.setProperty( '--main-color' , localStorage.getItem("colors_option"));
  document.querySelectorAll(".list-color li").forEach((element) => {
    element.classList.remove("active");
    // add active when click in color
    if (element.dataset.color === mainColors) {
      element.classList.add("active");
    }
  });
}


//  Change colors
const colorLi = document.querySelectorAll('.list-color li');

colorLi.forEach(li => {
  li.addEventListener("click", (e) => {
    // console.log(e.target.dataset.color);
    // set color on root
    document.documentElement.style.setProperty( '--main-color' , e.target.dataset.color );
    // set color on local
    localStorage.setItem("colors_option", e.target.dataset.color);

    // remove all active class for all " li "
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active"); // add class active when you click on it
  });
});

// ------- open color toggle

document.querySelector(".change-color .btn-color").onclick = function () {

  document.querySelector('.change-color').classList.toggle('open');

}

// --------- slider to move (Show/hide)

let SliderMove = document.querySelector(".slide-move");
const SliderImg = document.querySelectorAll(".slide-move img");


window.onscroll = function () {
  console.log(this.scrollY); 
  if (this.scrollY >= 400) {
    SliderMove.classList.add("show");
  } else {
    SliderMove.classList.remove("show");
  }
  if (this.scrollY >= 4600) {
    SliderMove.classList.remove("show");
  }
  if (this.scrollY >= 400) {
    document.querySelector('.slide-move .img-one').style.setProperty( 'filter' , 'none' );
    document.querySelector('.slide-move .img-two').style.setProperty( 'filter' , 'grayscale(1)' );
    document.querySelector('.slide-move .img-three').style.setProperty( 'filter' , 'grayscale(1)' );
    document.querySelector('.slide-move .img-four').style.setProperty( 'filter' , 'grayscale(1)' );
  }
  if (this.scrollY >= 1000) {
    document.querySelector('.slide-move .img-one').style.setProperty( 'filter' , 'grayscale(1)' );
    document.querySelector('.slide-move .img-two').style.setProperty( 'filter' , 'none' );
    document.querySelector('.slide-move .img-three').style.setProperty( 'filter' , 'grayscale(1)' );
    document.querySelector('.slide-move .img-four').style.setProperty( 'filter' , 'grayscale(1)' );
  }
  if (this.scrollY >= 1950) {
    document.querySelector('.slide-move .img-one').style.setProperty( 'filter' , 'grayscale(1)' );
    document.querySelector('.slide-move .img-two').style.setProperty( 'filter' , 'grayscale(1)' );
    document.querySelector('.slide-move .img-three').style.setProperty( 'filter' , 'none' );
    document.querySelector('.slide-move .img-four').style.setProperty('filter' , 'grayscale(1)');
  }
  if (this.scrollY >= 3250) {
    document.querySelector('.slide-move .img-one').style.setProperty( 'filter' , 'grayscale(1)' );
    document.querySelector('.slide-move .img-two').style.setProperty( 'filter' , 'grayscale(1)' );
    document.querySelector('.slide-move .img-three').style.setProperty( 'filter' , 'grayscale(1)' );
    document.querySelector('.slide-move .img-four').style.setProperty('filter' , 'none');
  }

};


SliderImg.forEach( sli => {
  sli.addEventListener("click" , (e) => {
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior : 'smooth'
    });
  });
});

// -----------------------<< all navbar megamenu >>----------------------
let ourMenu = document.querySelector('.logo .toggle-menu .menu-click');
let spann = document.createElement("i");
let contentMenu = document.createElement("div");

let headingOne = document.createElement("h4");
let headingOneTxt = document.createTextNode("Home");
let headingTwo = document.createElement("h4");
let headingTwoTxt = document.createTextNode("About");

let headingThree = document.createElement("h4");
let headingThreeTxt = document.createTextNode("our foundation");

let headingFour = document.createElement("h4");
let headingFourTxt = document.createTextNode("brandson family");

let headingFive = document.createElement("h4");
let headingFiveTxt = document.createTextNode("Contact us");

let headingSix = document.createElement("h4");
let headingSixTxt = document.createTextNode("More info");



ourMenu.addEventListener('click' , (e) => {
  //  create overlay
  let overlayMenu = document.createElement('div'); 
  overlayMenu.className = 'overlay-menu';  
  document.body.appendChild(overlayMenu);
  // display none icon
  ourMenu.style.setProperty( 'display' , 'none' );
  // add span
  spann.className = "fa-solid fa-xmark fa-2x move-icon";
  document.body.appendChild(spann);
  // create content-menu
  contentMenu.className = 'content-menu'
  document.body.appendChild(contentMenu);
  // create the heading one
  headingOne.className="heading";
  headingOne.appendChild(headingOneTxt);
  contentMenu.appendChild(headingOne);
  // create the heading two
  headingTwo.className="heading";
  headingTwo.appendChild(headingTwoTxt);
  contentMenu.appendChild(headingTwo);
  // create the heading three
  headingThree.className="heading";
  headingThree.appendChild(headingThreeTxt);
  contentMenu.appendChild(headingThree);
  // create the heading four
  headingFour.className="heading";
  headingFour.appendChild(headingFourTxt);
  contentMenu.appendChild(headingFour);
  // create the heading five
  headingFive.className="heading";
  headingFive.appendChild(headingFiveTxt);
  contentMenu.appendChild(headingFive);
  // create the heading six
  headingSix.className="heading";
  headingSix.appendChild(headingSixTxt);
  contentMenu.appendChild(headingSix);
});

// delete overlay and megamenu
document.addEventListener('click' , (e) => {
  if (e.target.className == 'fa-solid fa-xmark fa-2x move-icon') {
    console.log('hello osma');
    document.querySelector('.overlay-menu').remove();
    spann.remove();
    contentMenu.remove();
    ourMenu.style.setProperty( 'display' , 'block' );
    headingOne.setProperty( 'display' , 'none' );
    headingOne.remove();
    headingTwo.remove();
    headingThree.remove();
    headingFour.remove();
    headingFive.remove();
    headingSix.remove();
  }
});



  // others for display
  // spann.style.setProperty('display' , 'block');
  // contentMenu.style.setProperty('display','block');
  // create contentMenu

  // spann.style.setProperty('display' , 'none');
  // contentMenu.style.setProperty('display','none');
