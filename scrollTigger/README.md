# GSAP

## What is scrooll Tigger?

-স্ক্রল ট্রিগার হচ্ছে জিসাপ এর একটি প্লাগিন। কোনো একটি পেজে যাওয়ার সাথে সাথে যখন এনিমেশন শুরু হয়। তাকেই স্ক্রল ট্রিগার বলে। প্লাগিনটি সবসময় জিসাপের নিচে বসাতে হবে।

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/ScrollTrigger.min.js" integrity="sha512-OzC82YiH3UmMMs6Ydd9f2i7mS+UFL5f977iIoJ6oy07AJT+ePds9QOEtqXztSH29Nzua59fYS36knmMcv79GOg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

```

### সবচেয়ে সহজ উপায়ঃ

```javascript
gsap.from("#page2 #box", {
  scale: 0,
  duration: 2,
  delay: 1,
  backgroundColor: "red",
  rotate: 360,
  scrollTrigger: "#page2 #box",
});
```

### Advanced Usage:

- **triggers**: ডিভের আইডি অথবা ক্লাস।
- **scroller**: বডি।(স্ক্রল কথায় করবে তার নাম, সব তো বডিতেই হবে।)
- **markers**: মার্কারস ব্যবহারের ভালো উপায় হচ্ছে ডেভেলপট করার সময় ব্যবহার করা। কাজ শেষ হলে কমেন্ট করে দেয়া ভালো।
- **start**: স্টার্ট যখন স্ক্রলার স্টার্ট কে স্পর্শ করে, তখন scrollerTigger execute হয়।
- **end**: ইন্ড যখন স্ক্রলার ইন্ড কে স্পর্শ করবে, তখন scrollerTigger এন্ড হয়ে যাবে।
- **scrub**: যখন স্ক্রল করে নিচের দিকে যাবেন তখন স্ক্রল স্টার্ট হবে আর যখন স্ক্রল করে উপরের দিকে উঠবেন তখন স্ক্রল ইন্ড হবে।

**Example**
```javascript
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
```
