const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var tl=gsap.timeline();

tl.to(".pg1",{   //nicha bhaj dia
    y:"100vh",
    scale:0.5,
    duration:0
})
tl.to(".pg1",{
    y:"0vh",          // uper aya
    duration:1,
    delay:1
})

tl.to(".pg1",{
    rotate:360,       //uper ana k bd rotate kia
    scale:1,
    duration:0.8

})