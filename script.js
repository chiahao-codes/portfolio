
let body = document.getElementsByTagName("body")[0];
let mainH1 = document.getElementById("main");
let bgBubble1 = document.getElementById("bgBubble");
let bgWrapper = document.getElementById("bgWrapper");
let bg = document.getElementById("bg");
let menuElements = document.getElementsByClassName("menuElement");
let currBgBubblePosition, id;

let bgBubbPosMap = {
  0: "60px",
  1: "180px",
  2: "300px",
  3: "420px",
};

window.addEventListener("load", () => {
  giveMenuIdClickEvent(bgBubble1);
});

function giveMenuIdClickEvent(bgBubble = bgBubble1) {
  for (let i = 0; i < menuElements.length; i++) {
    menuElements[i].firstChild.addEventListener("click", () => {
      id = i + 1;
      currBgBubblePosition = bgBubbPosMap[i];
      switch (i) {
        case 0:
          move(id, currBgBubblePosition, bgBubble);
          turnOffClickedMenuElem(currBgBubblePosition);
          body.style.backgroundColor = "black";
          body.style.backgroundImage = "url(./assets/brilliant.png)";
          mainH1.style.display = "block";
          bgWrapper.style.backgroundColor = "black";
          bgWrapper.style.backgroundImage = "url(./assets/brilliant.png)";
          bg.style.backgroundColor = "black";
          bg.style.backgroundImage = "url(./assets/brilliant.png)";
          bgBubble.style.backgroundColor = "black";
          bgBubble.style.backgroundImage = "url(./assets/brilliant.png)";
          
          break;
        case 1:
          move(id, currBgBubblePosition, bgBubble);
          turnOffClickedMenuElem(currBgBubblePosition);
          body.style.backgroundColor = "white";
          body.style.backgroundImage = "url(./assets/brilliant.png)";
          mainH1.style.display = "none";
          bgWrapper.style.backgroundColor = "white";
          bgWrapper.style.backgroundImage = "url(./assets/brilliant.png)"; 
          bg.style.backgroundColor = "white";
          bg.style.backgroundImage = "url(./assets/brilliant.png)";
          bgBubble.style.backgroundColor = "white";
          bgBubble.style.backgroundImage = "url(./assets/brilliant.png)";
      
          
          break;
        case 2:
          move(id, currBgBubblePosition, bgBubble);
          turnOffClickedMenuElem(currBgBubblePosition);
          body.style.backgroundColor = "#04124f";
          body.style.backgroundImage = "url(./assets/classy-fabric.png)";
           mainH1.style.display = "none";
           bgWrapper.style.backgroundColor = "#04124f";
          bgWrapper.style.backgroundImage = "url(./assets/classy-fabric.png)";
          bg.style.backgroundColor = "#04124f";
          bg.style.backgroundImage = "url(./assets/classy-fabric.png)";
          bgBubble.style.backgroundColor = "#04124f";
          bgBubble.style.backgroundImage = "url(./assets/classy-fabric.png)";
     
       
          break;
        case 3:
          move(id, currBgBubblePosition, bgBubble);
          turnOffClickedMenuElem(currBgBubblePosition);
          body.style.backgroundColor = "#044f12";
          body.style.backgroundImage = "url(./assets/classy-fabric.png)";
           mainH1.style.display = "none";
           bgWrapper.style.backgroundColor = "#044f12";
          bgWrapper.style.backgroundImage = "url(./assets/classy-fabric.png)";
           bg.style.backgroundColor = "#044f12";
           bg.style.backgroundImage = "url(./assets/classy-fabric.png)";
           bgBubble.style.backgroundColor = "#044f12";
           bgBubble.style.backgroundImage = "url(./assets/classy-fabric.png)";
     
          break;
      }
    });
  }
}

function move(id, position, bgBubble) {
  let moveTimeline = gsap.timeline();
  currBgBubblePosition = position;
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
        left: `calc(${currBgBubblePosition})`,
        ease: "ease-in-out",
      },
      0
    )
    .to(
      bgBubble,
      { duration: 0.217, bottom: "calc(-3em)", ease: "ease-out" },
      0
    )
    .to(
      `#bubble${id}`,
      {
        duration: 0.215,
        zIndex: 1,
        yPercent: 0,
        backgroundColor: "hsl(0, 0%, 12%)",
        opacity: 1,
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.2194)",
        ease: "ease-out",
      },
      "-=0.1"
    )
    .to(
      `#bubble${id} > span`,
      {
        duration: 0.215,
        yPercent: 0,
        opacity: 1,
        ease: "ease-out",
      },
      "-=0.1"
    );
}

/*function gsapAnimationResizeBgbLeft(bgB, position, timeLine) {
  timeLine.to(
    bgB,
    {
      duration: 0.22,
      left: `calc(${position})`,
      ease: "ease-in-out",
    },
    0
  );

  timeLine.to(
    bgB,
    { duration: 0.217, bottom: "calc(-3em)", ease: "ease-out" },
    0
  );
}* */


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

