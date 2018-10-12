window.onload = function () {

var tl1 = new TimelineMax({repeat:1, repeatDelay:3})    


tl1
.to("#text1", 1, {autoAlpha: 1, left:"0px"})
.to("#text1", 1.2, {delay:1.5, autoAlpha: 0, left:"-130px"}, "image1")
.fromTo("#image2", 1.2, {visibility: "hidden", autoAlpha: 0}, { visibility: "visible", autoAlpha: 1},"image2")
.to("#text2", 1.2,{autoAlpha: 1, left:"0px"},"image2")
.to("#text2", 1.2, {delay:2, autoAlpha: 0, left:"-130px"})
.fromTo("#image3", 1.2, {visibility: "hidden", autoAlpha: 0}, { visibility: "visible", autoAlpha: 1},"image3")
.to("#text3", 1.2,{autoAlpha: 1, left:"0px"},"image3")
.to("#text3", 1.2, {delay:2, autoAlpha: 0, left:"-130px"})
.to("#borderwhite", 0.1, {css:{zIndex:45}})
.to("#bluesmall", 0.6, {left:"0px"})
.to("#logo", 0.7, {autoAlpha: 1},"button")
.to("#button", 0.7, {autoAlpha: 1},"button")
.to("#buttontext", 0.7, {autoAlpha: 1},"button")
.to("#arrow", 0.7, {autoAlpha: 1},"button")
.to("#logo", 0.7, {scale:0.6, right:"300px", autoAlpha: 1})
.to("#text4", 1, {autoAlpha: 1})
// .to("#arrow", 0.7, {autoAlpha: 1,  ease:Power1.easeInOut, yoyo:true, x: "0px", repeat:2},"button")


///// RESTART BANNER (OPTIONAL)//// 
// .to("#restart", 1, {rotation:"90", autoAlpha: 1})


///////TOTAL DURATION SHOULD NOT BE OVER 30S////////
console.log(tl1.totalDuration());  

///// RESTART BANNER (OPTIONAL)//// 
document.getElementById("restart").onclick=function(){
tl1.restart();	
}
}

