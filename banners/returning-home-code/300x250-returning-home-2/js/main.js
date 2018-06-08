window.onload = function () {

var tl1 = new TimelineMax({repeat:4, repeatDelay:1.5})    
tl1
.to("#text1", 1, { autoAlpha: 0, autoAlpha: 1}, "intro")
.to("#button", 1, {autoAlpha: 0, autoAlpha: 1}, "intro")
.fromTo("#image1", 1.8, {scale:"1", autoAlpha: 1}, {scale:"1.2", autoAlpha: 1, },"intro")
.fromTo("#image2", 2, {visibility: "hidden", autoAlpha: 0}, { scale:"1", visibility: "visible", autoAlpha: 1})
.set("#clickArea2", {display:"block"})
.fromTo("#endframe", 1, {visibility: "hidden", autoAlpha: 0}, { scale:"1", visibility: "visible", autoAlpha: 1},"end")
.to("#endframecopy", 1, {autoAlpha: 0, autoAlpha: 1},"end")
// .to("#button", 0.7, {autoAlpha: 1 ,scale:1.8, ease:Pulse.easeInOut, yoyo:true, repeat:3})
// .fromTo("#button", 1, {scale:"0.98", autoAlpha: 1}, {scale:"1", autoAlpha: 1, yoyo:true, repeat:2 })
// .to("#button2", 0.7, {autoAlpha: 1 ,scale:0.99, ease:Bounce.easeInOut, yoyo:true, repeat:2})
///////TOTAL DURATION SHOULD NOT BE OVER 30S////////
console.log(tl1.totalDuration());  

}

