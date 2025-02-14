let body = document.querySelector("body");
let abortController = new AbortController();
let header = document.getElementsByClassName("header")[0];

//Nav: Desktop mode
let switchCircle = document.querySelector(
  "body main #header > #mode_switch_social_wrapper > #mode_switch_container > .switch_circle"
);
let modeSwitchContainer = document.querySelector(
  "main #header #mode_switch_social_wrapper #mode_switch_container"
);
let switchIconWrapper = document.querySelector(
  "main #header #mode_switch_social_wrapper #mode_switch_container #switch_icon_wrapper"
);
let socialIcons = document.querySelectorAll(
  "body main header #mode_switch_social_wrapper .social_icon_parent > a > .social_icon"
);
let navLinksWrapper = document.querySelectorAll(
  "main #header > #navigation_links_wrapper"
)[0];
let navLinks = navLinksWrapper.children;
let hamburgerMenuWrapper = document.querySelector(
  "body > main > #header > .menu_icon_wrapper"
);
let menuIcon = document.querySelectorAll(
  " body> main > #header > #menuIconWrapper > .menuIcon"
);

//Nav: Mobile mode
let navContainer = document.querySelector(".mobile_navigation_links");
let mobileDropMenu = document.querySelector(
  "body > main > .mobile_navigation_links"
);
let mobileNavLinks = document.querySelectorAll(
  "body > main > .mobile_navigation_links > div > h3"
);
let mobileSocialIcons = document.querySelectorAll(
  "body > #main > .mobile_navigation_links > #mobile_social_icon_parent > a > img"
);
let mobileSwitchContainer = document.querySelector(
  "body main > .mobile_navigation_links > #mobile_mode_switch_container"
);
let mobileSwitchCircle = document.querySelector(
  "body > #main > .mobile_navigation_links > #mobile_mode_switch_container > .mobile_switch_circle"
);

//home
let homeContainer = document.getElementsByClassName(
  "home_heading_container"
)[0];

//portfolio
let portfolioContainer = document.querySelector(
  "body main #portfolio_container"
);

let portfolioArticles = document.querySelectorAll(
  "body main #portfolio_container #portfolio > article"
);

//about
let aboutContainer = document.querySelector("main > #about_container");
let aboutHeaderWrapper = document.querySelector(
  "main > #about_container #about_header_wrapper"
);
let aboutIntro = document.querySelector(
  "main > #about_container #about_article_wrapper p"
);
let aboutImg = document.querySelector(
  "main > #about_container #about_article_wrapper img"
);
let myCareerObjAndTechStackWrappers = document.querySelectorAll(
  "main > #about_container #my_career_and_tech_stack_wrapper > div"
);
let resumeButtonContainer = document.querySelector(
  "#main > #about_container > #res_button_container"
);
let resumeButton = document.querySelector("#main > #about_container > a > div");

//contact
let contactHeader = document.querySelector(
  "body> #main > #contact_container>h1"
);
let contactMessage = document.querySelector(".contact-message");
let endMessage = document.querySelector("#ending-contact-message");
let contactEmail = document.querySelector(".email-address");

//footer
let footer = document.querySelector("body> #main > footer");
let icons8Link = document.querySelector("body> #main > footer > a");
let copyrightImg = document.querySelector("body> #main > footer > img");

let sectionElements = document.querySelectorAll("body>#main>section");

function navLinkClick() {
  for (let i = 0; i < navLinks.length; i++) {
    mobileNavLinks[i].addEventListener("mousedown", () => {
      switch (i) {
        case 0:
          navLinkScrollTo(body);
          hamburgerClose();
          break;
        case 1:
          navLinkScrollTo(sectionElements[0]);
          break;
        case 2:
          navLinkScrollTo(sectionElements[1]);
          break;
        case 3:
          navLinkScrollTo(sectionElements[2]);
          break;
        default:
          console.log("Nav section not found...");
          break;
      }
    });

    navLinks[i].addEventListener("click", () => {
      switch (i) {
        case 0:
          navLinkScrollTo(body);
          break;
        case 1:
          navLinkScrollTo(sectionElements[0]);
          break;
        case 2:
          navLinkScrollTo(sectionElements[1]);
          break;
        case 3:
          navLinkScrollTo(sectionElements[2]);
          break;
        default:
          console.log("Nav section not found...");
          break;
      }
    });
  }
}

function navLinkScrollTo(ele) {
  ele.scrollIntoView({ block: "start", behavior: "smooth" });
}

function setHamburgerInLocalStorage(setting) {
  localStorage.setItem("hamburger", setting);
}

function mobileNavShutter(hamburgerFunc) {
  hamburgerFunc();
}

function windowScrollHamburgerClose() {
  window.addEventListener(
    "scroll",
    () => {
      if (localStorage.getItem("hamburger") === "open" && window.scrollY > 0) {
        hamburgerClose();
        setHamburgerInLocalStorage("closed");
      }
    },
    { useCapture: true, signal: abortSignal.signal, passive: false }
  );
}

