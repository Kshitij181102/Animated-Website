function loco(){
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
}
loco()
var clutter = "";

document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
})
gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger:`#page2>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})
function canvas(){
    const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./pictures/ezgif-frame-001.jpg
  ./pictures/ezgif-frame-002.jpg
  ./pictures/ezgif-frame-003.jpg
  ./pictures/ezgif-frame-004.jpg
  ./pictures/ezgif-frame-005.jpg
  ./pictures/ezgif-frame-006.jpg
  ./pictures/ezgif-frame-007.jpg
  ./pictures/ezgif-frame-008.jpg
  ./pictures/ezgif-frame-009.jpg
  ./pictures/ezgif-frame-010.jpg
  ./pictures/ezgif-frame-011.jpg
  ./pictures/ezgif-frame-012.jpg
  ./pictures/ezgif-frame-013.jpg
  ./pictures/ezgif-frame-014.jpg
  ./pictures/ezgif-frame-015.jpg
  ./pictures/ezgif-frame-016.jpg
  ./pictures/ezgif-frame-017.jpg
  ./pictures/ezgif-frame-018.jpg
  ./pictures/ezgif-frame-019.jpg
  ./pictures/ezgif-frame-020.jpg
  ./pictures/ezgif-frame-021.jpg
  ./pictures/ezgif-frame-022.jpg
  ./pictures/ezgif-frame-023.jpg
  ./pictures/ezgif-frame-024.jpg
  ./pictures/ezgif-frame-025.jpg
  ./pictures/ezgif-frame-026.jpg
  ./pictures/ezgif-frame-027.jpg
  ./pictures/ezgif-frame-028.jpg
  ./pictures/ezgif-frame-029.jpg
  ./pictures/ezgif-frame-030.jpg
  ./pictures/ezgif-frame-031.jpg
  ./pictures/ezgif-frame-032.jpg
  ./pictures/ezgif-frame-033.jpg
  ./pictures/ezgif-frame-034.jpg
  ./pictures/ezgif-frame-035.jpg
  ./pictures/ezgif-frame-036.jpg
  ./pictures/ezgif-frame-037.jpg
  ./pictures/ezgif-frame-038.jpg
  ./pictures/ezgif-frame-039.jpg
  ./pictures/ezgif-frame-040.jpg
  ./pictures/ezgif-frame-041.jpg
  ./pictures/ezgif-frame-042.jpg
  ./pictures/ezgif-frame-043.jpg
  ./pictures/ezgif-frame-044.jpg
  ./pictures/ezgif-frame-045.jpg
  ./pictures/ezgif-frame-046.jpg
  ./pictures/ezgif-frame-047.jpg
  ./pictures/ezgif-frame-048.jpg
  ./pictures/ezgif-frame-049.jpg
  ./pictures/ezgif-frame-050.jpg
  ./pictures/ezgif-frame-051.jpg
  ./pictures/ezgif-frame-052.jpg
  ./pictures/ezgif-frame-053.jpg
  ./pictures/ezgif-frame-054.jpg
  ./pictures/ezgif-frame-055.jpg
  ./pictures/ezgif-frame-056.jpg
  ./pictures/ezgif-frame-057.jpg
  ./pictures/ezgif-frame-058.jpg
  ./pictures/ezgif-frame-059.jpg
  ./pictures/ezgif-frame-060.jpg
  ./pictures/ezgif-frame-061.jpg
  ./pictures/ezgif-frame-062.jpg
  ./pictures/ezgif-frame-063.jpg
  ./pictures/ezgif-frame-064.jpg
  ./pictures/ezgif-frame-065.jpg
  ./pictures/ezgif-frame-066.jpg
  ./pictures/ezgif-frame-067.jpg
  ./pictures/ezgif-frame-068.jpg
  ./pictures/ezgif-frame-069.jpg
  ./pictures/ezgif-frame-070.jpg
  ./pictures/ezgif-frame-071.jpg
  ./pictures/ezgif-frame-072.jpg
  ./pictures/ezgif-frame-073.jpg
  ./pictures/ezgif-frame-074.jpg
  ./pictures/ezgif-frame-075.jpg
  ./pictures/ezgif-frame-076.jpg
  ./pictures/ezgif-frame-077.jpg
  ./pictures/ezgif-frame-078.jpg
  ./pictures/ezgif-frame-079.jpg
  ./pictures/ezgif-frame-080.jpg
  ./pictures/ezgif-frame-081.jpg
  ./pictures/ezgif-frame-082.jpg
  ./pictures/ezgif-frame-083.jpg
  ./pictures/ezgif-frame-084.jpg
  ./pictures/ezgif-frame-085.jpg
  ./pictures/ezgif-frame-086.jpg
  ./pictures/ezgif-frame-087.jpg
  ./pictures/ezgif-frame-088.jpg
  ./pictures/ezgif-frame-089.jpg
  ./pictures/ezgif-frame-090.jpg
  ./pictures/ezgif-frame-091.jpg
  ./pictures/ezgif-frame-092.jpg
  ./pictures/ezgif-frame-093.jpg
  ./pictures/ezgif-frame-094.jpg
  ./pictures/ezgif-frame-095.jpg
  ./pictures/ezgif-frame-096.jpg
  ./pictures/ezgif-frame-097.jpg
  ./pictures/ezgif-frame-098.jpg
  ./pictures/ezgif-frame-099.jpg
  ./pictures/ezgif-frame-100.jpg
  ./pictures/ezgif-frame-101.jpg
  ./pictures/ezgif-frame-102.jpg
  ./pictures/ezgif-frame-103.jpg
  ./pictures/ezgif-frame-104.jpg
  ./pictures/ezgif-frame-105.jpg
  ./pictures/ezgif-frame-106.jpg
  ./pictures/ezgif-frame-107.jpg
  ./pictures/ezgif-frame-108.jpg
  ./pictures/ezgif-frame-109.jpg
  ./pictures/ezgif-frame-110.jpg
  ./pictures/ezgif-frame-111.jpg
  ./pictures/ezgif-frame-112.jpg
  ./pictures/ezgif-frame-113.jpg
  ./pictures/ezgif-frame-114.jpg
  ./pictures/ezgif-frame-115.jpg
  ./pictures/ezgif-frame-116.jpg
  ./pictures/ezgif-frame-117.jpg
  ./pictures/ezgif-frame-118.jpg
  ./pictures/ezgif-frame-119.jpg
  ./pictures/ezgif-frame-120.jpg
  ./pictures/ezgif-frame-121.jpg
  ./pictures/ezgif-frame-122.jpg
  ./pictures/ezgif-frame-123.jpg
  ./pictures/ezgif-frame-124.jpg
  ./pictures/ezgif-frame-125.jpg
  ./pictures/ezgif-frame-126.jpg
  ./pictures/ezgif-frame-127.jpg
  ./pictures/ezgif-frame-128.jpg
  ./pictures/ezgif-frame-129.jpg
  ./pictures/ezgif-frame-130.jpg
  ./pictures/ezgif-frame-131.jpg
  ./pictures/ezgif-frame-132.jpg
  ./pictures/ezgif-frame-133.jpg
  ./pictures/ezgif-frame-134.jpg
  ./pictures/ezgif-frame-135.jpg
  ./pictures/ezgif-frame-136.jpg
  ./pictures/ezgif-frame-137.jpg
  ./pictures/ezgif-frame-138.jpg
  ./pictures/ezgif-frame-139.jpg
  ./pictures/ezgif-frame-140.jpg
  ./pictures/ezgif-frame-141.jpg
  ./pictures/ezgif-frame-142.jpg
  ./pictures/ezgif-frame-143.jpg
  ./pictures/ezgif-frame-145.jpg
  ./pictures/ezgif-frame-146.jpg
  ./pictures/ezgif-frame-147.jpg
  ./pictures/ezgif-frame-148.jpg
  ./pictures/ezgif-frame-149.jpg
  ./pictures/ezgif-frame-150.jpg
  ./pictures/ezgif-frame-151.jpg
  
  
 `;
  return data.split("\n")[index];
}

const frameCount = 151;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page3`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page3",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas()
var clutter = "";

document.querySelector("#page4>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page4>h1").innerHTML = clutter;
})

gsap.to("#page4>h1>span",{
  scrollTrigger:{
      trigger:`#page4>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})



