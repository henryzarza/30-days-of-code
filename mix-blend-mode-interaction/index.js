const changeColor = document.getElementById('changeColor');
const bgColor = document.querySelector('.bg-color');

changeColor.addEventListener('input', function (e) {
  bgColor.style.setProperty('background-color', e.target.value);
});
