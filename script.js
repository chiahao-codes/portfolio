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

//set this via css***
function setHomePage() {
  homeContainer.style.width = "100%";
  homeContainer.style.display = "flex";
  homeContainer.style.justifyContent = "center";
  homeContainer.style.alignItems = "center";
  homeContainer.style.top = "30vh";
  portfolioContainer.style.display = "none";
}

modeSwitchContainer.addEventListener("click", (switchCircle) => {
  alert("modeSwitch")
  if (switchCircle.style.left === "2%") {
    darkMode();
  } else {
    lightMode()
   }
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
  //homeContainer.style.color = "black";
  //body.style.backgroundColor = "white";
  //navBar.style.backgroundColor = "#ebeded";
  //modeSwitchContainer.style.backgroundColor = "#dcdcde";
  //switchCircle.style.left = "2%";
  //switchCircle.style.filter = "invert(0)";
  //switchCircle.style.boxShadow = " 0 0 10px #000;";
  menuIcon.forEach((m) => {
    m.style.backgroundColor = "black";
  });
}

/**
 
 */
