//gsap to and from()

gsap.to("#box", {
  x: 980,
  y: 300,
  duration: 2,
  delay: 1,
  backgroundColor: "blue",
  rotate: 360,
  scale: 0.5,
});

// gsap.from("#box", {
//   x: 980,
//   y: 300,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "blue",
//   rotate: 360,
//   scale: 0.5,
// });

// // multiple animations

// gsap.to("h1", {
//   x: 500,
//   color: "black",
//   duration: 2,
//   delay: 1,
// });
// gsap.to("h2", {
//   x: 500,
//   color: "black",
//   duration: 2,
//   delay: 3,
// });
// gsap.to("h3", {
//   x: 500,
//   color: "black",
//   duration: 2,
//   delay: 5,
//   repeat: 2,
//   yoyo: true,
//   stagger: 0.5,
// });

const tl = gsap.timeline();
tl.to("h1", {
  x: 500,
  color: "black",
  duration: 2,
  delay: 1,
});
tl.to("h2", {
  x: 500,
  color: "black",
  duration: 2,
});
tl.to("h3", {
  x: 500,
  color: "black",
  duration: 2,
});
