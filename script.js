
let body = document.getElementsByTagName("body")[0];
let navBar = document.getElementsByClassName("nav_bar")[0];
let homeContainer = document.getElementsByClassName("home_heading_container")[0];
let portfolioContainer = document.querySelector("body > section");
let switchBulbWrap = document.getElementById("switch_bulb_wrapper");
let switchCircle = document.querySelector(".switch_circle");
let switchImgs = document.getElementsByClassName("switch_icon_img");
let modeSwitchContainer = document.getElementsByClassName("mode_switch_container")[0];
let menuIcon = document.querySelectorAll("#menuIconWrapper > .menuIcon");
/***/

modeSwitchContainer.addEventListener("click", () => {
  console.log("modeSwitchContainer clicked");
  lightMode();

  /**
   * if (body.style.backgroundColor !== "#161617") {
    darkMode();
  } else {
  }
   */
})

function darkMode() {
  if (body.classList.contains("light_mode_body")) {
     body.classList.replace("light_mode_body", "dark_mode_body");
     navBar.classList.replace("light_mode_navbar", "dark_mode_navbar");
     modeSwitchContainer.classList.replace(
       "light_mode_mode_switch_container",
       "dark_mode_mode_switch_container"
     );
     switchCircle.classList.replace(
       "light_mode_switch_circle",
       "dark_mode_switch_circle"
     );
     homeContainer.classList.replace(
       "light_mode_home_container",
       "dark_mode_home_container"
    );
     menuIcon.forEach((m) => {
       m.classList.replace("light_mode_menu_icon", "dark_mode_menu_icon");
     });
     
  } else {
     body.classList.add("dark_mode_body");
     navBar.classList.add("dark_mode_navbar");
     modeSwitchContainer.classList.add(
       "dark_mode_mode_switch_container"
     );
     switchCircle.classList.add(
    
       "dark_mode_switch_circle"
     );
     homeContainer.classList.add(
   
       "dark_mode_home_container"
     );
      menuIcon.forEach((m) => {
        m.classList.add("dark_mode_menu_icon");
      });
  }
 
}

function lightMode() {
  if (body.classList.contains("dark_mode_body")) {
     body.classList.replace("dark_mode_body","light_mode_body");
 navBar.classList.replace("dark_mode_navbar", "light_mode_navbar");
 modeSwitchContainer.classList.replace(
   "dark_mode_mode_switch_container" ,"light_mode_mode_switch_container"
  
 );
 switchCircle.classList.replace(
      "dark_mode_switch_circle","light_mode_switch_circle"

 );
 homeContainer.classList.replace(
    "dark_mode_home_container","light_mode_home_container"
  
    );
    menuIcon.forEach((m) => {
      m.classList.replace("dark_mode_menu_icon", "light_mode_menu_icon");
    });
 
  } else {
    body.classList.add("light_mode_body");
    navBar.style.transitionProperty = "background-color";
    navBar.style.transitionDuration = "100ms";
    navBar.style.transitionTimingFunction = "ease-in";
    navBar.style.backgroundColor = "#ebeded";
    
    modeSwitchContainer.style.backgroundColor = "#dcdcde";
    modeSwitchContainer.style.transitionProperty = "background-color";
    modeSwitchContainer.style.transitionDuration = "100ms";
    modeSwitchContainer.style.transitionTimingFunction = "ease-in";
   
    switchCircle.style.left = "2%";
    switchCircle.style.filter = "invert(0)";
    switchCircle.style.transitionProperty = "left, filter";
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

}

