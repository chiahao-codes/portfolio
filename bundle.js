(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}]},{},[1]);
