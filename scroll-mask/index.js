const FRAMES = 17;
const scrollHeight = document.querySelector('.scroll').offsetHeight;
const cover = document.getElementById('cover');
const bgSection = document.querySelector('.bg-section');
const step = ((scrollHeight - window.innerHeight) / FRAMES).toFixed(2);

/* From http://jsfiddle.net/t2L274ty/1/ */
function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

window.addEventListener('scroll', () => {
  if (!checkVisible(bgSection)) {
    const scrollStep = parseInt(window.scrollY / step);
    const maskPosition = ((100 / FRAMES) * scrollStep).toFixed(2);
    cover.setAttribute(
      'style',
      `mask-position: ${maskPosition}% 50%; -webkit-mask-position: ${maskPosition}% 50%`
    );
  }
});
