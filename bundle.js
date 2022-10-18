(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener("load", () => {
  setHomePage();
  lightMode();
  //darkMode();
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

//

function darkMode() {
  homeContainer.style.color = "white";
  body.style.backgroundColor = "#161617";
  navBar.style.backgroundColor = "#1a1a1a";
  modeSwitchContainer.style.backgroundColor = "black";
  switchCircle.style.right = "2%";
  switchCircle.style.filter = "invert(1)";
  switchCircle.style.boxShadow = " 0 0 10px #fff;";
  menuIcon.forEach((m) => {
    m.style.backgroundColor = "white";
  });
}

function lightMode() {
  homeContainer.style.color = "black";
  body.style.backgroundColor = "white";
  navBar.style.backgroundColor = "#ebeded";
  modeSwitchContainer.style.backgroundColor = "#dcdcde";
  switchCircle.style.left = "2%";
  switchCircle.style.filter = "invert(0)";
  switchCircle.style.boxShadow = " 0 0 10px #000;";
  menuIcon.forEach((m) => {
    m.style.backgroundColor = "black";
  });
}



/**
 
 */

},{}]},{},[1]);
