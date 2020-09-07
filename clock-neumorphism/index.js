const DEG = 6;
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const dHour = document.querySelector('#dig-hour');
const dMinute = document.querySelector('#dig-minute');
const dSecond = document.querySelector('#dig-second');
const input = document.querySelector('#theme');
const mainContent = document.querySelector('.main-content');

setInterval(() => {
  const date = new Date();
  const hh = date.getHours() * 30;
  const mm = date.getMinutes() * DEG;
  const ss = date.getSeconds() * DEG;

  // Digital
  dMinute.textContent = date.getHours().toString().padStart(2, '0');
  dMinute.textContent = date.getMinutes().toString().padStart(2, '0');
  dSecond.textContent = date.getSeconds().toString().padStart(2, '0');

  // Analog
  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  minute.style.transform = `rotateZ(${mm}deg)`;
  second.style.transform = `rotateZ(${ss}deg)`;
}, 1000);

input.addEventListener('change', () => {
  mainContent.classList.toggle('light');
});
