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
  mobileDropMenu.style.transform = "top";
  mobileDropMenu.style.transition = ".33 ease-in-out";

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
  mobileDropMenu.style.transform = "top";
  mobileDropMenu.style.transition = ".33 ease-in-out";

}

function setTransitionProperty() {

  for (let hmi of hamburgerMenuWrapper.children) {
    hmi.style.transitionProperty = "rotate(0deg) translateX() left width top";
    hmi.style.transitionDuration = ".35s";
    hmi.style.transitionTimingFunction = "ease-in-out";
  }

  mobileDropMenu.style.transition = "top .35s ease-in-out";

  mobileSwitchCircle.style.transition = "transform 100ms, filter 100ms, ease-in-out";
 
}

function darkMode() {
  body.style.backgroundColor = "#161617";
  body.style.transitionProperty = "background-color";
  body.style.transitionDuration = "100ms";
  body.style.transitionTimingFunction = "ease-in";

  navBar.style.transitionProperty = "background-color";
  navBar.style.transitionDuration = "100ms";
  navBar.style.transitionTimingFunction = "ease-in";
  navBar.style.backgroundColor = "#1a1a1a";

  modeSwitchContainer.style.backgroundColor = "black";
  modeSwitchContainer.style.transitionProperty = "background-color";
  modeSwitchContainer.style.transitionDuration = "100ms";
  modeSwitchContainer.style.transitionTimingFunction = "ease-in";

  switchCircle.style.transform = "translateX(1.5px)";
  switchCircle.style.filter = "invert(1)";
  switchCircle.style.transitionProperty = "transform,filter";
  switchCircle.style.transitionDuration = "100ms";
  switchCircle.style.transitionTimingFunction = "ease-in";

  navLinksWrapper.style.color = "white";
  navLinksWrapper.style.transitionProperty = "color";
  navLinksWrapper.style.transitionDuration = "100ms";
  navLinksWrapper.style.transitionTimingFunction = "ease-in";

  socialIcons[0].style.filter = "invert(1)";
  socialIcons[1].style.filter = "invert(1)";
  socialIcons[2].style.filter = "invert(1)";

  homeContainer.style.color = "white";
  homeContainer.style.transitionProperty = "color";
  homeContainer.style.transitionDuration = "100ms";
  homeContainer.style.transitionTimingFunction = "ease-in";

  for (let n of navLinks) {
    n.style.filter = "brightness(110%), contrast(110%)";
    n.style.fontWeight = "600";
  }

   for (let m of menuIcon) {
    m.style.backgroundColor = "white";
    m.style.transitionProperty =
      "background-color transform left width top";
    m.style.transitionDuration = "100ms";
    m.style.transitionTimingFunction = "ease-in";
  }

//mobile navigation links  
   for (let mn of mobileNavLinks) {
     mn.style.color = "white";
   }

 //mobile mode switch;
  mobileSwitchCircle.style.transform = "translateX(1.5px)";
  mobileSwitchCircle.style.filter = "invert(1)";
  
  
  localStorage.setItem("mode", "dark");

}

function lightMode() {
  body.style.backgroundColor = "white";
  body.style.transitionProperty = "background-color";
  body.style.transitionDuration = "100ms";
  body.style.transitionTimingFunction = "ease-in";

  navBar.style.transitionProperty = "background-color";
  navBar.style.transitionDuration = "100ms";
  navBar.style.transitionTimingFunction = "ease-in";
  navBar.style.backgroundColor = "#ebeded";

  modeSwitchContainer.style.backgroundColor = "#dcdcde";
  modeSwitchContainer.style.transitionProperty = "background-color";
  modeSwitchContainer.style.transitionDuration = "100ms";
  modeSwitchContainer.style.transitionTimingFunction = "ease-in";

  switchCircle.style.transform = "translateX(-28.5px)";
  switchCircle.style.filter = "invert(0)";
  switchCircle.style.transitionProperty = "transform, filter";
  switchCircle.style.transitionDuration = "100ms";
  switchCircle.style.transitionTimingFunction = "ease-in";

  navLinksWrapper.style.color = "black";
  navLinksWrapper.style.transitionProperty = "color";
  navLinksWrapper.style.transitionDuration = "100ms";
  navLinksWrapper.style.transitionTimingFunction = "ease-in";

  socialIcons[0].style.filter = "invert(0)";
  socialIcons[1].style.filter = "invert(0)";
  socialIcons[2].style.filter = "invert(0)";

  homeContainer.style.color = "black";
  homeContainer.style.transitionProperty = "color";
  homeContainer.style.transitionDuration = "100ms";
  homeContainer.style.transitionTimingFunction = "ease-in";

  for (let n of navLinks) {
    n.style.filter = "brightness(110%), contrast(110%)";
    n.style.fontWeight = "600";
  }

  for (let m of menuIcon) {
    m.style.backgroundColor = "black";
    m.style.transitionProperty = "background-color";
    m.style.transitionDuration = "100ms";
    m.style.transitionTimingFunction = "ease-in";
  }

  //mobile navigation links
    for (let mn of mobileNavLinks) {
      mn.style.color = "black";
  }
  
  //mobile mode switch;
  mobileSwitchCircle.style.transform = "translateX(-28.5px)";
  mobileSwitchCircle.style.filter = "invert(0)";


  localStorage.setItem("mode", "light");
}



