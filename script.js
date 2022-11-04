let mainDiv = document.querySelector("body > main");

let navBar = document.getElementsByClassName("nav_bar")[0];
let switchCircle = document.querySelector("body main #navBar > #mode_switch_social_wrapper > #mode_switch_container > .switch_circle");
let modeSwitchContainer = document.getElementsByClassName("mode_switch_container")[0];
let socialIcons = document.querySelectorAll(
  "body main nav #mode_switch_social_wrapper .social_icon_parent > a > .social_icon"
);

let navLinksWrapper = document.querySelectorAll("main #navBar > #navigation_links_wrapper")[0];
let navLinks = navLinksWrapper.children;
let hamburgerMenuWrapper = document.querySelector("body > main #navBar > .menu_icon_wrapper");
let menuIcon = document.querySelectorAll(" body main nav #menuIconWrapper > .menuIcon");
let moonIconLink = document.querySelector("body main a.icon8_link");

let mobileDropMenu = document.querySelector("body main > .mobile_navigation_links");
let mobileNavLinks = document.querySelectorAll("body main > .mobile_navigation_links > div > h3");
let mobileSocialIcons = document.querySelectorAll("body main > .mobile_navigation_links > #mobile_social_icon_parent > a > .mobile_social_icon");
let mobileSwitchContainer = document.querySelector("body main > .mobile_navigation_links > #mobile_mode_switch_container");
let mobileSwitchCircle = document.querySelector(
  "body main > .mobile_navigation_links > #mobile_mode_switch_container > .mobile_switch_circle"
);

let homeContainer = document.getElementsByClassName("home_heading_container")[0];
let portfolioContainer = document.querySelector("body main section.portfolio_container");
let portfolioArticles = document.querySelectorAll("body main section.portfolio_container #portfolio article");

window.addEventListener("load", () => {
  localStorage.setItem("mode", "dark");
  localStorage.setItem("hamburger", "closed");
  window.scrollTo(0, 0);
});

window.addEventListener("resize", () => {
  setTransitionProperty();
  if (window.innerWidth >= 832) {
    hamburgerClose();
  }
});

window.addEventListener("scroll", windowScroll);

function windowScroll(evt) {
  if (localStorage.getItem("hamburger") === "open" && evt.target === document) {
    hamburgerClose();
    localStorage.setItem("hamburger", "closed");
  }
}

//mobile hamburger menu
hamburgerMenuWrapper.addEventListener("click", () => {
  setTransitionProperty();
  if (
    (localStorage.getItem("hamburger") === "closed" && window.scrollY == 0) ||
    (localStorage.getItem("hamburger") === "closed" && window.scrollY > 0)
  ) {
    hamburgerOpen();
    localStorage.setItem("hamburger", "open");
  } else {
    hamburgerClose();
    localStorage.setItem("hamburger", "closed");
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
    lightMode();
  }
  
})

function hamburgerOpen() {
  
  window.scrollTo(0, 0);
  hamburgerMenuWrapper.children[0].style.top = "19px";
  hamburgerMenuWrapper.children[0].style.width = "0%";
  hamburgerMenuWrapper.children[0].style.left = "50%";

  hamburgerMenuWrapper.children[1].style.transform = "rotate(45deg)";
  hamburgerMenuWrapper.children[2].style.transform = "rotate(-45deg)";

  hamburgerMenuWrapper.children[3].style.top = "18px";
  hamburgerMenuWrapper.children[3].style.width = "0%";
  hamburgerMenuWrapper.children[3].style.left = "50%";

  mobileDropMenu.style.top = "92px";
 
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
  
   mobileDropMenu.style.top = "-150%";

}

function setTransitionProperty() {

  mainDiv.style.transition = "background-color .1s ease-in";
  navBar.style.transition = "background-color .1s ease-in";
  modeSwitchContainer.style.transition = "background-color .1s ease-in";
  
  switchCircle.style.transition = "transform .5s, filter .1s, ease-in";
  navLinksWrapper.style.transition = "color .1s ease-in";
  homeContainer.style.transition = "color .1s ease-in";
  portfolioContainer.style.transition = "color .1s, background-color .1s, ease-in";
  
   for (let p of portfolioArticles) {
     p.style.transition = "background-color .1s ease-in";
   }

  

  for (let hmi of hamburgerMenuWrapper.children) {
    hmi.style.transitionProperty = "transform left width top";
    hmi.style.transitionDuration = ".1s";
    hmi.style.transitionTimingFunction = "ease-in-out";
  }

  mobileDropMenu.style.transition = "top .2s ease-in-out";

  mobileSwitchCircle.style.transitionProperty = "transform filter ";
  mobileSwitchCircle.style.transitionDuration = ".5s 0s ";
  mobileSwitchCircle.style.transitionTimingFunction = "ease-in-out";
}

function darkMode() {
  mainDiv.style.backgroundColor = "#161617";
  navBar.style.backgroundColor = "#1a1a1a";
  modeSwitchContainer.style.backgroundColor = "black";
  switchCircle.style.transform = "translateX(1.5px)";
  switchCircle.style.filter = "invert(1)"; 
  navLinksWrapper.style.color = "white";

  for (let i = 0; i < socialIcons.length; i++) {
    socialIcons[i].style.filter = "invert(1)";
  }

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

  //mobile social media icons;
  for (let i = 0; i < mobileSocialIcons.length; i++) {
    mobileSocialIcons[i].style.filter = "invert(1)";
  }

 //mobile mode switch;
  mobileSwitchContainer.style.backgroundColor = "black";
  mobileSwitchCircle.style.transform = "translateX(.1px)";
  mobileSwitchCircle.style.filter = "invert(1)";


  //page body
  homeContainer.style.color = "white";
  portfolioContainer.style.color = "white";
  portfolioContainer.style.backgroundColor = "#222324";

  for (let p of portfolioArticles) {
    p.style.backgroundColor = "#161617";
  }

  moonIconLink.style.color = "white";
  
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  mainDiv.style.backgroundColor = "white";
  navBar.style.backgroundColor = "#ebeded";
  modeSwitchContainer.style.backgroundColor = "#dcdcde";
  switchCircle.style.transform = "translateX(-28.5px)";
  switchCircle.style.filter = "invert(0)";
  navLinksWrapper.style.color = "black";

   for (let i = 0; i < socialIcons.length; i++) {
     socialIcons[i].style.filter = "invert(0)";
  }

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

  //mobile social media icons;
  for (let i = 0; i < mobileSocialIcons.length; i++) {
    mobileSocialIcons[i].style.filter = "invert(0)";
  }

  //mobile mode switch;
  mobileSwitchContainer.style.backgroundColor = "#dcdcde";
  mobileSwitchCircle.style.transform = "translateX(-29.5px)";
  mobileSwitchCircle.style.filter = "invert(0)";

//page body;
  homeContainer.style.color = "black";
  portfolioContainer.style.color = "black";
  portfolioContainer.style.backgroundColor = "#ebeded";

  for (let p of portfolioArticles) {
    p.style.backgroundColor = "white";
  }

  moonIconLink.style.color = "black";

  localStorage.setItem("mode", "light");
}



