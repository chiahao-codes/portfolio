let body = document.getElementsByTagName("body")[0];
let navBar = document.getElementsByClassName("nav_bar")[0];
let homeContainer = document.getElementsByClassName("home_heading_container")[0];
let portfolioContainer = document.querySelector("body > section");
let switchCircle = document.querySelector("#navBar > #mode_switch_social_wrapper > #mode_switch_container > .switch_circle");
let modeSwitchContainer = document.getElementsByClassName("mode_switch_container")[0];
let socialIcons = document.querySelectorAll(".social_icon_parent > a > .social_icon");
let navLinksWrapper = document.querySelectorAll("#navBar > #navigation_links_wrapper")[0];
let navLinks = navLinksWrapper.children;
let hamburgerMenuWrapper = document.querySelector("#navBar > .menu_icon_wrapper");
let mobileDropMenu = document.querySelector("body > nav");
let menuIcon = document.querySelectorAll("#menuIconWrapper > .menuIcon");
let mode;
/***/

window.addEventListener("load", () => {
  localStorage.setItem("mode", "dark");
});

//mobile hamburger menu
hamburgerMenuWrapper.addEventListener("click", () => {
  hamburgerMenuWrapper.classList.toggle("open");
});

//mode switch
modeSwitchContainer.addEventListener("click", function() {
  mode = localStorage.getItem("mode");
  if (mode !== "dark") {
    darkMode();
    localStorage.setItem("mode", "dark");
  } else {
    lightMode();
    localStorage.setItem("mode", "light");
  }
});

function modeSwitch() {
  mode = localStorage.getItem("mode");
  if (mode !== "dark") {
    darkMode();
    localStorage.setItem("mode", "dark");
  } else {
    lightMode();
    localStorage.setItem("mode", "light");
  }
}

function navigationDropDown() {
  if (hamburgerMenuWrapper.classList.contains("open")) {
    mobileDropMenu.classList.add("down");
  } else {
    mobileDropMenu.classList.remove("down");
  }
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
}



