


window.sr = ScrollReveal();
sr.reveal('.headline', {
		duration: 2000,
		origin:'bottom'
	});
sr.reveal('.element', {
		duration: 2000,
		origin:'bottom'
	});
sr.reveal('.points', {
		duration: 2000,
		delay:300,
		origin:'left',
		distance: '500px'
	});


sr.reveal('.point', {
		duration: 2000,
		delay:300,
		origin:'right',
		distance: '500px'
	});

sr.reveal('.body-copy', {
		duration: 2000
		
		
	});

sr.reveal('.copy1', {
		duration: 300,
		origin:'bottom'
	
		
	});

sr.reveal('.copy2', {
		duration: 300,
	origin:'bottom'
	
		
	});

sr.reveal('.copy3', {
		duration: 300,
		origin:'bottom'
	
		
	});



sr.reveal('.test', {
		duration: 1200,
		delay:700,
		viewfactor:0.2,
		origin:'left',
		scale: 3,
		distance: '500px',
		reset: true
		
	});



const upperEyeLid = document.querySelector("#upper-eye-lid");
const upperEyeLidCover = document.querySelector("#upper-eye-lid-cover");
const lowerEyeLid = document.querySelector("#lower-eye-lid");
const lowerEyeLidCover = document.querySelector("#lower-eye-lid-cover");
const blinkToBlink = [2500, 2000, 4000, 300];
const deltas = (r) => [
  [0, 0, blinkToBlink[r]],
  [5, -1, 10],
  [90, -10, 130],
  [30, -3, 55],
  [20, -2, 25],
  [10, -1, 25]
];
let i = 0;
const blinkEye = (deltas) => {
  const _deltas = deltas(Math.round(Math.random() * 3));
  if (i == _deltas.length) {
    i = 0;
  }
  upperEyeLid.setAttribute(
    "d",
    `m 0,50 q 50 ${-60 + _deltas[i][0]}, 100 0 q -50 ${
      -40 + _deltas[i][0]
    }, -100 0`
  );
  upperEyeLidCover.setAttribute(
    "d",
    `m 0,50 q 50 -80, 100 0 q -50 ${-40 + _deltas[i][0]}, -100 0`
  );

  lowerEyeLid.setAttribute(
    "d",
    `m 1,50 q ${27 - _deltas[i][1]} ${33 + _deltas[i][1]}, ${
      77 + _deltas[i][1]
    } 21 q ${-63 - _deltas[i][1]} ${14 + _deltas[i][1]}, ${
      -77 - _deltas[i][1]
    } -21`
  );
  // lowerEyeLid.setAttribute('d', `m 1,50 q 27 33, 78 ${21 + _deltas[i][1]} q -63 14, -78 ${-21 - _deltas[i][1]}`)
  // lowerEyeLidCover.setAttribute('d', `m 1,50 q 17 45, 78 21 q ${-63 + _deltas[i][1]} ${14 + _deltas[i][1]}, -78 -21`)
  setTimeout(blinkEye, _deltas[i][2], deltas);
  console.log(i);
  i++;
};
blinkEye(deltas);

// ScrollReveal().reveal('.headline');

// class Shape {
//     constructor(id) {
//     this.id = id;
//     this.r = 4;
//     this.a = 1;
//     this.x = Math.floor(Math.random() * WIDTH);
//     this.y = Math.floor(Math.random() * HEIGHT);
//     this.color = "rgba(" + c1 + "," + c2 + "," + c3 + "," + this.a + ")";
//     this.dir = Math.floor(Math.random() * 4);
//     this.speed = 1;
//     this.s = Math.floor(Math.random() * 2);
//     this.aReduction = .002;
//   }
  
//   walkLine() {
//     if (this.dir == 0) {
//       this.x += this.speed;
//       this.y += this.speed;
//     }
//     if (this.dir == 1) {
//       this.x += this.speed;
//       this.y -= this.speed;
//     }
//     if (this.dir == 2) {
//       this.x -= this.speed;
//       this.y += this.speed;
//     }
//     if (this.dir == 3) {
//       this.x -= this.speed;
//       this.y -= this.speed;
//     }
  
