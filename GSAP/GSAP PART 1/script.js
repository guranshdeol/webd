const tl = gsap.timeline();
tl.to(".box1",{
    x: 100,
    
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "blue",
  

})
tl.to(".box2",{
    x: 100,
    scale: 0.5,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "pink",
})
tl.to(".box3",{
    x: 100,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "white",


})
