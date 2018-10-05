window.onload = function () {

var tl1 = new TimelineMax({repeat:1, repeatDelay:0.8})    
tl1

.to("#text1", 0.5, {autoAlpha: 1})
.to("#text1", 0.4,{delay:1.2, autoAlpha: 0})
.fromTo("#image2", 0.1, { visibility: "hidden", autoAlpha: 1}, { visibility: "visible", autoAlpha: 1},"second")

.to("#text2", 0.5, {autoAlpha: 1},"second")
.to("#text2", 0.4, {delay:1.2,autoAlpha: 0})
.fromTo("#endframe", 0.1, {visibility: "hidden", autoAlpha: 0}, {  visibility: "visible", autoAlpha: 1})
.to("#text3", 0.5, {autoAlpha: 1},"end")
.to("#button", 0.5, {autoAlpha: 1},"end")
.fromTo("#button", 0.7, {scale:"0.98", autoAlpha: 1}, {scale:"1.02", autoAlpha: 1, yoyo:true, repeat:3 },"end")



///////TOTAL DURATION SHOULD NOT BE OVER 30S////////
console.log(tl1.totalDuration());  


}