//     this.draw();
//   }
  
//   draw() {
//     ctx.beginPath();
//     ctx.fillStyle = this.color;
//     ctx.fillRect(this.x, this.y, this.r, this.r);
//     ctx.closePath();
//     if (this.a > 0) this.a -= this.aReduction;
//     if (this.a <= 0) {
//       this.a = 0;
//       this.die();
//     }
//     this.color = "rgba(" + c1 + "," + c2 + "," + c3 + "," + this.a + ")";
//   }
  
//   changeDir() {
//     var newDir = Math.floor(Math.random() * 4);
//     if (this.dir == newDir ||
//       (this.dir == 0 && newDir == 3) ||
//       (this.dir == 1 && newDir == 2) ||
//       (this.dir == 2 && newDir == 1) ||
//       (this.dir == 3 && newDir == 0)) {
//       this.changeDir();
//       return;
//     } else {
//       this.dir = newDir;
//     }
//   }
  
//   die() {
//     shapes[this.id] = null;
//     delete shapes[this.id];
//   }
// }

// var canvas = document.getElementById('canvas'),
//     ctx = canvas.getContext('2d'),
//     WIDTH, 
//     HEIGHT,
//     shapes = [],
//   c1 = 43,
//   c1S = 1,
//   c2 = 205,
//   c2S = 1,
//   c3 = 255,
//   c3S = 1,
//   yS = 1,
//   it = 0,
//   totIt = 0,
//   changeFreq = 100,
//   popInterval = 75,
//   gCOchangeFreq = 1000,
//   maxPopulation = 300;

// resize();
// window.addEventListener('resize', resize);

// function animate() {
//   it++;
//   totIt++;
  
//   if (totIt % gCOchangeFreq == 0) {
//     if (ctx.globalCompositeOperation == "lighter") {
//       ctx.globalCompositeOperation = "source-over";
//       gCOchangeFreq = 250;      
//     } else {
//       ctx.globalCompositeOperation = "lighter";
//       gCOchangeFreq = 1000;
//     }
//   }
//   ctx.shadowBlur = 0;
//   ctx.fillStyle = "rgba(0,0,0,.03)";
//   ctx.fillRect(0, 0, WIDTH, HEIGHT);

//   ctx.shadowColor = "rgb(" + c1 + ", " + c2 + ", " + c3 + ")";
//   ctx.shadowBlur = 25;

//   for (var i in shapes) {
//     if (it == changeFreq) {
//       shapes[i].changeDir();
//     }
//     shapes[i].walkLine();
//   }
//   if (it == changeFreq) it = 0;

//   changeColor();
//   requestAnimationFrame(animate);
// }

// function changeColor() {
//   if (c1 == 0 || c1 == 255) c1S *= -1;
//   if (c2 == 0 || c2 == 255) c2S *= -1;
//   if (c3 == 0 || c3 == 255) c3S *= -1;
//   c1 += 1 * c1S;
//   c2 += 1 * c2S;
//   c3 += 1 * c3S;
// }

// init();

// function init() {
//   ctx.globalCompositeOperation = "lighter";
//   for (var i = 0; i < 1; i++) {
//     shapes[i] = new Shape(i);
//     if (i == 0) shapes[i].dir = 0;
//     if (i == 1) shapes[i].dir = 1;
//     if (i == 2) shapes[i].dir = 2;
//     if (i == 3) shapes[i].dir = 3;

//     animate();
//   }
//   setInterval(function() {
//     shapes[shapes.length] = new Shape();
//   }, popInterval);
// }

// function degToRad(deg) {
//   return deg * (Math.PI / 180);
// }

// function resize() {
//   WIDTH = document.documentElement.clientWidth;
//   HEIGHT = document.documentElement.clientHeight;
  
//   canvas.width = WIDTH;
//   canvas.height = HEIGHT;
// }