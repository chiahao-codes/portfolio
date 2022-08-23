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
  getViewPort();
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
    let id = (i + 1).toString();
    menuElements[i].addEventListener("click", () => {
      getViewPort();
      move(id, percent[i]);
    });
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
  currBgBubblePercent = position;

  timeLine
    .to(
      "#bgBubble",
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
    .to(".icon", { duration: 0.05, opacity: 0, ease: "ease-out" }, 0)
    .to(
      "#bgBubble",
      { duration: 0.3, left: position, ease: "ease-in-out" },
      0.1
    )
    .to(
      "#bgBubble",
      { duration: 0.2, bottom: "calc(-60px + .025vmin)", ease: "ease-out" },
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
  mediaQ(bgBubble, viewport, currBgBubblePercent);
}


  
function restoreMenuElems() {
  /**
   *  .to(`#menuWrapper >${id}`, { duration: 0.15, opacity: 0, ease: "ease-out" }, "-=0.1")
    .to(
      `#menuWrapper >${id}`,{ duration: 0.1, cursor: "default", ease: "ease-out" },"-=0.1")


       // restore the other menu element opacity to .55 and hover effect to 1, cursor to pointer;
let menuIds = [1, 2, 3, 4]; 

  for (let i of menuIds) {
    i = i.toString();
    if (i!== id) {
      timeLine.to(`#menuWrapper >${i}`, { duration: 0.15, opacity: .55, ease: "ease-out" }, 0)
      document.styleSheets[0].insertRule(`#menuWrapper >${i}:hover{opacity:1; filter:contrast(150%), brightness(100%)}`)
    }
    console.log(i);
}
   */
}

function mediaQ(bgB, view, position) {
  console.log(`view:${view}, position:${position}`);
  
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




