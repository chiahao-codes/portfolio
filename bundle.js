(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

let body = document.getElementsByTagName("body")[0];
let navBar = document.getElementById("navBar");
let homeContainer = document.getElementById("homeContainer");
let portfolioContainer = document.querySelector("body > section");
let switchBulbWrap = document.getElementById("switch_bulb_wrapper");
let switchCircle = document.querySelector(".switch_circle");
let switchImgs = document.getElementsByClassName("switch_icon_img");
let modeSwitchContainer = document.getElementById("mode_switch_container");
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
    navBar.style.backgroundColor = "#ebeded";
     modeSwitchContainer.style.backgroundColor = "#dcdcde";
     switchCircle.classList.add("light_mode_switch_circle");
    homeContainer.classList.add("light_mode_home_container");
     menuIcon.forEach((m) => {
       m.classList.add( "light_mode_menu_icon");
     });
    
}

}


},{}]},{},[1]);
