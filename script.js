window.addEventListener("load", () => {
  getViewPort();
  currBgBubblePercent = "11%";
  giveMenuIdClickEvent(bgBubble);
  resizeBgbLeft(bgBubble, viewport, currBgBubblePercent);
  turnOffClickedMenuElem(currBgBubblePercent, menuElements);
});

window.addEventListener("resize", () => {
  getViewPort();
  console.log(`Viewport width:${viewport}`);
  turnOffClickedMenuElem(currBgBubblePercent, menuElements);
  resizeBgbLeft(bgBubble, viewport, currBgBubblePercent);
});


let timeLine = gsap.timeline();
let bgBubble = document.getElementById("bgBubble");
let menuElements = document.getElementsByClassName("menuElement");
let viewport, currBgBubblePercent;

let percentMap = {
  0: "11%",
  1: "36%",
  2: "61%",
  3: "86.2%",
};


function getViewPort() {
 return viewport = window.innerWidth;
}



function giveMenuIdClickEvent(bgBubble) {
  console.log("giveMenuIdClickEvent()")
  for (let i = 0; i < menuElements.length; i++) {
    let id = (i + 1).toString();
    menuElements[i].addEventListener("click", () => { 
      move(id, percentMap[i], bgBubble);
    });
  }
}

/**
<a href="index.html" target="_self">
<a href= "projects.html" target="_self">
<a href= "about.html" target="_self">
<a href= "contact.html" target="_self">
 */

function move(id, position, bgBubble) {
  currBgBubblePercent = position;
  console.log(`move(), ${currBgBubblePercent}`);
  timeLine
    .to(
      bgBubble,
      { duration: 0.15, bottom: "calc(-40px + .025vmin)", ease: "ease-out" },
      0
    )
    .to(
      "#bubble1",
      { duration: 0.1, y: "155%", boxShadow: "none", ease: "ease-out" },
      0
    )
    .to(
      "#bubble2",
      { duration: 0.1, y: "155%", boxShadow: "none", ease: "ease-out" },
      0
    )
    .to(
      "#bubble3",
      { duration: 0.1, y: "155%", boxShadow: "none", ease: "ease-out" },
      0
    )
    .to(
      "#bubble4",
      { duration: 0.1, y: "155%", boxShadow: "none", ease: "ease-out" },
      0
    )
    .to(
      ".icon",
      {
        duration: 0.05,
        opacity: 0,
        onComplete: gsapAnimationResizeBgbLeft,
        onCompleteParams: [bgBubble, viewport, currBgBubblePercent, timeLine],
        ease: "ease-out",
      },
      0
  )
       .to(
         bgBubble,
         { duration: 0.15, bottom: "calc(-60px + .025vmin)", ease: "ease-out" },
         "-=0.2"
       )

       .to(
         `#bubble${id}`,
         {
           duration: 0.15,
           y: "0%",
           backgroundColor: "hsl(0, 0%, 12%)",
           opacity: 1,
           boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
           ease: "ease-out",
         },
         "-=0.1"
       )
       .to(
         `#bubble${id}> span`,
         { duration: 0.15, y: "0%", opacity: 1, ease: "ease-out" },
         "-=0.1"
       );

  turnOffClickedMenuElem(currBgBubblePercent, menuElements);
}

  
function turnOffClickedMenuElem(currBgBubblePercent, menuElements) {
 
  for (let i = 0; i < menuElements.length; i++) {
    //iString = i.toString();
    if (percentMap[i] === currBgBubblePercent) {
      menuElements[i].style.opacity = "0";
      //removeStyleTag(iString, style);
    } else {
      menuElements[i].style.opacity = ".55";
      menuElements[i].style.color = "white";
      menuElements[i].addEventListener("mouseenter", (i, menuElements) => {
        menuElements[i].style.opacity = "1";
      });
       menuElements[i].addEventListener("mouseleave", (i, menuElements) => {
         menuElements[i].style.opacity = ".55";
       });
    }
  }
}

function insertAnchorTag() {
  
 }

function gsapAnimationResizeBgbLeft(bgB, view, position, timeLine) {
  console.log("gsapMatch running")

  if (view >= 1500) {
      timeLine.to(
        bgB,
        {
          duration: 0.201,
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
          duration: 0.201,
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
          duration: 0.201,
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
          duration: 0.201,
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
          duration: 0.201,
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
            duration: 0.201,
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
           duration: 0.201,
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
           duration: 0.201,
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
          duration: 0.201,
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
         duration: 0.201,
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
          duration: 0.201,
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
          duration: 0.201,
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
          duration: 0.201,
          left: `calc(${position} - 6.5vw)`,
          ease: "ease-in-out",
        },
        0
      );
   }
 
  /**
   * 
   */
}




function resizeBgbLeft(bgB, view, position) {
  
  if (view >= 1500) {
  bgB.style.left = `calc(${position} - .59vw)`
  }
  if (view >= 1400 && view<=1499.99) {
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




