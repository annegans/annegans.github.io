window.onload = function () {

var tl1 = new TimelineMax({repeat:1, repeatDelay:3})    
tl1

.fromTo("#image2", 0.1, { visibility: "hidden", autoAlpha: 0}, {delay:4, visibility: "visible", autoAlpha: 1})
.fromTo("#image3", 0.1, { visibility: "hidden", autoAlpha: 0}, { delay:4, visibility: "visible", autoAlpha: 1})



///////TOTAL DURATION SHOULD NOT BE OVER 30S////////
console.log(tl1.totalDuration());  

///// RESTART BANNER (OPTIONAL)//// 
document.getElementById("restart").onclick=function(){
tl1.restart();	
}
}