function abortSignal(ab) {
  return new Promise((resolve) => {
    ab.abort();
    resolve("aborted event handler");
  });
}

function hamburgerOpen() {
  window.scrollTo(0, 0);
  hamburgerMenuWrapper.children[0].style.top = "19px";
  hamburgerMenuWrapper.children[0].style.width = "0%";
  hamburgerMenuWrapper.children[0].style.left = "50%";

  hamburgerMenuWrapper.children[1].style.transform = "rotate(45deg)";
  hamburgerMenuWrapper.children[2].style.transform = "rotate(-45deg)";

  hamburgerMenuWrapper.children[3].style.top = "18px";
  hamburgerMenuWrapper.children[3].style.width = "0%";
  hamburgerMenuWrapper.children[3].style.left = "50%";

  mobileDropMenu.style.top = "92px";

  if (localStorage.getItem("mode") === "dark") {
    for (let mn of mobileNavLinks) {
      mn.style.color = "white";
    }
  }
  setHamburgerInLocalStorage("open");
}

function hamburgerClose() {
  hamburgerMenuWrapper.children[0].style.top = "4px";
  hamburgerMenuWrapper.children[0].style.width = "100%";
  hamburgerMenuWrapper.children[0].style.left = "0px";

  hamburgerMenuWrapper.children[1].style.transform = "rotate(0deg)";
  hamburgerMenuWrapper.children[1].style.top = "19px";
  hamburgerMenuWrapper.children[2].style.top = "19px";
  hamburgerMenuWrapper.children[2].style.transform = "rotate(0deg)";

  hamburgerMenuWrapper.children[3].style.top = "34px";
  hamburgerMenuWrapper.children[3].style.width = "100%";
  hamburgerMenuWrapper.children[3].style.left = "0px";

  mobileDropMenu.style.top = "-150%";

  setHamburgerInLocalStorage("closed");
}

function setTransitionProperty() {
  body.style.transition = "background-color .1s ease-in";
  header.style.transition = "background-color .1s ease-in";
  modeSwitchContainer.style.transition = "background-color .1s ease-in";
  switchIconWrapper.style.transition = "background-color .1s ease-in";

  switchCircle.style.transition = "transform .5s, filter .1s, ease-in";
  navLinksWrapper.style.transition = "color .1s ease-in";
  homeContainer.style.transition = "color .1s ease-in";
  portfolioContainer.style.transition =
    "color .1s, background-color .1s, ease-in";

  for (let p of portfolioArticles) {
    p.style.transition = "background-color .1s ease-in";
  }

  aboutContainer.style.transition = "color .1s ease-in";
  //aboutHeaderWrapper.style.transition = "color .1s ease-in";
  aboutIntro.style.transition = "color .1s ease-in";
  for (let m of myCareerObjAndTechStackWrappers) {
    m.style.transition = "color .1s ease-in";
  }

  for (let hmi of hamburgerMenuWrapper.children) {
    hmi.style.transitionProperty = "transform left width top";
    hmi.style.transitionDuration = ".1s";
    hmi.style.transitionTimingFunction = "ease-in-out";
  }

  mobileDropMenu.style.transition = "top .2s ease-in-out";

  mobileSwitchCircle.style.transitionProperty = "transform filter ";
  mobileSwitchCircle.style.transitionDuration = ".5s 0s ";
  mobileSwitchCircle.style.transitionTimingFunction = "ease-in-out";

  //contact
  contactHeader.style.transition = "top .1s ease-in-out";
  contactMessage.style.transition = "top .1s ease-in-out";
  endMessage.style.transition = "top .1s ease-in-out";
  contactEmail.style.transition = "top .2s ease-in-out";

  //footer
  footer.style.transition = "top .1s ease-in-out";
  copyrightImg.style.transitionProperty = "transform filter ";
  copyrightImg.style.transitionDuration = ".5s 0s ";
  copyrightImg.style.transitionTimingFunction = "ease-in-out";
}

