const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function circleMouseFollower(){
    window.addEventListener('mousemove',(data) => {
        console.log("🚀 ~ window.addEventListener ~ data:", data.clientX,data.clientY);
        return document.querySelector('.miniCircle').style.transform = `translate(${data.clientX}px, ${data.clientY}px)`
    })
}

circleMouseFollower();



gsap.from('nav',{
    y: -10,
    duration:.5,
    opacity: 0
})


let tl = gsap.timeline();

tl.to('.hero h1',{
    y: 0,
    duration:1,
})

tl.to('.hero h3',{
    y:0,
    duration:1,
    stagger:.2,
})
tl.from('.section-three',{
    y: -10,
    duration:.2,
    opacity: 0
})

