
let body = document.getElementsByTagName("body")[0];
let navBar = document.getElementById("navBar");
let homeContainer = document.getElementById("homeContainer");
let portfolioContainer = document.querySelector("body > section");
let switchBulbWrap = document.getElementById("switch_bulb_wrapper");
let darkBulbIcon = document.querySelector("div > .darkbulb");
let lightBulbIcon = document.querySelector("div > .lightbulb");
let modeSwitchWrapper = document.getElementById("switch_bulb_wrapper");
let tl = gsap.timeline();

function setHomePage() {
  homeContainer.style.width = "100%";
  homeContainer.style.display = "flex";
  homeContainer.style.justifyContent = "center";
  homeContainer.style.alignItems = "center";
  
  homeContainer.style.top = "30vh";
  portfolioContainer.style.display = "none";
  //body.style.backgroundColor = "white";

  //#1a1a1a#ebeded navBar.style.backgroundColor = "";
}



/**
 
 */
