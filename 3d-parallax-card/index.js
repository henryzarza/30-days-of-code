const SPEED = 20;
const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  const xCoordinate = card.offsetLeft + card.clientWidth / 2;
  const yCoordinate = card.offsetTop + card.clientHeight / 2;

  card.addEventListener('mousemove', (e) => {
    const { x, y } = e;
    const angleX = ((x - xCoordinate) * -0.01 * SPEED).toFixed(2);
    const angleY = ((y - yCoordinate) * 0.01 * SPEED).toFixed(2);

    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  });
});
