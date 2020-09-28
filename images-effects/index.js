// Section 1
const section1 = document.getElementById('section-1');
const layer = document.getElementById('layer');

section1.addEventListener('mousemove', function (e) {
  layer.style.left = `${e.clientX}px`;
});

// Section 2
const section2 = document.getElementById('section-2');
const BACKGROUNDS = [
  'https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2114&q=80',
  'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2110&q=80',
  'https://images.unsplash.com/photo-1482784160316-6eb046863ece?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
];
var currentIndex = 0;

section2.addEventListener('click', function () {
  currentIndex = currentIndex + 1 >= BACKGROUNDS.length ? 0 : currentIndex + 1;
  section2.style.setProperty('--bg', `url(${BACKGROUNDS[currentIndex]})`);
});

// Section 3
const imgShape = document.getElementById('img-shape');
const section3 = document.getElementById('section-3');
const BACKGROUNDS_SHAPE = [
  'https://res.cloudinary.com/henryzarza/image/upload/v1601324298/General%20assets/text_eun3bp.jpg',
  'https://res.cloudinary.com/henryzarza/image/upload/v1601325283/General%20assets/shape-2_tcrk41.png',
  'https://res.cloudinary.com/henryzarza/image/upload/v1601325284/General%20assets/shape-1_nbxded.jpg',
  'https://res.cloudinary.com/henryzarza/image/upload/v1601325283/General%20assets/shape-3_srv8ub.jpg'
];
var shapeCurrentIndex = 0;

section3.addEventListener('click', function () {
  shapeCurrentIndex = shapeCurrentIndex + 1 >= BACKGROUNDS.length ? 0 : shapeCurrentIndex + 1;
  imgShape.src = BACKGROUNDS_SHAPE[shapeCurrentIndex];
});
