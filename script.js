let timeLine = gsap.timeline();
let bgBubble = document.getElementById("bgBubble");
let menuElements = document.getElementsByClassName("menuElement");

let viewport;
let currBgBubblePercent;

console.log(menuElements);

function getViewPort() {
 return viewport = window.innerWidth;
}

window.addEventListener("load", () => {
  currBgBubblePercent = "11%";
  mediaQ(bgBubble, viewport, currBgBubblePercent);
  giveMenuIdClickEvent();
  
})


window.addEventListener("resize", () => {
  getViewPort();
  console.log(`Viewport width:${viewport}`);

  if (currBgBubblePercent === "11%") {
    //turn off opacity of menuElements;
    menuElements[0].style.opacity = "0";
    mediaQ(bgBubble, viewport, currBgBubblePercent);
  } else if (currBgBubblePercent === "36%") {
    menuElements[1].style.opacity = "0";
    mediaQ(bgBubble, viewport, currBgBubblePercent);
  } else if (currBgBubblePercent === "62%") {
    menuElements[2].style.opacity = "0";
    mediaQ(bgBubble, viewport, currBgBubblePercent);
  } else {
    menuElements[3].style.opacity = "0";
    mediaQ(bgBubble, viewport, currBgBubblePercent);
  }
  
});


function giveMenuIdClickEvent() {
  let percent = ["11%", "36%", "61%", "86.2%"];
  for (let i = 0; i < menuElements.length; i++) {
    let id = i.toString();
    menuElements[i].addEventListener("click", () => {
      alert("Hi...");
    });
    /**
     *  let percentage = percent[i - 1];
      move(id, percentage);
      mediaQ(bgBubble, viewport, percentage);
     */
  }
}

/**
 * 
 * home: 11;
projects:36;
about:61
contact:86.2 
a href="index.html" target="_self">
a href= "projects.html" target="_self">
a href= "about.html" target="_self">
a href= "contact.html" target="_self">
 */

function move(id, position) {
  timeLine
    .to("#bgBubble", { duration: 0.15, bottom: "-40%", ease: "ease-out" }, 0)
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
    .to(".icon", { duration: 0.05, opacity: 0, ease: "ease-out" }, 0)
    .to(
      "#bgBubble",
      { duration: 0.2, left: position, ease: "ease-in-out" },
      0.1
    )
    .to(
      "#bgBubble",
      { duration: 0.15, bottom: "-50px", ease: "ease-out" },
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
    )
    .to(`#${id}`, { duration: 0.15, opacity: 0, ease: "ease-out" }, "-=0.1")
    .to(
      `#${id}`,{ duration: 0.1, cursor: "default", ease: "ease-out" },"-=0.1")

  // restore the other menu element opacity to .55 and hover effect to 1, cursor to pointer;
  let menuIds = [1, 2, 3, 4];
  for (let i of menuIds) {
    i = i.toString();
    if (i!== id) {
      timeLine.to(`#${i}`, { duration: 0.15, opacity: .55, ease: "ease-out" }, 0)
      document.styleSheets[0].insertRule(`#${i}:hover{opacity:1; filter:contrast(150%), brightness(100%)}`)
    }
    console.log(i);
  }
}


function mediaQ(bgB, view, position) {
  if (view >= 1500) {
  bgB.style.marginLeft = `calc(${position} - .59vw)`
  }
  if (view >= 1400 && view<=1499.99) {
    bgB.style.marginLeft = `calc(${position} - .7vw)`;
  }
  if (view >= 1300 && view <= 1399.99) {
    bgB.style.marginLeft = `calc(${position} - .91vw)`;
  }
  if (view >= 1200 && view <= 1299.99) {
    bgB.style.marginLeft = `calc(${position} - 1vw)`;
  }
  if (view >= 1100 && view <= 1199.99) {
    bgB.style.marginLeft = `calc(${position} - 1.3vw)`;
  }
  if (view >= 1000 && view <= 1099.99) {
    bgB.style.marginLeft = `calc(${position} - 1.6vw)`;
  }
  if (view >= 900 && view <= 999.99) {
    bgB.style.marginLeft = `calc(${position} - 2vw)`;
  }
  if (view >= 800 && view <= 899.99) {
    bgB.style.marginLeft = `calc(${position} - 2.4vw)`;
  }
  if (view >= 700 && view <= 799.99) {
    bgB.style.marginLeft = `calc(${position} - 2.9vw)`;
  }
  if (view >= 600 && view <= 699.99) {
    bgB.style.marginLeft = `calc(${position} - 3.7vw)`;
  }
   if (view >= 500 && view <= 599.99) {
     bgB.style.marginLeft = `calc(${position} - 5vw)`;
  }
   if (view >= 400 && view <= 499.99) {
     bgB.style.marginLeft = `calc(${position} - 5.7vw)`;
  }
   if (view >= 320 && view <= 399.99) {
     bgB.style.marginLeft = `calc(${position} - 6vw)`;
  }
}

  /** Then, in a separate function, run this:
   * /*left percentage per icon;
home: 11;
projects:36;
about:61
contact:86.2 

   * 
   *  screen and (min-width:1500px) {
    #bgBubble {
        left: calc(11% - .59vw);
    }
}

 screen and (min-width:1400px) and (max-width:1499.99px) {
    #bgBubble {
        left: calc(11% - .7vw);
    }
}

 screen and (min-width:1300px) and (max-width:1399.99px) {
    #bgBubble {
        left: calc(11% - .91vw);
    }
}

 screen and (min-width:1200px) and (max-width:1299.99px) {
    #bgBubble {
        left: calc(11% - 1vw);
    }
}

 screen and (min-width:1100px) and (max-width:1199.99px) {
    #bgBubble {
        left: calc(11% - 1.3vw);
    }
}

 screen and (min-width:1000px) and (max-width:1099.99px) {
    #bgBubble {
        left: calc(11% - 1.6vw);
    }
}

 screen and (min-width:900px) and (max-width:999.99px) {
    #bgBubble {
        left: calc(11% - 2vw);
    }
}

 screen and (min-width:800px) and (max-width:899.99px) {
    #bgBubble {
        left: calc(11% - 2.4vw);
    }
}

 screen and (min-width:700px) and (max-width:799.99px) {
    #bgBubble {
        left: calc(11% - 2.9vw);
    }
}

 screen and (min-width:600px) and (max-width:699.99px) {
    #bgBubble {
        left: calc(11% - 3.7vw);
    }
}

 screen and (min-width:500px) and (max-width:599.99px) {
    #bgBubble {
        left: calc(11% - 5vw);
    }
}

 screen and (min-width:400px) and (max-width:499.99px) {
    #bgBubble {
        left: calc(11% - 6.2vw);
    }
}

 screen and (min-width:320px) and (max-width:399.99px) {
    #bgBubble {
        left: calc(11% - 7.3vw);
    }
}
   */


