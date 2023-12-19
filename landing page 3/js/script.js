function time() {
  let a = 0;
  setInterval(function () {
    a += Math.floor(Math.random() * 30);
    if (a < 100) {
      document.querySelector("#loader h1").innerHTML = a + "%";
    } else {
      a = 100;
      document.querySelector("#loader h1").innerHTML = a + "%";
    }
  }, 300);
}

const tl = gsap.timeline();

tl.to("#loader h1", {
  duration: 2,
  delay: 0.4,
  onState: time(),
});

tl.to("#loader", {
  top: "-100vh",
  duration: 1,
});

tl.to("#page1 h1", {
  transform: "translateX(-190%)",
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    // markers: true,
    start: "top 0",
    end: "top -200%",
    scrub: 2,
    pin: true,
  },
});
