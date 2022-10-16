window.addEventListener("load", () => {
  setHomePage();
});

let body = document.getElementsByTagName("body")[0];
let navBar = document.getElementById("navBar");
let homeContainer = document.getElementById("homeContainer");
let portfolioContainer = document.querySelector("body > section");
let modeSwitchWrap = document.getElementById("mode_switch_wrapper");
let darkBulbIcon = document.querySelector("div > .darkbulb");
console.log(darkBulbIcon);
let lightBulbIcon = document.querySelector("div > .lightbulb");
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

modeSwitchWrap.addEventListener("click", () => {
  if (darkBulbIcon.style.display !== "none") {
    tl.to("div > .darkbulb", { display: "none", duration: .2, ease: "ease-in-out" }, 0)
      .to("div > .lightbulb", { display: "block", duration: .2, ease: "ease-in-out" }, "-=1");
  }
});

/**
 
 */
