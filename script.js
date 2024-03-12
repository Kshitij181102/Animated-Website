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
  ezgif-frame-001.jpg
  ezgif-frame-002.jpg
  ezgif-frame-003.jpg
  ezgif-frame-004.jpg
  ezgif-frame-005.jpg
  ezgif-frame-006.jpg
  ezgif-frame-007.jpg
  ezgif-frame-008.jpg
  ezgif-frame-009.jpg
  ezgif-frame-010.jpg
  ezgif-frame-011.jpg
  ezgif-frame-012.jpg
  ezgif-frame-013.jpg
  ezgif-frame-014.jpg
  ezgif-frame-015.jpg
  ezgif-frame-016.jpg
  ezgif-frame-017.jpg
  ezgif-frame-018.jpg
  ezgif-frame-019.jpg
  ezgif-frame-020.jpg
  ezgif-frame-021.jpg
  ezgif-frame-022.jpg
  ezgif-frame-023.jpg
  ezgif-frame-024.jpg
  ezgif-frame-025.jpg
  ezgif-frame-026.jpg
  ezgif-frame-027.jpg
  ezgif-frame-028.jpg
  ezgif-frame-029.jpg
  ezgif-frame-030.jpg
  ezgif-frame-031.jpg
  ezgif-frame-032.jpg
  ezgif-frame-033.jpg
  ezgif-frame-034.jpg
  ezgif-frame-035.jpg
  ezgif-frame-036.jpg
  ezgif-frame-037.jpg
  ezgif-frame-038.jpg
  ezgif-frame-039.jpg
  ezgif-frame-040.jpg
  ezgif-frame-041.jpg
  ezgif-frame-042.jpg
  ezgif-frame-043.jpg
  ezgif-frame-044.jpg
  ezgif-frame-045.jpg
  ezgif-frame-046.jpg
  ezgif-frame-047.jpg
  ezgif-frame-048.jpg
  ezgif-frame-049.jpg
  ezgif-frame-050.jpg
  ezgif-frame-051.jpg
  ezgif-frame-052.jpg
  ezgif-frame-053.jpg
  ezgif-frame-054.jpg
  ezgif-frame-055.jpg
  ezgif-frame-056.jpg
  ezgif-frame-057.jpg
  ezgif-frame-058.jpg
  ezgif-frame-059.jpg
  ezgif-frame-060.jpg
  ezgif-frame-061.jpg
  ezgif-frame-062.jpg
  ezgif-frame-063.jpg
  ezgif-frame-064.jpg
  ezgif-frame-065.jpg
  ezgif-frame-066.jpg
  ezgif-frame-067.jpg
  ezgif-frame-068.jpg
  ezgif-frame-069.jpg
  ezgif-frame-070.jpg
  ezgif-frame-071.jpg
  ezgif-frame-072.jpg
  ezgif-frame-073.jpg
  ezgif-frame-074.jpg
  ezgif-frame-075.jpg
  ezgif-frame-076.jpg
  ezgif-frame-077.jpg
  ezgif-frame-078.jpg
  ezgif-frame-079.jpg
  ezgif-frame-080.jpg
  ezgif-frame-081.jpg
  ezgif-frame-082.jpg
  ezgif-frame-083.jpg
  ezgif-frame-084.jpg
  ezgif-frame-085.jpg
  ezgif-frame-086.jpg
  ezgif-frame-087.jpg
  ezgif-frame-088.jpg
  ezgif-frame-089.jpg
  ezgif-frame-090.jpg
  ezgif-frame-091.jpg
  ezgif-frame-092.jpg
  ezgif-frame-093.jpg
  ezgif-frame-094.jpg
  ezgif-frame-095.jpg
  ezgif-frame-096.jpg
  ezgif-frame-097.jpg
  ezgif-frame-098.jpg
  ezgif-frame-099.jpg
  ezgif-frame-100.jpg
  ezgif-frame-101.jpg
  ezgif-frame-102.jpg
  ezgif-frame-103.jpg
  ezgif-frame-104.jpg
  ezgif-frame-105.jpg
  ezgif-frame-106.jpg
  ezgif-frame-107.jpg
  ezgif-frame-108.jpg
  ezgif-frame-109.jpg
  ezgif-frame-110.jpg
  ezgif-frame-111.jpg
  ezgif-frame-112.jpg
  ezgif-frame-113.jpg
  ezgif-frame-114.jpg
  ezgif-frame-115.jpg
  ezgif-frame-116.jpg
  ezgif-frame-117.jpg
  ezgif-frame-118.jpg
  ezgif-frame-119.jpg
  ezgif-frame-120.jpg
  ezgif-frame-121.jpg
  ezgif-frame-122.jpg
  ezgif-frame-123.jpg
  ezgif-frame-124.jpg
  ezgif-frame-125.jpg
  ezgif-frame-126.jpg
  ezgif-frame-127.jpg
  ezgif-frame-128.jpg
  ezgif-frame-129.jpg
  ezgif-frame-130.jpg
  ezgif-frame-131.jpg
  ezgif-frame-132.jpg
  ezgif-frame-133.jpg
  ezgif-frame-134.jpg
  ezgif-frame-135.jpg
  ezgif-frame-136.jpg
  ezgif-frame-137.jpg
  ezgif-frame-138.jpg
  ezgif-frame-139.jpg
  ezgif-frame-140.jpg
  ezgif-frame-141.jpg
  ezgif-frame-142.jpg
  ezgif-frame-143.jpg
  ezgif-frame-145.jpg
  ezgif-frame-146.jpg
  ezgif-frame-147.jpg
  ezgif-frame-148.jpg
  ezgif-frame-149.jpg
  ezgif-frame-150.jpg
  ezgif-frame-151.jpg  
  
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



