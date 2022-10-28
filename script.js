let body = document.getElementsByTagName("body")[0];

let navBar = document.getElementsByClassName("nav_bar")[0];
let switchCircle = document.querySelector("#navBar > #mode_switch_social_wrapper > #mode_switch_container > .switch_circle");
let modeSwitchContainer = document.getElementsByClassName("mode_switch_container")[0];
let socialIcons = document.querySelectorAll(".social_icon_parent > a > .social_icon");
let navLinksWrapper = document.querySelectorAll("#navBar > #navigation_links_wrapper")[0];
let navLinks = navLinksWrapper.children;
let hamburgerMenuWrapper = document.querySelector("body > #navBar > .menu_icon_wrapper");
let menuIcon = document.querySelectorAll("#menuIconWrapper > .menuIcon");

let mobileDropMenu = document.querySelector("body > .mobile_navigation_links");
let mobileNavLinks = document.querySelectorAll("body > .mobile_navigation_links > div > h3");
let mobileSwitchContainer = document.querySelector("body > .mobile_navigation_links > #mobile_mode_switch_container");
let mobileSwitchCircle = document.querySelector("body > .mobile_navigation_links > #mobile_mode_switch_container > img");

let homeContainer = document.getElementsByClassName("home_heading_container")[0];

let portfolioContainer = document.querySelector("body > section");

/*
**/

window.addEventListener("load", () => {
  localStorage.setItem("mode", "dark");
  localStorage.setItem("hamburger", "closed");
});

window.addEventListener("resize", () => {
  setTransitionProperty();
  if (window.innerWidth >= 832) {
    hamburgerClose();
  }
})


//mobile hamburger menu
hamburgerMenuWrapper.addEventListener("click", () => {
  setTransitionProperty();
  if (localStorage.getItem("hamburger") === "closed") {
    hamburgerOpen();
   
  } else {
    hamburgerClose();
  }
});

//mode switch
modeSwitchContainer.addEventListener("click", function() {

  if (localStorage.getItem("mode") !== "dark") {
    darkMode();
  } else {
    lightMode();
  }
});

//mobile nav bar mode switch
mobileSwitchContainer.addEventListener("click", () => {
  setTransitionProperty();
  if (localStorage.getItem("mode") === "light") {
    darkMode();
  } else {
    lightMode()
  }
  
})

function hamburgerOpen() {
  hamburgerMenuWrapper.children[0].style.top = "19px";
  hamburgerMenuWrapper.children[0].style.width = "0%";
  hamburgerMenuWrapper.children[0].style.left = "50%";

  hamburgerMenuWrapper.children[1].style.transform = "rotate(45deg)";
  hamburgerMenuWrapper.children[2].style.transform = "rotate(-45deg)";

  hamburgerMenuWrapper.children[3].style.top = "18px";
  hamburgerMenuWrapper.children[3].style.width = "0%";
  hamburgerMenuWrapper.children[3].style.left = "50%";
  localStorage.setItem("hamburger", "open");

  mobileDropMenu.style.top = "74px";
 
  

  if (localStorage.getItem("mode") === "dark") {
    for (let mn of mobileNavLinks) {
      mn.style.color = "white";
    }
  }

}

function hamburgerClose() {
   hamburgerMenuWrapper.children[0].style.top = "4px";
   hamburgerMenuWrapper.children[0].style.width = "100%";
   hamburgerMenuWrapper.children[0].style.left = "0px";

   hamburgerMenuWrapper.children[1].style.transform = "rotate(0deg)";
   hamburgerMenuWrapper.children[1].style.top = "19px";
   hamburgerMenuWrapper.children[2].style.top = "19px";
   hamburgerMenuWrapper.children[2].style.transform = "rotate(0deg)";

   hamburgerMenuWrapper.children[3].style.top = "34px";
   hamburgerMenuWrapper.children[3].style.width = "100%";
  hamburgerMenuWrapper.children[3].style.left = "0px";
  
  localStorage.setItem("hamburger", "closed");
  
   mobileDropMenu.style.top = "-150%";

}

function setTransitionProperty() {

  body.style.transition = "background-color 100ms ease-in";
  navBar.style.transitionDuration = "background-color 100ms ease-in";
  modeSwitchContainer.style.transitionProperty = "background-color 100ms ease-in";
  mobileDropMenu.style.transition = "top .33 ease-in-out";
  switchCircle.style.transitionProperty = "transform 100ms, filter 100ms, ease-in";
  navLinksWrapper.style.transition = "color 100ms ease-in";
  homeContainer.style.transitionProperty = "color 100ms ease-in";


  for (let hmi of hamburgerMenuWrapper.children) {
    hmi.style.transitionProperty =
      "transform background-color left width top";
    hmi.style.transitionDuration = ".35s";
    hmi.style.transitionTimingFunction = "ease-in-out";
  }

  mobileSwitchContainer.style.transition = "background-color ease-in";
  mobileDropMenu.style.transitionProperty = "top";
  mobileDropMenu.style.transitionDuration = "100ms";
  mobileDropMenu.style.transitionTimingFunction = "ease-in-out";

   
  mobileSwitchCircle.style.transition = "transform 250ms, filter 0s, ease-in-out";
 
}

function darkMode() {
  body.style.backgroundColor = "#161617";

  navBar.style.backgroundColor = "#1a1a1a";

  modeSwitchContainer.style.backgroundColor = "black";
 
  switchCircle.style.transform = "translateX(1.5px)";
  switchCircle.style.filter = "invert(1)";
 

  navLinksWrapper.style.color = "white";
  

  socialIcons[0].style.filter = "invert(1)";
  socialIcons[1].style.filter = "invert(1)";
  socialIcons[2].style.filter = "invert(1)";

  homeContainer.style.color = "white";
 

  for (let n of navLinks) {
    n.style.filter = "brightness(110%), contrast(110%)";
    n.style.fontWeight = "600";
  }

   for (let m of menuIcon) {
    m.style.backgroundColor = "white";
 
  }

//mobile navigation links  
   for (let mn of mobileNavLinks) {
     mn.style.color = "white";
   }

 //mobile mode switch;
  mobileSwitchContainer.style.backgroundColor = "black";
  mobileSwitchCircle.style.transform = "translateX(.9px)";
  mobileSwitchCircle.style.filter = "invert(1)";
  
  
  localStorage.setItem("mode", "dark");

}

function lightMode() {
  body.style.backgroundColor = "white";

  navBar.style.backgroundColor = "#ebeded";

  modeSwitchContainer.style.backgroundColor = "#dcdcde";
 

  switchCircle.style.transform = "translateX(-28.5px)";
  switchCircle.style.filter = "invert(0)";


  navLinksWrapper.style.color = "black";
  

  socialIcons[0].style.filter = "invert(0)";
  socialIcons[1].style.filter = "invert(0)";
  socialIcons[2].style.filter = "invert(0)";

  homeContainer.style.color = "black";
 

  for (let n of navLinks) {
    n.style.filter = "brightness(110%), contrast(110%)";
    n.style.fontWeight = "600";
  }

  for (let m of menuIcon) {
    m.style.backgroundColor = "black";
  }

  //mobile navigation links
    for (let mn of mobileNavLinks) {
      mn.style.color = "black";
  }
  
  //mobile mode switch;
  mobileSwitchContainer.style.backgroundColor = "#dcdcde";
  mobileSwitchCircle.style.transform = "translateX(-29.5px)";
  mobileSwitchCircle.style.filter = "invert(0)";


  localStorage.setItem("mode", "light");
}



