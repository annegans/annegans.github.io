window.onload = function () {

var tl1 = new TimelineMax({repeat:1, repeatDelay:0.4})    
tl1

.to("#text1", 0.7, {autoAlpha: 1, left:"0px"})
.to("#text1", 0.4,{delay:1.3, autoAlpha: 0, left:"-60px"})
.fromTo("#image2", 0.1, { visibility: "hidden", autoAlpha: 1}, { visibility: "visible", autoAlpha: 1},"second")

.to("#text2", 0.7, {autoAlpha: 1, left:"0px"},"second")
.to("#text2", 0.4, {delay:1.3,autoAlpha: 0, left:"-60px"})
.fromTo("#endframe", 0.1, {visibility: "hidden", autoAlpha: 0}, {  visibility: "visible", autoAlpha: 1})
.to("#text3", 0.5, {autoAlpha: 1, left:"0px"},"end")
.to("#button", 0.5, {autoAlpha: 1, left:"0px"},"end")
.fromTo("#button", 0.6, {scale:"0.98", autoAlpha: 1}, {scale:"1.02", autoAlpha: 1, yoyo:true, repeat:3 },"end")



///////TOTAL DURATION SHOULD NOT BE OVER 30S////////
console.log(tl1.totalDuration());  


}

