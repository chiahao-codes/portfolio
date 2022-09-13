window.addEventListener("load", () => {
  //check local storage for currBgBubblePercent;
  getViewPort();
  localStorage.clear();
  currBgBubblePercent = "11%";
  moveBgBubbleAndTurnOffElem(1, currBgBubblePercent, bgBubble);
  giveMenuIdClickEvent(bgBubble);
  resizeBgbLeft(bgBubble, viewport, currBgBubblePercent);
});

window.addEventListener("resize", () => {
  getViewPort();
  console.log(`Viewport width:${viewport}`);
  turnOffClickedMenuElem(currBgBubblePercent);
  resizeBgbLeft(bgBubble, viewport, currBgBubblePercent);
});


let timeLine = gsap.timeline();
let body = document.getElementsByTagName("body")[0];
console.log(body);
let bgBubble = document.getElementById("bgBubble");
let bgWrapper = document.getElementById("bgWrapper");
let menuElements = document.getElementsByClassName("menuElement");
console.log(menuElements);
let viewport, currBgBubblePercent, id;

let percentMap = {
  0: "11%",
  1: "36%",
  2: "61%",
  3: "86.2%",
};

/**
 * "36%"
"61%"
"86.2%"
 * 
 */

function getViewPort() {
  return (viewport = window.innerWidth);
}

function moveBgBubbleAndTurnOffElem(id, currBgBubblePercent, bgBubble) {
// perhaps: set currBgBubblePercent = to another variable, then pass to functions below;
  move(id, currBgBubblePercent, bgBubble);
  turnOffClickedMenuElem(currBgBubblePercent);
}


function giveMenuIdClickEvent(bgBubble) {
  console.log("giveMenuIdClickEvent()");
  for (let i = 0; i < menuElements.length; i++) {
    menuElements[i].firstChild.addEventListener("click", () => {
      id = (i + 1).toString(),
        currBgBubblePercent = percentMap[i];
      /** */
      switch (i) {
        case 0:
          moveBgBubbleAndTurnOffElem(id, currBgBubblePercent, bgBubble);
          body.style.backgroundColor = "black";
          bgWrapper.style.backgroundColor = "black";
          bgBubble.style.backgroundColor = "black";
          break;
        case 1:
          moveBgBubbleAndTurnOffElem(id, currBgBubblePercent, bgBubble);
          body.style.backgroundColor = "white";
          bgWrapper.style.backgroundColor = "white";
          bgBubble.style.backgroundColor = "white";
          break;
        case 2:
          moveBgBubbleAndTurnOffElem(id, currBgBubblePercent, bgBubble);
          body.style.backgroundColor = "navy";
          break;
        case 3:
          moveBgBubbleAndTurnOffElem(id, currBgBubblePercent, bgBubble);
          body.style.backgroundColor = "darkgreen";
          break;
      }
    });
  }
}

function move(id, position, bgBubble) {
  console.log(
    `move() running, id:${id}, position:${position}, bgBubble;${bgBubble}`
  );
  if (!id) {
    id = "1";
  }
  currBgBubblePercent = position;
  if (!currBgBubblePercent) currBgBubblePercent = "11%";
  localStorage.setItem("currBgBubblePercent", currBgBubblePercent);

  timeLine
    .to(
      bgBubble,
      { duration: 0.1, bottom: "calc(-40px + .025vmin)", ease: "ease-out" },
      0
    )
    .to(
      "#bubble1",
      { duration: 0.1, y: "175%", boxShadow: "none", ease: "ease-out" },
      0
    )
    .to(
      "#bubble2",
      { duration: 0.1, y: "175%", boxShadow: "none", ease: "ease-out" },
      0
    )
    .to(
      "#bubble3",
      { duration: 0.1, y: "175%", boxShadow: "none", ease: "ease-out" },
      0
    )
    .to(
      "#bubble4",
      { duration: 0.1, y: "175%", boxShadow: "none", ease: "ease-out" },
      0
    )
    .to(
      ".icon",
      {
        duration: 0.05,
        opacity: 0,
        ease: "ease-out",
      },
      0
    );
  gsapAnimationResizeBgbLeft(bgBubble, viewport, currBgBubblePercent, timeLine);

  timeLine
    .to(
      `#bubble${id}`,
      {
        duration: 0.15,
        y: "0%",
        backgroundColor: "hsl(0, 0%, 12%)",
        opacity: 1,
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.2194)",
        ease: "ease-out",
      },
      "-=0.1"
    )
    .to(
      `#bubble${id}> span`,
      {
        duration: 0.15,
        y: "0%",
        opacity: 1,
        ease: "ease-out",
      },
      "-=0.1"
    );
}

