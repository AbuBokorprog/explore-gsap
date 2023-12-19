# GSAP

## What is GSAP?

- GSAP full form is GreenSock animation platform. GSAP is a javascript library that which provides moving animations.

### first of all you have to connected to GSAP

#### cdnLibrary

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/gsap.min.js"></script>
```

## gsap.to():

- Animation work initial stage to final stage.
  example: gsap.to("In
  this middle have 2 values, one is which property is animate and style of
  animation").

## gsap.from():

- Animation work final stage to initial stage.

## stagger:

- স্টেজ্ঞার হচ্ছে কিছু সময় পর পর প্রত্যেকটা এলিমেন্ট অ্যাঁনিমেশন
  হবে।

## repeat:

- ঐ এলিমেন্টটা কত বার এনিমেশন হবে।

## yoyo:

- ইয়ো ইয়ো হচ্ছে ইয়ো ইয়োর মত কাজ করে। ভ্যালু হচ্ছে true or false

```javascript
gsap.to("h3", {
  x: 500,
  color: "black",
  duration: 2,
  delay: 5,
  repeat: 2,
  yoyo: true,
  stagger: 0.5,
});
```

## gsap.timeline():

- টাইমলাইন হচ্ছে ধারাবাহিকভাবে অথবা একটার পর একটা অর্থাৎ সিরেয়াল ভাবে এনিমেশন হবে।

```javascript
const tl = gsap.timeline();
tl.to("h1", { x: 500, color: "black", duration: 2, delay: 1 });
tl.to("h2", { x: 500, color: "black", duration: 2 });
tl.to("h3", { x: 500, color: "black", duration: 2 });
```
## onstate
- ফাংশন কল করার জন্য এটা ব্যবহার করা হয়।
```javaScript
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
tl.to("#loader h1", {
  duration: 2,
  delay: 0.4,
  onState: time(),
});

```
