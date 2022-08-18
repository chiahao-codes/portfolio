let timeLine = gsap.timeline();

function move(id, position) {
  timeLine
    to("#bgBubble", { duration: 0.15, bottom: "-40%", ease: "ease-out" }, 0)
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
    .to(`#menu${id}`, { duration: 0.15, opacity: 0, ease: "ease-out" }, "-=0.1")
    .to(`#menu${id}:hover`, {duration:0.1, cursor:"default", ease:"ease-out"}, )
}

