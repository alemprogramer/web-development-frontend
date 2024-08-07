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

function imageLocationDetect(){

}



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



document.querySelectorAll('.elem').forEach((elem)=>{
    let diffRote = 0;
    let rotated = 0;
    elem.addEventListener('mouseleave',(data)=>{
        
        gsap.to(elem.querySelector('img'),{
         opacity: 0,
         ease:Power1,
        } )
     })

    elem.addEventListener('mousemove',(data)=>{
       let diff = data.clientY - elem.getBoundingClientRect().top;
       diffRote  = rotated - data.clientX ;
       rotated = data.clientX
       gsap.to(elem.querySelector('img'),{
        opacity: 1,
        ease:Power3,
        top: diff,
        left: data.clientX,
        rotate: gsap.utils.clamp(-20,20,diffRote)
       } )
    })
})