function turnOffClickedMenuElem(currBgBubblePercent) {
  console.log(`turnOffClickedMenuElem, currBubb:${currBgBubblePercent}`);

  for (let i = 0; i < menuElements.length; i++) {
  
    if (percentMap[i] === currBgBubblePercent) {
      menuElements[i].firstChild.style.opacity = "0";
     
    } else {
      menuElements[i].firstChild.style.opacity = ".55";
      menuElements[i].firstChild.style.color = "white";
      menuElements[i].firstChild.addEventListener("mouseenter", () => {
        mouseEnter(i);
      });
      menuElements[i].firstChild.addEventListener("mouseleave", () => {
        mouseLeave(i);
      });
    }
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


function gsapAnimationResizeBgbLeft(bgB, view, position, timeLine) {
  console.log("gsapMatch running");
 
  if (view >= 1500) {
    timeLine.to(
      bgB,
      {
        duration: 0.219,
        left: `calc(${position} - .59vw)`,
        ease: "ease-in-out",
      },
      0
    );
  }
  if (view >= 1400 && view <= 1499.99) {
    timeLine.to(
      bgB,
      {
        duration: 0.219,
        left: `calc(${position} - .7vw)`,
        ease: "ease-in-out",
      },
      0
    );
  }
  if (view >= 1300 && view <= 1399.99) {
    
    
    timeLine.to(
      bgB,
      {
        duration: 0.219,
        left: `calc(${position} - .91vw)`,
        ease: "ease-in-out",
      },
      0
    );
  }
  if (view >= 1200 && view <= 1299.99) {
    timeLine.to(
      bgB,
      {
        duration: 0.219,
        left: `calc(${position} - 1vw)`,
        ease: "ease-in-out",
      },
      0
    );
  }
  if (view >= 1100 && view <= 1199.99) {
    timeLine.to(
      bgB,
      {
        duration: 0.219,
        left: `calc(${position} - 1.3vw)`,
        ease: "ease-in-out",
      },
      0
    );
  }
  if (view >= 1000 && view <= 1099.99) {
    timeLine.to(
      bgB,
      {
        duration: 0.219,
        left: `calc(${position} - 1.6vw)`,
        ease: "ease-in-out",
      },
      0
    );
  }
  if (view >= 900 && view <= 999.99) {
    timeLine.to(
      bgB,
      {
        duration: 0.219,
        left: `calc(${position} - 2vw)`,
        ease: "ease-in-out",
      },
      0
    );
  }
  if (view >= 800 && view <= 899.99) {
    timeLine.to(
      bgB,
      {
        duration: 0.219,
        left: `calc(${position} - 2.4vw)`,
        ease: "ease-in-out",
      },
      0
    );
  }
  if (view >= 700 && view <= 799.99) {
    timeLine.to(
      bgB,
      {
        duration: 0.219,
        left: `calc(${position} - 2.9vw)`,
        ease: "ease-in-out",
      },
      0
    );
  }
  if (view >= 600 && view <= 699.99) {
    timeLine.to(
      bgB,
      {
        duration: 0.219,
        left: `calc(${position} - 3.7vw)`,
        ease: "ease-in-out",
      },
      0
    );
  }
  if (view >= 500 && view <= 599.99) {
    timeLine.to(
      bgB,
      {
        duration: 0.219,
        left: `calc(${position} - 5vw)`,
        ease: "ease-in-out",
      },
      0
    );
  }
  if (view >= 400 && view <= 499.99) {
    timeLine.to(
      bgB,
      {
        duration: 0.219,
        left: `calc(${position} - 6.1vw)`,
        ease: "ease-in-out",
      },
      0
    );
  }
  if (view >= 320 && view <= 399.99) {
    timeLine.to(
      bgB,
      {
        duration: 0.219,
        left: `calc(${position} - 6.5vw)`,
        ease: "ease-in-out",
      },
      0
    );
  }
  timeLine.to(
    bgB,
    { duration: 0.15, bottom: "calc(-60px + .025vmin)", ease: "ease-out" },
    0
  );
}

function resizeBgbLeft(bgB, view, position) {
  if (view >= 1500) {
    bgB.style.left = `calc(${position} - .59vw)`;
  }
  if (view >= 1400 && view <= 1499.99) {
    bgB.style.left = `calc(${position} - .7vw)`;
  }
  if (view >= 1300 && view <= 1399.99) {
    bgB.style.left = `calc(${position} - .91vw)`;
  }
  if (view >= 1200 && view <= 1299.99) {
    bgB.style.left = `calc(${position} - 1vw)`;
  }
  if (view >= 1100 && view <= 1199.99) {
    bgB.style.left = `calc(${position} - 1.3vw)`;
  }
  if (view >= 1000 && view <= 1099.99) {
    bgB.style.left = `calc(${position} - 1.6vw)`;
  }
  if (view >= 900 && view <= 999.99) {
    bgB.style.left = `calc(${position} - 2vw)`;
  }
  if (view >= 800 && view <= 899.99) {
    bgB.style.left = `calc(${position} - 2.4vw)`;
  }
  if (view >= 700 && view <= 799.99) {
    bgB.style.left = `calc(${position} - 2.9vw)`;
  }
  if (view >= 600 && view <= 699.99) {
    bgB.style.left = `calc(${position} - 3.7vw)`;
  }
  if (view >= 500 && view <= 599.99) {
    bgB.style.left = `calc(${position} - 5vw)`;
  }
  if (view >= 400 && view <= 499.99) {
    bgB.style.left = `calc(${position} - 6.1vw)`;
  }
  if (view >= 320 && view <= 399.99) {
    bgB.style.left = `calc(${position} - 6.5vw)`;
  }
}
