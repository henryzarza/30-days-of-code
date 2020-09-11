const nature = document.querySelector('#nature');
const travel = document.querySelector('#travel');

document.querySelector('#nature-btn').addEventListener('click', () => {
  nature.classList.remove('active');
  setTimeout(() => nature.classList.add('active'), 300);
});

document.querySelector('#travel-btn').addEventListener('click', () => {
  travel.classList.remove('active');
  setTimeout(() => travel.classList.add('active'), 500);
});
