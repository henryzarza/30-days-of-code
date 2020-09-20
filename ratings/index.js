const MAX_RATING = 5;
const stars = document.querySelector('.stars');
const rangeStars = document.querySelector('[name="stars"]');
const starsText = document.querySelector('#star-text');
const hearts = document.querySelector('.hearts');
const rangeHearts = document.querySelector('[name="hearts"]');
const heartsText = document.querySelector('#heart-text');
const cars = document.querySelector('.cars');
const rangeCars = document.querySelector('[name="cars"]');
const carText = document.querySelector('#car-text');

rangeStars.addEventListener('input', (e) => fill(e.target.value, stars, starsText));

rangeHearts.addEventListener('input', (e) => fill(e.target.value, hearts, heartsText));

rangeCars.addEventListener('input', (e) => fill(e.target.value, cars, carText));

function fill(rating, ele, textEl) {
  const width = (rating / MAX_RATING).toFixed(2);
  textEl.textContent = rating;
  ele.style.setProperty('--width-rating', width);
}
