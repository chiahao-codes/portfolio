let body = document.getElementsByTagName("body")[0];
let homeContainer = document.getElementById("homeContainer");
let portfolioContainer = document.getElementById("portfolioContainer");

let bgBubble1 = document.getElementById("bgBubble");
let bgWrapper = document.getElementById("bgWrapper");
let bg = document.getElementById("bg");
let menuElements = document.getElementsByClassName("menuElement");
let currBgBubblePosition, moveId;

let bgBubbPosMap = {
  0: "60px",
  1: "180px",
  2: "300px",
  3: "420px",
};

function setHomePage() {
  homeContainer.style.width = "100%";
  homeContainer.style.display = "flex";
  homeContainer.style.justifyContent = "center";
  homeContainer.style.alignContent = "center";
  homeContainer.style.position = "absolute";
  homeContainer.style.top = "30vh";
  portfolioContainer.style.display = "none";
  //bgWrapper.style.backgroundColor = "black";
  bg.style.backgroundColor = "black";
  body.style.backgroundColor = "black";
}

window.addEventListener("load", () => {
  setHomePage();
  move(1, bgBubbPosMap[0], bgBubble1);
  giveMenumoveIdClickEvent(bgBubble1);
});

function giveMenumoveIdClickEvent(bgBubble = bgBubble1) {
  for (let i = 0; i < menuElements.length; i++) {
    menuElements[i].firstChild.addEventListener("click", () => {
    
      currBgBubblePosition = bgBubbPosMap[i];
      switch (i) {
        case 0:
          move(1, currBgBubblePosition, bgBubble);
          turnOffClickedMenuElem(currBgBubblePosition);
          setHomePage();
          break;
        case 1:
          move(2, currBgBubblePosition, bgBubble);
          turnOffClickedMenuElem(currBgBubblePosition);
          body.style.backgroundColor = "white";
     
          homeContainer.style.display = "none";
          portfolioContainer.style.display = "flex";
          portfolioContainer.style.flexDirection = "column";
          portfolioContainer.style.justifyContent = "space-around";
          portfolioContainer.style.alignItems = "center";
          //bgWrapper.style.backgroundColor = "white";
          bg.style.backgroundColor = "white";
         
          break;
        case 2:
          move(3, currBgBubblePosition, bgBubble);
          turnOffClickedMenuElem(currBgBubblePosition);
          body.style.backgroundColor = "#04124f";
         
          homeContainer.style.display = "none";
          portfolioContainer.style.display = "none";
          //bgWrapper.style.backgroundColor = "#04124f";
          bg.style.backgroundColor = "#04124f";
      
          break;
        case 3:
          move(4, currBgBubblePosition, bgBubble);
          turnOffClickedMenuElem(currBgBubblePosition);
          body.style.backgroundColor = "#044f12";
 
          homeContainer.style.display = "none";
          portfolioContainer.style.display = "none";
           //bgWrapper.style.backgroundColor = "#044f12";
           bg.style.backgroundColor = "#044f12";
     
          break;
      }
    });
  }
}

function move(id, position, bgBubble) {
  let moveTimeline = gsap.timeline();

  moveTimeline
    .to(bgBubble, { duration: 0.15, bottom: "calc(-4em)", ease: "ease-out" }, 0)
    .to(
      "#bubble1",
      {
        duration: 0.1,
        yPercent: 145,
        opacity: 0,
        boxShadow: "none",
        ease: "ease-out",
      },
      0
    )
    .to(
      "#bubble2",
      {
        duration: 0.15,
        yPercent: 145,
        opacity: 0,
        boxShadow: "none",
        ease: "ease-out",
      },
      0
    )
    .to(
      "#bubble3",
      {
        duration: 0.15,
        yPercent: 145,
        opacity: 0,
        boxShadow: "none",
        ease: "ease-out",
      },
      0
    )
    .to(
      "#bubble4",
      {
        duration: 0.15,
        yPercent: 145,
        opacity: 0,
        boxShadow: "none",
        ease: "ease-out",
      },
      0
    )
    .to(
      ".icon",
      {
        duration: 0.1,
        opacity: 0,
        ease: "ease-out",
      },
      0
    )
    .to(
      bgBubble,
      {
        duration: 0.22,
        left: `calc(${position})`,
        ease: "ease-in-out",
      },
      0.1
    )
    .to(
      bgBubble,
      { duration: 0.217, bottom: "calc(-2.6em)", ease: "ease-out" },
      "-=.2"
    )
    .to(
      `#bubble${id}`,
      {
        duration: 0.215,
        zIndex: 1,
        yPercent:0,
        backgroundColor: "hsl(0, 0%, 12%)",
        opacity: 1,
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.2194)",
        ease: "ease-out",
      },
      "-=.1"
    )
    .to(
      `#bubble${id} > span`,
      {
        duration: 0.215,
        yPercent:0,
        opacity: 1,
        ease: "ease-out",
      },
      "-=.1"
    );
}

function turnOffClickedMenuElem(currBgBubblePosition) {
  for (let i = 0; i < menuElements.length; i++) {
    if (bgBubbPosMap[i] === currBgBubblePosition) {
      menuElements[i].firstChild.style.opacity = "0";
    }

    menuElements[i].firstChild.style.opacity = ".7";
    menuElements[i].firstChild.style.color = "white";

    menuElements[i].firstChild.addEventListener("mouseenter", () => {
      mouseEnter(i);
    });
    menuElements[i].firstChild.addEventListener("mouseleave", () => {
      mouseLeave(i);
    });
  }
}

function mouseEnter(num) {
  for (let i = 0; i < menuElements.length; i++) {
    if (i === num) {
      menuElements[i].firstChild.style.opacity = "1";
      menuElements[i].firstChild.style.cursor = "pointer";
    }
  }
}

function mouseLeave(num) {
  for (let i = 0; i < menuElements.length; i++) {
    if (i === num) {
      menuElements[i].firstChild.style.opacity = ".55";
    }
  }
}

