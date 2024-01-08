gsap.to('.car', {x: 2000, duration: 12, repeat: 3},0.3);

gsap.to('.f-car-box', 
{scrollTrigger: {
  trigger: ".f-car-box",
  start:"top 70%",
  end:"bottom center",
},
  x: 1200, duration: 8,});

  gsap.to('.e-car-box', 
{scrollTrigger: {
  trigger: ".e-car-box",
  start:"top 70%",
  end:"bottom center",
},
  x: -750, duration: 5,});