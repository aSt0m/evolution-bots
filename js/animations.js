
gsap.registerPlugin(ScrollTrigger);

/* main */
gsap.from(".crypto1", {
    scrollTrigger: ".crypto1", //Inicia la animacion cuando ".texto" entra en el viewport (una vez)
    x: -100,
    duration: 4,
   opacity: 0,
   ease: "power1"

  });

gsap.from(".text-crypto1", {
    scrollTrigger: ".text-crypto1", // start the animation when ".box" enters the viewport (once)
    x: 100,
    duration: 4,
   opacity: 0
  });

gsap.from(".crypto2", {
    scrollTrigger: ".crypto2", // start the animation when ".box" enters the viewport (once)
    x: 100,
    duration: 4,
   opacity: 0
  });
gsap.from(".text-crypto2", {
    scrollTrigger: ".text-crypto2", // start the animation when ".box" enters the viewport (once)
    x: -100,
    duration: 4,
   opacity: 0
  });
gsap.from(".crypto3", {
    scrollTrigger: ".crypto3", // start the animation when ".box" enters the viewport (once)
    x: -100,
    duration: 4,
   opacity: 0
  });

gsap.from(".text-crypto3", {
    scrollTrigger: ".text-crypto3", // start the animation when ".box" enters the viewport (once)
    x: 100,
    duration: 4,
    opacity: 0
  });

/* Section-med offer */  
gsap.from(".left-up", {
    scrollTrigger: ".left-up", // start the animation when ".box" enters the viewport (once)
    x: -200,
    duration: 2,
   opacity: 0
  });

gsap.from(".left-down", {
    scrollTrigger: ".left-down", // start the animation when ".box" enters the viewport (once)
    x: -400,
    duration: 2,
   opacity: 0
  });
gsap.from(".right-up", {
    scrollTrigger: ".right-up", // start the animation when ".box" enters the viewport (once)
    x: 200,
    duration: 2,
   opacity: 0
  });

gsap.from(".right-down", {
    scrollTrigger: ".right-down", // start the animation when ".box" enters the viewport (once)
    x: 400,
    duration: 2,
   opacity: 0
  });