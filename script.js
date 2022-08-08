function move(id, position, color) {
    let timeLine = gsap.timeline();
    timeLine.to(
      ".navBar > #bubbleWrapper > .bgBubble",
      { duration: 0.15, y: `45%`, opacity: 0, ease: "ease-out" },
      0
    );
    timeLine.to(`#bubble1`, { duration: .1, y: `110%`, boxShadow: `none`, ease: `ease-out` }, 0);
    timeLine.to( `#bubble2`, { duration: 0.1, y: `110%`, boxShadow: `none`, ease: `ease-out`, },0);
    timeLine.to(
      `#bubble3`,
      {
        duration: 0.1,
        y: `110%`,
        boxShadow: `none`,
    
        ease: `ease-out`,
      },
      0
    );
    timeLine.to(
      `#bubble4`,
      {
        duration: 0.1,
        y: `110%`,
        boxShadow: `none`,
    
        ease: `ease-out`,
      },
      0
    );
    timeLine.to(`.icon`, { duration: 0.05, opacity: 0, ease: `ease-out` }, 0);
    timeLine.to(".navBar > #bubbleWrapper > .bgBubble", { duration: 0.1, y: `45%`, opacity: 0, ease: "ease-out" }, 0);
    timeLine.to(`#bubble${id}`, {
      duration: 0.1,
      opacity: 1,
      boxShadow: `0 calc(1px + .0215vmin) calc(3px+.0122vmin) rgba(0, 0, 0, 0.12),
            0 calc(1px + .0215vmin) calc(3px+.0202vmin) rgba(0, 0, 0, 0.24);`, 
      ease:`ease-out`}, `-=1`);
    timeLine.to(".navBar > #bubbleWrapper > .bgBubble", { duration: 0.1, y:`45%`, opacity: 0, ease: "ease-out" }, 0);
}