function darkMode() {
  body.style.backgroundColor = "#161617";
  header.style.backgroundColor = "#1a1a1a";
  modeSwitchContainer.style.backgroundColor = "black";
  switchIconWrapper.style.backgroundColor = "black";
  switchCircle.style.transform = "translateX(1.5px)";
  switchCircle.style.filter = "invert(100%)";
  switchCircle.style.webkitFilter = "invert(100%)";
  navLinksWrapper.style.color = "white";

  for (let i = 0; i < socialIcons.length; i++) {
    socialIcons[i].style.filter = "invert(100%)";
    socialIcons[i].style.webkitFilter = "invert(100%)";
  }

  for (let n of navLinks) {
    n.style.filter = "brightness(110%), contrast(110%)";
    n.style.webkitFilter = "brightness(110%), contrast(110%)";
    n.style.fontWeight = "600";
  }

  for (let m of menuIcon) {
    m.style.backgroundColor = "white";
  }

  //mobile navigation links
  navContainer.style.backgroundColor = "#161617";
  for (let mn of mobileNavLinks) {
    mn.style.color = "white";
  }

  //mobile social media icons;
  for (let i = 0; i < mobileSocialIcons.length; i++) {
    mobileSocialIcons[i].style.filter = "invert(100%)";
    mobileSocialIcons[i].style.webkitFilter = "invert(100%)";
  }

  //mobile mode switch;
  mobileSwitchContainer.style.backgroundColor = "black";
  mobileSwitchCircle.style.transform = "translateX(.1px)";
  mobileSwitchCircle.style.filter = "invert(100%)";
  mobileSwitchCircle.style.webkitFilter = "invert(100%)";

  //page body
  homeContainer.style.color = "white";

  //portfolio
  portfolioContainer.style.color = "white";
  portfolioContainer.style.backgroundColor = "#161617";
  for (let p of portfolioArticles) {
    p.style.backgroundColor = "black";
  }

  //about
  aboutHeaderWrapper.style.color = "white";
  aboutIntro.style.color = "white";
  for (let m of myCareerObjAndTechStackWrappers) {
    m.style.color = "white";
  }

  //contact
  contactHeader.style.color = "white";
  contactMessage.style.color = "white";
  contactEmail.style.color = "white";
  endMessage.style.color = "white";
  //footer
  footer.style.color = "white";
  copyrightImg.style.filter = "invert(1)";
  copyrightImg.style.webkitFilter = "invert(1)";

  localStorage.setItem("mode", "dark");
}

function lightMode() {
  body.style.backgroundColor = "#f5f5f5";
  header.style.backgroundColor = "#ebeded";
  modeSwitchContainer.style.backgroundColor = "#dcdcde";
  switchIconWrapper.style.backgroundColor = "#dcdcde";
  switchCircle.style.transform = "translateX(-28.5px)";
  switchCircle.style.filter = "invert(0%)";
  switchCircle.style.webkitFilter = "invert(0%)";
  navLinksWrapper.style.color = "black";

  for (let i = 0; i < socialIcons.length; i++) {
    socialIcons[i].style.filter = "invert(0%)";
    socialIcons[i].style.webkitFilter = "invert(0%)";
  }

  for (let n of navLinks) {
    n.style.filter = "brightness(110%), contrast(110%)";
    n.style.webkitFilter = "brightness(110%), contrast(110%)";
    n.style.fontWeight = "600";
  }

  for (let m of menuIcon) {
    m.style.backgroundColor = "black";
  }

  //mobile navigation links
  navContainer.style.backgroundColor = "#ebeded";
  for (let mn of mobileNavLinks) {
    mn.style.color = "black";
  }

  //mobile social media icons;
  for (let i = 0; i < mobileSocialIcons.length; i++) {
    mobileSocialIcons[i].style.filter = "invert(0%)";
    mobileSocialIcons[i].style.webkitFilter = "invert(0%)";
  }

  //mobile mode switch;
  mobileSwitchContainer.style.backgroundColor = "#f5f5f5";
  mobileSwitchCircle.style.transform = "translateX(-29.5px)";
  mobileSwitchCircle.style.filter = "invert(0%)";
  mobileSwitchCircle.style.webkitFilter = "invert(0%)";

  //page body;
  homeContainer.style.color = "black";

  portfolioContainer.style.color = "black";
  portfolioContainer.style.backgroundColor = "#f5f5f5";
  for (let p of portfolioArticles) {
    p.style.backgroundColor = "white";
  }

  //about
  aboutHeaderWrapper.style.color = "black";
  aboutIntro.style.color = "black";
  aboutImg.style.borderColor = "black";
  for (let m of myCareerObjAndTechStackWrappers) {
    m.style.color = "black";
  }

  //contact
  contactHeader.style.color = "black";
  contactMessage.style.color = "black";
  contactEmail.style.color = "black";
  endMessage.style.color = "black";

  //footer
  footer.style.color = "black";
  copyrightImg.style.filter = "invert(0%)";
  copyrightImg.style.webkitFilter = "invert(0%)";

  localStorage.setItem("mode", "light");
}

window.addEventListener("load", () => {
  localStorage.setItem("mode", "light");
  localStorage.setItem("hamburger", "closed");
  lightMode();
  navLinkScrollTo(body);
  navLinkClick();
});

window.addEventListener("resize", () => {
  setTransitionProperty();
  if (window.innerWidth >= 832) {
    hamburgerClose();
  }
});

//mobile hamburger menu
hamburgerMenuWrapper.addEventListener(
  "click",
  () => {
    setTransitionProperty();
    if (localStorage.getItem("hamburger") === "closed") {
      mobileNavShutter(hamburgerOpen);
    } else {
      mobileNavShutter(hamburgerClose);
    }
    windowScrollHamburgerClose();
  },
  { passive: true }
);

//mode switch
modeSwitchContainer.addEventListener("click", function () {
  if (localStorage.getItem("mode") !== "dark") {
    darkMode();
  } else {
    lightMode();
  }
});

//mobile nav bar mode switch
mobileSwitchContainer.addEventListener("click", () => {
  setTransitionProperty();
  if (localStorage.getItem("mode") !== "dark") {
    darkMode();
  } else {
    lightMode();
  }
});
