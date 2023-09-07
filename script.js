gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
var tl= gsap.timeline();
gsap.from("#page1 #box",{
        scale:0,
        duration:0.5,
        delay:1,
})
gsap.from("#page1 #first , #page1 #second ,#page1 #third",{
  scale:0,
  duration:0.5,
  delay:1.5,
})
gsap.to("#page1 #first",{
  scale:1.1,
  marginLeft:"42%",
  duration:1,
  color:"#fff",
  delay:2,
  // position:"fix?ed"
})
gsap.to("#page1 #second",{
  scale:1.1,
  marginLeft:"1%",
  duration:1,
  color:"#fff",
  delay:2,
})
gsap.to("#page1 #third",{
  scale:1.1,
  marginLeft:"73%",
  duration:1,
  color:"#fff",
  delay:2,
})
gsap.to("#page1 #box",{
  height:"100%",
  width:"100%",
  duration:1,
  delay:2,
})
gsap.from("#nav h5",{
  opacity:0,
  delay:2,
  duration:1,
})
gsap.from("#nav",{
  scale:0,
  delay:3,
  duration:1,
})
gsap.from("#page1 h2",{
  scale:0,
  delay:2,
  duration:1,
})
gsap.to("#nav h6",{
  opacity:0,
  scale:0,
  // backgroundColor:"#000",
  // color:"#fff",
  scrollTrigger:{
    trigger:"#third",
    scroller:"#main",
    // markers:true,
    start:"top 20%",
    end:"top 20%",
    scrub:2,
  }
})
gsap.to("#nav h6",{
  scale:0,
  padding:"10px 10px",
  borderRadius:"20px",
  scrollTrigger:{
    trigger:"#third",
    scroller:"#main",
    // markers:true,
    start:"top 20%",
    end:"top 20%",
    scrub:2,
  }
})
gsap.to("#page2 img",{
  objectPosition:"bottom",
  scrollTrigger:{
    trigger:"#page2 img",
    scroller:"#main",
    start:"top 50%",
    end:"top 40%",
    // markers:true,
    scrub:2,
  }
})
var box = document.querySelector("#First");
var box1 = document.querySelector(".division #a");
var box2 = document.querySelector("#division #a1");
var box3 = document.querySelector("#division #a2");
var box4 = document.querySelector("#division #a3");

