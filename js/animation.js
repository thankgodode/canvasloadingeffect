const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
let hue = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("click",function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}


class LoadingAnimation {
  constructor() {
    this.p = 0;
    this.sign = 1;
    this.x1 = canvas.width / 2;
    this.y1 = 50;
    this.size = 14;
  }
  drawBall1() {
    ctx.beginPath();
    ctx.arc(this.x1, this.y1, this.size, 0, Math.PI * 2);
    ctx.fillStyle = "hsl(" + hue + ", 100%, 50%)";
    ctx.fill();
  }
  drawBall2() {
    ctx.beginPath();
    ctx.arc(this.x1 + 33, this.y1, this.size, 0, Math.PI * 2);
    ctx.fillStyle = "hsl(" + hue + ", 100%, 50%)";
    ctx.fill();
  }
  drawBall3() {
    ctx.beginPath();
    ctx.arc(this.x1 - 33, this.y1, this.size, 0, Math.PI * 2);
    ctx.fillStyle = "hsl(" + hue + ", 100%, 50%)";
    ctx.fill();
  }
  animateBall() {
    this.size = 15 * this.p;
    this.p = this.p + 0.02 * this.sign;

    if (this.p > 1) {
      this.sign = -1;
    } else if (this.p < 0.6) {
      this.sign = 1;
    }
  }
}

const ball = new LoadingAnimation();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.drawBall1();
  ball.drawBall2();
  ball.drawBall3();
  ball.animateBall();
  hue++;
  requestAnimationFrame(animate);
}

animate();
