let body = document.getElementsByTagName("body")[0];
let navBar = document.getElementById("navBar");
let homeContainer = document.getElementById("homeContainer");
let portfolioContainer = document.querySelector("body > section");
let modeSwitchWrapper = document.getElementById("mode_switch_wrapper");
let tl = gsap.timeline();



function setHomePage() {
  homeContainer.style.width = "100%";
  homeContainer.style.display = "flex";
  homeContainer.style.justifyContent = "center";
  homeContainer.style.alignContent = "center";
  homeContainer.style.position = "absolute";
  homeContainer.style.top = "30vh";
  portfolioContainer.style.display = "none";
  body.style.backgroundColor = "#161617";
  navBar.style.backgroundColor = "#1a1a1a";
}

window.addEventListener("load", () => {
  setHomePage();
});


/**
 
 */



