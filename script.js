gsap.to("#nav",{
    backgroundColor:'black',
    height: "90px",
    duration:0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end: "top -11%",
        scrub:1,
    }
})    

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start: "top -30%",
        end:"top -70%",
        scrub: 2,
    }
})
var cursor = document.querySelector("#cursor")
var body = document.querySelector("body");
var blur = document.querySelector("#cursor-blur");



body.addEventListener('mousemove',function(data){
    cursor.style.left = data.x + 30+ "px";
    cursor.style.top = data.y + "px";
    blur.style.left = data.x -120 + "px";
    blur.style.top = data.y -120 + "px";    
})

var h5all = document.querySelectorAll("#nav h5");
h5all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale = 3;
        cursor.style.border = "1px solid white";
        cursor.style.backgroundColor = "transparent";
    })
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale = 1;
        cursor.style.border = "none";
        cursor.style.backgroundColor = "#95C11E";
    })

})
gsap.from("#about-us img,#middle",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller: "body",
        start: "top 66%",
        end: "top 58%",
        scrub:1,
    }
})

gsap.from(".cards",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#card-items",
        scroller: "body",
        start: "top 70%",
        end: "top 68%",
        scrub:1,
    }
})
gsap.from("#colon1",{
    y:-30,
    x:-30,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start: "top 55%",
        end: "top 52%",
        scrub:2,
    }
})
gsap.from("#colon2",{
    y:30,
    x:30,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start: "top 55%",
        end: "top 52%",
        scrub:5,
    }
})
gsap.from("#page4 section h1",{
    y:110,
    scrollTrigger:{
        trigger:"#page4 section h1",
        scroller:"body",
        start: "top 70%",
        end: "top 65%",
        scrub:1,
    }
})

var page4 = document.querySelectorAll("#page4 .elem");
page4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale = 3;
        cursor.style.border = "1px solid white";
        cursor.style.backgroundColor = "transparent";
    })
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale = 1;
        cursor.style.border = "none";
        cursor.style.backgroundColor = "#95C11E";
    })

})