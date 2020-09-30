// Balloons
const BALLOONS_COLORS = ['#00FF80', '#0FF', '#FFFF26', '#FF2626', '#0080FF', '#F0F'];
const QTY_BALLOONS = 20;

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomColor() {
  return BALLOONS_COLORS[random(0, BALLOONS_COLORS.length - 1)];
}

function releaseBalloon(balloon) {
  const delay = random(290, 1000);
  const duration = random(5, 12);
  const x = random(0, 100);
  const size = random(1, 5);
  balloon.style.left = `${x}vw`;
  balloon.style.animationDelay = `${delay}ms`;
  balloon.style.animationDuration = `${duration}s`;
  balloon.style.backgroundColor = getRandomColor();
  balloon.style.setProperty('--balloon-dimesion', `${size}rem`);
}

function generateBalloons() {
  for (let index = 0; index < QTY_BALLOONS; index++) {
    const element = document.createElement('div');
    element.className = 'balloon';
    document.body.appendChild(element);
    releaseBalloon(element);
  }
}

generateBalloons();

/*
 * Code adapted from https://codepen.io/ksenia-k/pen/YzqzdxE
 * Thank you https://codepen.io/ksenia-k by your amazing code!
 */
const CANVAS_COLORS = [
  { front: '#3B870A', back: '#235106' },
  { front: '#B96300', back: '#6f3b00' },
  { front: '#E23D34', back: '#88251f' },
  { front: '#CD3168', back: '#7b1d3e' },
  { front: '#664E8B', back: '#3d2f53' },
  { front: '#394F78', back: '#222f48' },
  { front: '#008A8A', back: '#005353' }
];
const canvas = document.querySelector('canvas');
const canvasCtx = canvas.getContext('2d');
let container,
  confettiElements = [],
  clickPosition;

// params to play with
const confettiParams = {
  // number of confetti per "explosion"
  number: 70,
  // min and max size for each rectangle
  size: { x: [5, 20], y: [10, 18] },
  // power of explosion
  initSpeed: 25,
  // defines how fast particles go down after blast-off
  gravity: 0.65,
  // how wide is explosion
  drag: 0.08,
  // how slow particles are falling
  terminalVelocity: 6,
  // how fast particles are rotating around themselves
  flipSpeed: 0.017
};

// Confetti constructor
function Conf() {
  this.randomModifier = random(-1, 1);
  this.colorPair = CANVAS_COLORS[Math.floor(random(0, CANVAS_COLORS.length))];
  this.dimensions = {
    x: random(confettiParams.size.x[0], confettiParams.size.x[1]),
    y: random(confettiParams.size.y[0], confettiParams.size.y[1])
  };
  this.position = {
    x: clickPosition[0],
    y: clickPosition[1]
  };
  this.rotation = random(0, 2 * Math.PI);
  this.scale = { x: 1, y: 1 };
  this.velocity = {
    x: random(-confettiParams.initSpeed, confettiParams.initSpeed) * 0.4,
    y: random(-confettiParams.initSpeed, confettiParams.initSpeed)
  };
  this.flipSpeed = random(0.2, 1.5) * confettiParams.flipSpeed;

  if (this.position.y <= container.h) {
    this.velocity.y = -Math.abs(this.velocity.y);
  }

  this.terminalVelocity = random(1, 1.5) * confettiParams.terminalVelocity;

  this.update = function () {
    this.velocity.x *= 0.98;
    this.position.x += this.velocity.x;

    this.velocity.y += this.randomModifier * confettiParams.drag;
    this.velocity.y += confettiParams.gravity;
    this.velocity.y = Math.min(this.velocity.y, this.terminalVelocity);
    this.position.y += this.velocity.y;

    this.scale.y = Math.cos((this.position.y + this.randomModifier) * this.flipSpeed);
    this.color = this.scale.y > 0 ? this.colorPair.front : this.colorPair.back;
  };
}

function updateConfetti() {
  canvasCtx.clearRect(0, 0, container.w, container.h);

  confettiElements.forEach((c) => {
    c.update();
    canvasCtx.translate(c.position.x, c.position.y);
    canvasCtx.rotate(c.rotation);
    const width = c.dimensions.x * c.scale.x;
    const height = c.dimensions.y * c.scale.y;
    canvasCtx.fillStyle = c.color;
    canvasCtx.fillRect(-0.5 * width, -0.5 * height, width, height);
    canvasCtx.setTransform(1, 0, 0, 1, 0, 0);
  });

  confettiElements.forEach((c, idx) => {
    if (
      c.position.y > container.h ||
      c.position.x < -0.5 * container.x ||
      c.position.x > 1.5 * container.x
    ) {
      confettiElements.splice(idx, 1);
    }
  });
  window.requestAnimationFrame(updateConfetti);
}

function setupCanvas() {
  container = {
    w: canvas.clientWidth,
    h: canvas.clientHeight
  };
  canvas.width = container.w;
  canvas.height = container.h;
}

function addConfetti(e) {
  const canvasBox = canvas.getBoundingClientRect();
  if (e) {
    clickPosition = [e.clientX - canvasBox.left, e.clientY - canvasBox.top];
  } else {
    clickPosition = [canvasBox.width * Math.random(), canvasBox.height * Math.random()];
  }
  for (let i = 0; i < confettiParams.number; i++) {
    confettiElements.push(new Conf());
  }
}

function confettiLoop() {
  addConfetti();
  setTimeout(confettiLoop, 700 + Math.random() * 1700);
}

function hideConfetti() {
  confettiElements = [];
  window.cancelAnimationFrame(updateConfetti);
}

setupCanvas();
updateConfetti();
confettiLoop();

canvas.addEventListener('click', addConfetti);
window.addEventListener('resize', () => {
  setupCanvas();
  hideConfetti();
});
