// Heart
const heartButton = document.querySelector('#heart');
const heartIcon = heartButton.querySelector('i');

const heartCircle = new mojs.Shape({
  left: 0,
  top: 0,
  stroke: '#FF9C00',
  strokeWidth: { [2 * 35]: 0 },
  fill: 'none',
  scale: { 0: 1 },
  radius: 50,
  duration: 400,
  easing: 'cubic.out'
});

const heartBurst = new mojs.Burst({
  left: 0,
  top: 0,
  radius: { 4: 50 },
  angle: 45,
  count: 14,
  timeline: { delay: 300 },
  children: {
    radius: 2.5,
    fill: '#FD7932',
    scale: { 1: 0, easing: 'quad.in' },
    pathScale: [0.8, null],
    degreeShift: [13, null],
    duration: [500, 700],
    easing: 'quint.out'
  }
});

const tweenBtn = new mojs.Tween({
  duration: 2000,
  onUpdate: function (progress) {
    if (progress > 0.3) {
      const elasticOutProgress = mojs.easing.elastic.out(1.43 * progress - 0.43);
      heartIcon.style.transform = `scale3d(${elasticOutProgress}, ${elasticOutProgress}, 1)`;
    } else {
      heartIcon.style.transform = 'scale3d(0, 0, 1)';
      heartIcon.style.color = '#E5214A';
    }
  }
});

heartButton.addEventListener('click', function () {
  const { x, y } = heartButton.getBoundingClientRect();
  const coords = { x: x + 24, y: y + 22 };
  heartBurst.tune(coords).replay();
  heartCircle.tune(coords).replay();
  tweenBtn.replay();
});

// Thumb
const thumbButton = document.querySelector('#thumb');
const thumbIcon = thumbButton.querySelector('i');

const thumbBurst = new mojs.Burst({
  left: 0,
  top: 0,
  count: 20,
  radius: { 40: 110 },
  children: {
    shape: 'line',
    radius: { 12: 0 },
    scale: 1,
    stroke: '#988ADE',
    strokeWidth: 2,
    duration: 1500,
    easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
  }
});

const thumbCircle = new mojs.Shape({
  left: 0,
  top: 0,
  stroke: '#988ADE',
  strokeWidth: { 30: 0 },
  fill: 'none',
  scale: { 0: 1 },
  radius: { 10: 60 },
  opacity: 0.6,
  duration: 750,
  easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
});

const thumbTween = new mojs.Tween({
  duration: 800,
  easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
  onUpdate: function (progress) {
    thumbIcon.style.transform = `scale3d(${progress}, ${progress}, 1)`;
    thumbIcon.style.color = '#988ADE';
  }
});

thumbButton.addEventListener('click', function () {
  const { x, y } = thumbButton.getBoundingClientRect();
  const coords = { x: x + 25, y: y + 30 };
  thumbBurst.tune(coords).replay();
  thumbCircle.tune(coords).replay();
  thumbTween.replay();
});

// Star
const starButton = document.querySelector('#star');
const starIcon = starButton.querySelector('i');

const starBurst = new mojs.Burst({
  left: 0,
  top: 0,
  count: 18,
  radius: { 90: 150 },
  children: {
    fill: '#FF9C00',
    opacity: 0.6,
    scale: 1,
    radius: { 'rand(5,20)': 0 },
    swirlSize: 15,
    direction: [1, 1, -1, -1, 1, 1, -1, -1, -1],
    duration: 1200,
    delay: 200,
    easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
    isSwirl: true
  }
});

const starShape1 = new mojs.Shape({
  left: 0,
  top: 0,
  radius: { 30: 100 },
  fill: 'transparent',
  stroke: '#FF9C00',
  strokeWidth: { 30: 0 },
  opacity: 0.6,
  duration: 1500,
  easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
});

const starShape2 = new mojs.Shape({
  left: 0,
  top: 0,
  radius: { 30: 80 },
  fill: 'transparent',
  stroke: '#FF9C00',
  strokeWidth: { 20: 0 },
  opacity: 0.3,
  duration: 1600,
  delay: 320,
  easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
});

const starTween = new mojs.Tween({
  duration: 300,
  onUpdate: function (progress) {
    starIcon.style.transform = `scale3d(${progress}, ${progress}, 1)`;
    starIcon.style.color = '#FF9C00';
  }
});

starButton.addEventListener('click', function () {
  const { x, y } = starButton.getBoundingClientRect();
  const coords = { x: x + 28, y: y + 28 };
  starBurst.tune(coords).replay();
  starShape1.tune(coords).replay();
  starShape2.tune(coords).replay();
  starTween.replay();
});

// Holding Heart
const holdingHeartButton = document.querySelector('#holdingHeart');
const holdingIcon = holdingHeartButton.querySelector('i');

const holdingHeartBurst = new mojs.Burst({
  left: 0,
  top: 0,
  count: 15,
  radius: { 20: 80 },
  angle: { 0: 140, easing: mojs.easing.bezier(0.1, 1, 0.3, 1) },
  children: {
    fill: '#349aef',
    radius: 20,
    opacity: 0.6,
    duration: 1500,
    easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
  }
});

const holdingHeartTween = new mojs.Tween({
  duration: 800,
  easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
  onUpdate: function (progress) {
    holdingIcon.style.transform = `scale3d(${progress}, ${progress}, 1)`;
    holdingIcon.style.color = '#349aef';
  }
});

holdingHeartButton.addEventListener('click', function () {
  const { x, y } = holdingHeartButton.getBoundingClientRect();
  const coords = { x: x + 24, y: y + 32 };
  holdingHeartBurst.tune(coords).replay();
  holdingHeartTween.replay();
});