box1.addEventListener("click",function(){
    box.setAttribute("src","https://images.unsplash.com/photo-1653972233739-667468bbd5a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80");
    box.style.objectFit = "cover";
})
box2.addEventListener("click",function(){
    box.setAttribute("src","https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1934&q=80");
    box.style.objectFit = "cover";
})
box3.addEventListener("click",function(){
    box.setAttribute("src","https://images.unsplash.com/photo-1454810945947-518fa697f0cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
    box.style.objectFit = "cover";
})
box4.addEventListener("click",function(){
    box.setAttribute("src","https://images.unsplash.com/photo-1536279464923-3ed2ad162b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80");
    box.style.objectFit = "cover";
})
var pg5 = document.querySelector("#pg5");
var p = document.querySelector("#page5 p");
var f1 = document.querySelector("#f1");
var eon1 = document.querySelector("#e1");
var eon2 = document.querySelector("#e2");
var eon3 = document.querySelector("#e3");
var eon4 = document.querySelector("#e4");
var eon5 = document.querySelector("#e5");
var eon6 = document.querySelector("#e6");
eon1.addEventListener("mouseenter",function(){
    pg5.setAttribute("src","https://images.unsplash.com/photo-1536279464923-3ed2ad162b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80");
    eon1.style.opacity = 1;
    eon2.style.opacity = 0.1;
    eon3.style.opacity = 0.1;
    eon4.style.opacity = 0.1;
    eon5.style.opacity = 0.1;
    eon6.style.opacity = 0.1;
    f1.innerHTML = "Bream Excellent";
    p.innerHTML = "Rated ‘excellent’ according to the<br>BREEAM standards, The CubeHouse<br>scores very high as a sustainably built<br>environment. Being BREEAM Excellent<br>certified, means we work towards a<br>holistic approach to achieve ESG<br>(Environmental, Social and<br>Governmental factor), health and net<br>zero goals.";
})
eon1.addEventListener("mouseleave",function(){
    eon1.style.opacity = 0.1;
})
eon2.addEventListener("mouseenter",function(){
    pg5.setAttribute("src","https://img2.storyblok.com/375x573/filters:quality(80)/f/229367/1154x1734/840aceadae/stocksy_txpfaa671a2k3j300_medium_4985854.jpg");
    eon1.style.opacity = 0.1;
    eon2.style.opacity = 1;
    eon3.style.opacity = 0.1;
    eon4.style.opacity = 0.1;
    eon5.style.opacity = 0.1;
    eon6.style.opacity = 0.1;
    f1.innerHTML = "Bio-Based Material";
    p.innerHTML = "The CubeHouse is built using 75%<br>reclaimed and/ or biobased materials,<br>for the structure, mainly timber.<br>Biobased materials consist entirely of<br>natural products, with the exclusion of<br>fossil raw materials. About 13,000 m3 of<br>sustainable timber will be used for The<br>CubeHouse. This volume of timber will<br>store up to 9,000 ton of CO2: this is as<br>much as the emissions from the<br>electricity consumption of 10,271<br>households in 1 year!"
})
eon2.addEventListener("mouseleave",function(){
    eon2.style.opacity = 0.1;
})
eon3.addEventListener("mouseenter",function(){
    pg5.setAttribute("src","https://img2.storyblok.com/1824x1725/filters:quality(80)/f/229367/4206x2754/8c6efed233/binnentuin.jpg");
    eon1.style.opacity = 0.1;
    eon2.style.opacity = 0.1;
    eon3.style.opacity = 1;
    eon4.style.opacity = 0.1;
    eon5.style.opacity = 0.1;
    eon6.style.opacity = 0.1;
    f1.innerHTML = "Paris Proof";
    p.innerHTML = "The CubeHouse has an MPG score<br>(rating environmental performance of<br>buildings) of 0.595. This means that the<br>building meets the embodied carbon<br>objective of Paris Proof: material<br>-related emissions according to DGBC<br>calculation protocol amount to 110<br>kg CO2-eq per m2 GFA."
})
eon3.addEventListener("mouseleave",function(){
    eon3.style.opacity = 0.1;
})
eon4.addEventListener("mouseenter",function(){
    pg5.setAttribute("src","https://img2.storyblok.com/1824x1725/filters:quality(80)/f/229367/1733x1155/1d3b64f87e/stocksy_txpfaa671a2k3j300_medium_25996.jpg");
    eon1.style.opacity = 0.1;
    eon2.style.opacity = 0.1;
    eon3.style.opacity = 0.1;
    eon4.style.opacity = 1;
    eon5.style.opacity = 0.1;
    eon6.style.opacity = 0.1;
    f1.innerHTML = "Reuse grey water system";
    p.innerHTML = "A grey water reuse system is a great<br>way to reduce water waste and<br>promote sustainability. The water<br>crates on the roof surfaces collect up<br>to 175 m3 of water. This water is then,<br>for example, used to flush the toilets."
})
eon4.addEventListener("mouseleave",function(){
    eon4.style.opacity = 0.1;
})
eon5.addEventListener("mouseenter",function(){
    pg5.setAttribute("src","https://img2.storyblok.com/1824x1725/filters:quality(80)/f/229367/1950x2924/cf9ba29453/stocksy_txpfaa671a2k3j300_large_4883606.jpg");
    eon1.style.opacity = 0.1;
    eon2.style.opacity = 0.1;
    eon3.style.opacity = 0.1;
    eon4.style.opacity = 0.1;
    eon5.style.opacity = 1;
    eon6.style.opacity = 0.1;
    f1.innerHTML = "WELL Gold";
    p.innerHTML = "To promote the health and well-being of<br>the building’s tenants, The CubeHouse<br>is designed with the WELL Building<br>standard in mind. The shell is Well Gold<br>-certified. This means that the users and<br>visitors quality of life is at the top of<br>our agenda."
})
eon5.addEventListener("mouseleave",function(){
    eon5.style.opacity = 0.1;
})
eon6.addEventListener("mouseenter",function(){
    pg5.setAttribute("src","https://img2.storyblok.com/1824x1725/filters:quality(80)/f/229367/2800x4000/dbe16554e0/22_s7_g-s-cubehouse-stills_cam005.jpg");
    eon1.style.opacity = 0.1;
    eon2.style.opacity = 0.1;
    eon3.style.opacity = 0.1;
    eon4.style.opacity = 0.1;
    eon5.style.opacity = 0.1;
    eon6.style.opacity = 1;
    f1.innerHTML = "Rooftop garden";
    p.innerHTML = "The publicly accessible rooftop garden<br>adds lush greenery to a rather petrified<br>Zuidas. Here, tenants and visitors can<br>enjoy lunch outdoors, surrounded by a<br>variety of flora and fauna. Apart from<br>boosting employees’ work pleasure and<br>well-being, the rooftop garden ensures<br>coolness when needed and store<br>large amounts of water (after heavy rain fall).<br>This combination of greenery and water<br>storage, means that The CubeHouse<br>will be a climate-adaptive office<br>complex."
})
eon6.addEventListener("mouseleave",function(){
    eon6.style.opacity = 0.1;
})
var p1 = document.querySelector("#pa img");
var p2 = document.querySelector("#pb img");
var texta = document.querySelector("#texta");
var textb = document.querySelector("#textb");
p1.addEventListener("mouseenter",function(){
    p1.style.height = "100%";
    p1.style.width = "100%";
    p2.style.height = "50%";
    p2.style.width = "50%";
    p1.style.transition = "all ease 1s";
    texta.style.opacity = 1;
    textb.style.opacity = 0;
    texta.style.transition = "all ease 1s";
})
p1.addEventListener("mouseleave",function(){
    p1.style.height = "50%";
    p1.style.width = "50%";
    p2.style.height = "100%";
    p2.style.width = "100%";
    p1.style.transition = "all ease 1s";
    texta.style.opacity = 0;
    textb.style.opacity = 1;
})
p2.addEventListener("mouseenter",function(){
    p2.style.height = "100%";
    p2.style.width = "100%";
    p1.style.height = "50%";
    p1.style.width = "50%";
    p2.style.transition = "all ease 1s";
    textb.style.opacity = 1;
    textb.style.transition = "all ease 1s";
})
var pg7a = document.querySelector("#pg7a");
var pg7b= document.querySelector("#pg7b");
var pg7c= document.querySelector("#pg7c");
var pg7d = document.querySelector("#pg7d");
var pg7e = document.querySelector("#pg7e");
var pg7f = document.querySelector("#pg7f");
pg7a.addEventListener("mouseenter",function(){
    pg7a.style.height = "29vw";
    pg7a.style.width = "29vw";
    pg7c.style.height = "8vw";
    pg7c.style.width = "8vw";
    pg7d.style.height = "8vw";
    pg7d.style.width = "8vw";
    pg7e.style.height = "8vw";
    pg7e.style.width = "8vw";
    pg7f.style.height = "8vw";
    pg7f.style.width = "8vw";
    pg7a.style.transition = "all ease 1s";
    pg7b.style.transition = "all ease 1s";
    pg7c.style.transition = "all ease 1s";
    pg7d.style.transition = "all ease 1s";
    pg7e.style.transition = "all ease 1s";
    pg7f.style.transition = "all ease 1s";
})
pg7a.addEventListener("mouseleave",function(){
    pg7a.style.height = "14.58vw";
    pg7a.style.width = "14.58vw";
    pg7c.style.height = "14.58vw";
    pg7c.style.width = "14.58vw";
    pg7d.style.height = "14.58vw";
    pg7d.style.width = "14.58vw";
    pg7e.style.height = "14.58vw";
    pg7e.style.width = "14.58vw";
    pg7f.style.height = "14.58vw";
    pg7f.style.width = "14.58vw";
})
pg7b.addEventListener("mouseenter",function(){
    pg7b.style.height = "29vw";
    pg7b.style.width = "29vw";
    // pg7c.style.height = "8vw";
    // pg7c.style.width = "8vw";
    pg7d.style.height = "8vw";
    pg7d.style.width = "8vw";
    pg7e.style.height = "8vw";
    pg7e.style.width = "8vw";
    pg7f.style.height = "8vw";
    pg7f.style.width = "8vw";
    pg7a.style.transition = "all ease 1s";
    pg7b.style.transition = "all ease 1s";
    pg7c.style.transition = "all ease 1s";
    pg7d.style.transition = "all ease 1s";
    pg7e.style.transition = "all ease 1s";
    pg7f.style.transition = "all ease 1s";
})
pg7b.addEventListener("mouseleave",function(){
    pg7a.style.height = "14.58vw";
    pg7a.style.width = "14.58vw";
    pg7b.style.height = "14.58vw";
    pg7b.style.width = "14.58vw";
    pg7c.style.height = "14.58vw";
    pg7c.style.width = "14.58vw";
    pg7d.style.height = "14.58vw";
    pg7d.style.width = "14.58vw";
    pg7e.style.height = "14.58vw";
    pg7e.style.width = "14.58vw";
    pg7f.style.height = "14.58vw";
    pg7f.style.width = "14.58vw";
})
pg7c.addEventListener("mouseenter",function(){
    pg7c.style.height = "29vw";
    pg7c.style.width = "29vw";
    pg7a.style.height = "8vw";
    pg7a.style.width = "8vw";
    // pg7d.style.height = "8vw";
    // pg7d.style.width = "8vw";
    pg7e.style.height = "8vw";
    pg7e.style.width = "8vw";
    pg7f.style.height = "8vw";
    pg7f.style.width = "8vw";
    pg7a.style.transition = "all ease 1s";
    pg7b.style.transition = "all ease 1s";
    pg7c.style.transition = "all ease 1s";
    pg7d.style.transition = "all ease 1s";
    pg7e.style.transition = "all ease 1s";
    pg7f.style.transition = "all ease 1s";
})
pg7c.addEventListener("mouseleave",function(){
    pg7a.style.height = "14.58vw";
    pg7a.style.width = "14.58vw";
    pg7b.style.height = "14.58vw";
    pg7b.style.width = "14.58vw";
    pg7c.style.height = "14.58vw";
    pg7c.style.width = "14.58vw";
    pg7d.style.height = "14.58vw";
    pg7d.style.width = "14.58vw";
    pg7e.style.height = "14.58vw";
    pg7e.style.width = "14.58vw";
    pg7f.style.height = "14.58vw";
    pg7f.style.width = "14.58vw";
})
pg7d.addEventListener("mouseenter",function(){
    pg7d.style.height = "29vw";
    pg7d.style.width = "29vw";
    pg7b.style.height = "8vw";
    pg7b.style.width = "8vw";
    pg7a.style.height = "8vw";
    pg7a.style.width = "8vw";
    // pg7e.style.height = "8vw";
    // pg7e.style.width = "8vw";
    pg7f.style.height = "8vw";
    pg7f.style.width = "8vw";
    pg7a.style.transition = "all ease 1s";
    pg7b.style.transition = "all ease 1s";
    pg7c.style.transition = "all ease 1s";
    pg7d.style.transition = "all ease 1s";
    pg7e.style.transition = "all ease 1s";
    pg7f.style.transition = "all ease 1s";
})
pg7d.addEventListener("mouseleave",function(){
    pg7a.style.height = "14.58vw";
    pg7a.style.width = "14.58vw";
    pg7b.style.height = "14.58vw";
    pg7b.style.width = "14.58vw";
    pg7c.style.height = "14.58vw";
    pg7c.style.width = "14.58vw";
    pg7d.style.height = "14.58vw";
    pg7d.style.width = "14.58vw";
    pg7e.style.height = "14.58vw";
    pg7e.style.width = "14.58vw";
    pg7f.style.height = "14.58vw";
    pg7f.style.width = "14.58vw";
})
pg7e.addEventListener("mouseenter",function(){
    pg7e.style.height = "29vw";
    pg7e.style.width = "29vw";
    pg7a.style.height = "8vw";
    pg7a.style.width = "8vw";
    pg7b.style.height = "8vw";
    pg7b.style.width = "8vw";
    pg7c.style.height = "8vw";
    pg7c.style.width = "8vw";
    // pg7f.style.height = "8vw";
    // pg7f.style.width = "8vw";
    pg7a.style.transition = "all ease 1s";
    pg7b.style.transition = "all ease 1s";
    pg7c.style.transition = "all ease 1s";
    pg7d.style.transition = "all ease 1s";
    pg7e.style.transition = "all ease 1s";
    pg7f.style.transition = "all ease 1s";
})
pg7e.addEventListener("mouseleave",function(){
    pg7a.style.height = "14.58vw";
    pg7a.style.width = "14.58vw";
    pg7b.style.height = "14.58vw";
    pg7b.style.width = "14.58vw";
    pg7c.style.height = "14.58vw";
    pg7c.style.width = "14.58vw";
    pg7d.style.height = "14.58vw";
    pg7d.style.width = "14.58vw";
    pg7e.style.height = "14.58vw";
    pg7e.style.width = "14.58vw";
    pg7f.style.height = "14.58vw";
    pg7f.style.width = "14.58vw";
})
pg7f.addEventListener("mouseenter",function(){
    pg7f.style.height = "29vw";
    pg7f.style.width = "29vw";
    pg7c.style.height = "8vw";
    pg7c.style.width = "8vw";
    pg7d.style.height = "8vw";
    pg7d.style.width = "8vw";
    pg7a.style.height = "8vw";
    pg7a.style.width = "8vw";
    pg7b.style.height = "8vw";
    pg7b.style.width = "8vw";
    pg7a.style.transition = "all ease 1s";
    pg7b.style.transition = "all ease 1s";
    pg7c.style.transition = "all ease 1s";
    pg7d.style.transition = "all ease 1s";
    pg7e.style.transition = "all ease 1s";
    pg7f.style.transition = "all ease 1s";
})
pg7f.addEventListener("mouseleave",function(){
    pg7a.style.height = "14.58vw";
    pg7a.style.width = "14.58vw";
    pg7b.style.height = "14.58vw";
    pg7b.style.width = "14.58vw";
    pg7c.style.height = "14.58vw";
    pg7c.style.width = "14.58vw";
    pg7d.style.height = "14.58vw";
    pg7d.style.width = "14.58vw";
    pg7e.style.height = "14.58vw";
    pg7e.style.width = "14.58vw";
    pg7f.style.height = "14.58vw";
    pg7f.style.width = "14.58vw";
})
gsap.from("#page2 img",{
    opacity:0,
    y:40,
    scrollTrigger:{
        trigger:"#page2 img",
        scroller:"#main",
        start:"top 75%",
        end:"top 75%",
        scrub:3
    }
})
gsap.from("#page2 h1",{
    opacity:0,
    y:40,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"#main",
        start:"top 75%",
        end:"top 75%",
        scrub:3
    }
})
gsap.from("#page2 p, #page2 h5",{
    opacity:0,
    y:40,
    scrollTrigger:{
        trigger:"#page2 img",
        scroller:"#main",
        start:"top 75%",
        end:"top 75%",
        scrub:3
    }
})
gsap.from("#page2 button",{
    opacity:0,
    scrollTrigger:{
        trigger:"#page2 button",
        scroller:"#main",
        start:"top 85%",
        end:"top 85%",
        scrub:3
    }
})
gsap.from("#box2 .elem",{
    y:"100%",
    delay:0,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        start:"top -5%",
        end:"top -5%",
        scrub:3
    }
})
gsap.from("#pg6",{
    y:"40",
    opacity:0,
    scrollTrigger:{
        trigger:"#pg6",
        scroller:"#main",
        start:"top 70%",
        end:"top 70%",
        scrub:3
    }
})