var ta= gsap.timeline()

ta.from("#nav img, #nav h3, #nav button",{
    y:-100,
    duration:1,
    delay:1,
    stagger:0.2,
    opacity:0
})
ta.from("#main h1",{
    y:200,
    opacity:0,
    duration:1,
    scale:0
})
ta.from("#top-left, #top-right, #bottom-left, #bottom-right, #top",{
    opacity:0,
    scale:0,
    duration:0.5,
    stagger:0.2
})
ta.from("h4",{
    y:15,
    repeat:-1,
    duration:0.5,
    opacity:0,
    yoyo:true,
})