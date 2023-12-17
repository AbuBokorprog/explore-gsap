const tl = gsap.timeline();
tl.from("#nav", {
  y: -50,
  opacity: 0,
  delay: 0.5,
});
tl.from("#nav h1, #nav p, #nav h4", {
  y: -80,
  duration: 1,
  opacity: 0,
  delay: 0,
  stagger: 0.5,
});
tl.from("#left h1", {
  x: -80,
  duration: 1,
  opacity: 0,
  delay: 0,
  stagger: 0.5,
});
tl.from("#right img", {
  scale: 0.5,
  duration: 1,
  opacity: 0,
  delay: 0,
  rotate: 360,
});
tl.from("#page2 .box", {
  scale: 0,
  duration: 2,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page2 .box",
    scroller: "body",
    // markers: true,
    start: "bottom 70%",
    end: "bottom center",
    scrub: 5,
  },
});
