window.addEventListener("load", () => {
  setHomePage();
  darkMode();
})
let body = document.getElementsByTagName("body")[0];
let navBar = document.getElementById("navBar");
let homeContainer = document.getElementById("homeContainer");
let portfolioContainer = document.querySelector("body > section");
let switchBulbWrap = document.getElementById("switch_bulb_wrapper");
let switchCircle = document.querySelector(".switch_circle");
console.log(switchCircle);
let modeSwitchContainer = document.getElementById("mode_switch_container");
let menuIcon = document.querySelectorAll("#menuIconWrapper > .menuIcon");
let tl = gsap.timeline();

function setHomePage() {
  homeContainer.style.width = "100%";
  homeContainer.style.display = "flex";
  homeContainer.style.justifyContent = "center";
  homeContainer.style.alignItems = "center";
  homeContainer.style.top = "30vh";
  portfolioContainer.style.display = "none";
}

//#ebeded 

function darkMode() {
  homeContainer.style.color = "white";
  body.style.backgroundColor = "#161617";
  navBar.style.backgroundColor = "#1a1a1a";
  modeSwitchContainer.style.backgroundColor = "black";
  switchCircle.style.marginRight = "2%";
  switchCircle.style.filter = "invert(1)";
  menuIcon.forEach((m) => {
    m.style.backgroundColor = "white";
  });
}



/**
 
 */
