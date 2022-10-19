
let body = document.getElementsByTagName("body")[0];
let navBar = document.getElementsByClassName("nav_bar")[0];
let homeContainer = document.getElementsByClassName("home_heading_container")[0];
let portfolioContainer = document.querySelector("body > section");
let switchBulbWrap = document.getElementById("switch_bulb_wrapper");
let switchCircle = document.querySelector("#navBar > #mode_switch_container > .switch_circle");
console.log(switchCircle);
let switchImgs = document.getElementsByClassName("switch_icon_img");
let modeSwitchContainer = document.getElementsByClassName("mode_switch_container")[0];
let menuIcon = document.querySelectorAll("#menuIconWrapper > .menuIcon");
let mode;
/***/

window.addEventListener("load", () => {
  localStorage.setItem("mode", "dark");

})

modeSwitchContainer.addEventListener("click", () => {
  mode = localStorage.getItem("mode");
  if (mode !== "dark") {
    darkMode();
    localStorage.setItem("mode", "dark");
  } else {
    lightMode();
    localStorage.setItem("mode", "light");
  }
  /***/
})

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

   homeContainer.style.color = "white";
   homeContainer.style.transitionProperty = "color";
   homeContainer.style.transitionDuration = "100ms";
  homeContainer.style.transitionTimingFunction = "ease-in";
  
   menuIcon.forEach((m) => {
     m.style.backgroundColor = "white";
     m.style.transitionProperty = "background-color";
     m.style.transitionDuration = "100ms";
     m.style.transitionTimingFunction = "ease-in";
   });
 
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
   

    switchCircle.style.transform = "translateX(-28.5px)"
    switchCircle.style.filter = "invert(0)";
    switchCircle.style.transitionProperty = "transform, filter";
    switchCircle.style.transitionDuration = "100ms";
    switchCircle.style.transitionTimingFunction = "ease-in";

    homeContainer.style.color = "black";
    homeContainer.style.transitionProperty = "color";
    homeContainer.style.transitionDuration = "100ms";
    homeContainer.style.transitionTimingFunction = "ease-in";

    menuIcon.forEach((m) => {
      m.style.backgroundColor = "black";
      m.style.transitionProperty = "background-color"
      m.style.transitionDuration = "100ms";
      m.style.transitionTimingFunction = "ease-in";
     });
    
}



