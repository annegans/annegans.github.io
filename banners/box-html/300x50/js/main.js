window.onload = function () {

var tl1 = new TimelineMax({repeat:1, repeatDelay:3})    
tl1

.to("#text1", 1.2, {delay:0.2,autoAlpha: 1, left:"0px"})
.to("#text1", 1.2,{delay:2.3, autoAlpha: 0, left:"-183px"})
.fromTo("#image2", 0.1, { visibility: "hidden", autoAlpha: 1}, { visibility: "visible", autoAlpha: 1})
// .to("#image2", 0.2,{ autoAlpha: 1})
.to("#text2", 1.2, {delay:0.2,autoAlpha: 1, left:"0px"})
.to("#text2", 1.2, {delay:2.3,autoAlpha: 0, left:"-250px"})
.fromTo("#endframe", 0.1, {visibility: "hidden", autoAlpha: 0}, {  visibility: "visible", autoAlpha: 1})
.to("#text3", 1.2, {delay:0.2,autoAlpha: 1, left:"0px"})
.to("#button", 0.7, {autoAlpha: 1, left:"0px"})



///////TOTAL DURATION SHOULD NOT BE OVER 30S////////
console.log(tl1.totalDuration());  


}

