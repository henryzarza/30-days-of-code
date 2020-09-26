const leftRock = document.getElementById('left-rock');
const rightRock = document.getElementById('right-rock');
const title = document.getElementById('title');

window.addEventListener('scroll', () => {
  const { scrollY } = window;
  leftRock.style.transform = `translateX(${scrollY * -0.9}px)`;
  rightRock.style.transform = `translateX(${scrollY * 1.5}px)`;
  title.style.transform = `translate3d(${scrollY * 0.5}px, ${scrollY * -0.8}px, 0)`;
});
