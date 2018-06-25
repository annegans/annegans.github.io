window.onload = function () {

var tl1 = new TimelineMax({repeat:4, repeatDelay:1.4})  

tl1
.to("#text1", 1.1, { delay: 0.3, autoAlpha: 0, autoAlpha: 1}, "intro")
.to("#text1", 0.3, { delay: 0.5, autoAlpha: 1, autoAlpha: 0})
.fromTo("#image2", 2, {delay: 1.3, visibility: "hidden", autoAlpha: 0}, { scale:"1", visibility: "visible", autoAlpha: 1},"intro2")
.to("#text2", 1.2, {delay: 1.3, autoAlpha: 0, autoAlpha: 1}, "intro2")

.fromTo("#button", 0.8, {autoAlpha: 1}, {autoAlpha: 1 }, "intro2")
console.log(tl1.totalDuration());  

}

