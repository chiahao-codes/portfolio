function move(id) {
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
    timeline.to(`.menuElement`, { duration: 0.05, y: `45%`, fontSize: `calc(1.6em + .25vmin)`,
    color: `white`,
    opacity:.55
    }, 0);
    timeLine.to(`#menu${id}`, { duration: 0.015, opacity: 0, ease: `ease-out` }, 0);
    timeLine.to(`#bubble${id}`, {duration: 0.1, opacity: 1, y: `-10%`, boxShadow: `0 calc(1px + .0215vmin) calc(3px+.0122vmin) rgba(0, 0, 0, 0.12),
    0 calc(1px + .0215vmin) calc(3px+.0202vmin) rgba(0, 0, 0, 0.24);`, ease: `ease-out`
    }, `-=1`);
    timeLine.to(`#bubble${id} > .icon`, { duration: .1, opacity: 1, ease: `ease-in` },0);
    timeLine.to(
      `.navBar > #bubbleWrapper > #bgBubble${id}`,
      {
        duration: 0.1,
        y: `0%`,
        opacity: 1,
        backgroundColor: `black`,
        borderRadius: `50%`,
        width: `calc(70px + .025vmin)`,
        height:`calc(70px + .025vmin)`,
        ease: "ease-out",
      },
      0
    );
}