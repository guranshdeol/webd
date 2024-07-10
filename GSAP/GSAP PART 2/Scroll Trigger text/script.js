gsap.from(".page2 h1",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        marker:"true",
        start: "top 0%",
        end:("top -100%"),
        pin:true,
        scrub:2
    }
})