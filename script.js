
let body = document.getElementsByTagName("body")[0];
let navBar = document.getElementById("navBar");
let homeContainer = document.getElementById("homeContainer");
let portfolioContainer = document.querySelector("body > section");
let switchBulbWrap = document.getElementById("switch_bulb_wrapper");
let switchCircle = document.querySelector(".switch_circle");
let switchImgs = document.getElementsByClassName("switch_icon_img");
let modeSwitchContainer = document.getElementById("mode_switch_container");
let menuIcon = document.querySelectorAll("#menuIconWrapper > .menuIcon");
let tl = gsap.timeline();
let mode;

  /***/

function darkMode() {
  body.classList.replace("light_mode_body","dark_mode_body");
  navBar.classList.replace("light_mode_navbar","dark_mode_navbar");
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
  menuIcon.classList.replace("light_mode_menu_icon", "dark_mode_menu_icon");

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

