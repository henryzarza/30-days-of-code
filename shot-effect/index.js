const section = document.querySelector('section');
const audio = document.querySelector('audio');
const body = document.querySelector('body');

section.addEventListener('click', function (e) {
  const bullet = document.createElement('span');
  bullet.className = 'bullet';
  bullet.style.left = `${e.offsetX}px`;
  bullet.style.top = `${e.offsetY}px`;
  body.appendChild(bullet);
  audio.pause();
  audio.currentTime = 0;
  audio.play();
});
