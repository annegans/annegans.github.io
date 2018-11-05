///////ADFROM CLICK AREAS////////

var clickTAGvalue01 = dhtml.getVar('clickTAG', 'https://www.shelterbox.org/shine');
// var clickTAGvalue02 = dhtml.getVar('clickTAG02', 'https://www.facebook.com');
// var clickTAGvalue03 = dhtml.getVar('clickTAG03', 'https://www.google.com');

var landingpagetarget = dhtml.getVar('landingPageTarget', '_blank');
 
var clickBtn01 = document.getElementById("clickArea01");  
clickBtn01.onclick=function(){
	window.open(clickTAGvalue01, landingpagetarget);	
	}
// var clickBtn02 = document.getElementById("clickArea02");  
// clickBtn02.onclick=function(){
// 	window.open(clickTAGvalue02, landingpagetarget);	
// 	}
// var clickBtn03 = document.getElementById("clickArea03");  
// clickBtn03.onclick=function(){
// 	window.open(clickTAGvalue03, landingpagetarget);	
// 	}

window.onload = function () {


var tl1 = new TimelineMax({repeat:1, repeatDelay:3})    
tl1


.to("#boxlogo", 0.5, {autoAlpha: 1, top:"0px"})
.to("#text1", 0.5, {delay:0.3,autoAlpha: 1})
.to("#text1", 0.4,{delay:3, autoAlpha: 0})
.fromTo("#image2", 0.1, { visibility: "hidden", autoAlpha: 1}, { visibility: "visible", autoAlpha: 1},"second")

.to("#text2", 0.5, {autoAlpha: 1},"second")
.to("#text2", 0.4, {delay:3.5,autoAlpha: 0})

// .fromTo("#image3", 0.1, { visibility: "hidden", autoAlpha: 1}, { visibility: "visible", autoAlpha: 1})
// .to("#text3", 0.5, {autoAlpha: 1})
// .to("#text3", 0.4, {delay:2.3,autoAlpha: 0})
.fromTo("#endframe", 0.1, {visibility: "hidden", autoAlpha: 0}, {  visibility: "visible", autoAlpha: 1})
.to("#text4", 0.5, {autoAlpha: 1},"end")
.to("#button", 0.5, {autoAlpha: 1},"end")
.to("#logo2", 0.5, {autoAlpha: 1},"end")
.fromTo("#button", 0.5, {scale:"0.98", autoAlpha: 1}, {scale:"1.02", autoAlpha: 1, yoyo:true, repeat:3 },"end")




///////TOTAL DURATION SHOULD NOT BE OVER 30S////////
console.log(tl1.totalDuration());  


}

