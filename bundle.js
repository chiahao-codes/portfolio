(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener("load", () => {
  setHomePage();
  lightMode();
})


let body = document.getElementsByTagName("body")[0];
let navBar = document.getElementById("navBar");
let homeContainer = document.getElementById("homeContainer");
let portfolioContainer = document.querySelector("body > section");
let switchBulbWrap = document.getElementById("switch_bulb_wrapper");
let switchCircle = document.querySelector(".switch_circle");
let modeSwitchContainer = document.getElementById("mode_switch_container");
let menuIcon = document.querySelectorAll("#menuIconWrapper > .menuIcon");
let tl = gsap.timeline();
let mode;

//set this via css***
function setHomePage() {
  homeContainer.style.width = "100%";
  homeContainer.style.display = "flex";
  homeContainer.style.justifyContent = "center";
  homeContainer.style.alignItems = "center";
  homeContainer.style.top = "30vh";
  portfolioContainer.style.display = "none";
}

modeSwitchContainer.addEventListener("click", () => {
  mode = localStorage.getItem("mode");
  if (mode === "light") {
    darkMode();
  } else {
    lightMode();
  }

  /**
 * console.log(switchCircle);
  
 */
})


function darkMode() {
  tl.to(
    ".switch_circle",
    { duration: 0.12, right: "2%", filter: "invert(1)", ease: "ease-in" },
    0
  )
    .to(
      "#homeContainer",
      { duration: 0.1, color: "white", ease: "ease-in" },
      ">.15"
    )
    .to(
      ".body",
      { duration: 0.1, backgroundColor: "#161617", ease: "ease-in" },
      ">.15"
    )
    .to(
      "#navBar",
      { duration: 0.1, backgroundColor: "#1a1a1a", ease: "ease-in" },
      ">.15"
    )
    .to(
      "#mode_switch_container",
      { duration: 0.1, backgroundColor: "black", ease: "ease-in" },
      ">.15"
    );
  menuIcon.forEach((m) => {
    m.style.backgroundColor = "white";
  });
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  tl.to(
    ".switch_circle",
    { duration: 0.12, left: "2%", filter: "invert(0)", ease: "ease-in" },
    0
  )
    .to(
      "#homeContainer",
      { duration: 0.1, color: "black", ease: "ease-in" },
      ">.15"
    )
    .to(
      ".body",
      { duration: 0.1, backgroundColor: "white", ease: "ease-in" },
      ">.15"
    )
    .to(
      "#navBar",
      { duration: 0.1, backgroundColor: "#ebeded", ease: "ease-in" },
      ">.15"
    )
    .to(
      "#mode_switch_container",
      { duration: 0.1, backgroundColor: "#dcdcde", ease: "ease-in" },
      ">.15"
    );

  menuIcon.forEach((m) => {
    m.style.backgroundColor = "black";
  });

  localStorage.setItem("mode", "light");
}


},{}]},{},[1]);
