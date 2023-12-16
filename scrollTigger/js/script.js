gsap.from("#page1 #box", {
  scale: 0,
  duration: 2,
  delay: 1,
  backgroundColor: "red",
  rotate: 360,
});
// gsap.from("#page2 #box", {
//   scale: 0,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "red",
//   rotate: 360,
//   scrollTrigger: "#page2 #box",
// });
gsap.from("#page2 #box", {
  scale: 0,
  duration: 2,
  delay: 1,
  backgroundColor: "red",
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "bottom 30%",
    // scrub: true,
    scrub: 2,
  },
});
