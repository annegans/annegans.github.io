window.onload = function () {

var tl1 = new TimelineMax({repeat:4, repeatDelay:1.5})    
tl1
.to("#text1", 0.5, { delay: 0.1,autoAlpha: 0, autoAlpha: 1}, "intro")
.to("#button", 0.5, {autoAlpha: 0, autoAlpha: 1}, "intro")
.to("#image1", 1.8, {autoAlpha: 0, autoAlpha: 1}, "intro")
.set("#clickArea2", {delay: 1, display:"block"})
.to("#text1", 0.3, { autoAlpha: 1, autoAlpha: 0}, "intro2")
.fromTo("#image2", 2, {delay: 1, visibility: "hidden", autoAlpha: 0}, { scale:"1", visibility: "visible", autoAlpha: 1},"intro2")
.to("#text2", 0.5, {delay: 0.2, autoAlpha: 0, autoAlpha: 1}, "intro2")

// .fromTo("#button", 0.8, {scale:"0.98", autoAlpha: 1}, {scale:"1", autoAlpha: 1, yoyo:true, repeat:3 },"intro2")
console.log(tl1.totalDuration());  

}