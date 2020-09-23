const PLAY_LIST = [
  {
    title: 'Applause',
    cover: 'https://upload.wikimedia.org/wikipedia/en/3/39/Artpop_cover.png',
    src:
      'https://res.cloudinary.com/henryzarza/video/upload/v1600820782/General%20assets/Applause_k6d6ch.mp3',
    artist: 'Lady Gaga',
    album: 'ARTPOP'
  },
  {
    title: 'Levitating',
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Dua_Lipa_-_Future_Nostalgia_%28Official_Album_Cover%29.png/220px-Dua_Lipa_-_Future_Nostalgia_%28Official_Album_Cover%29.png',
    src:
      'https://res.cloudinary.com/henryzarza/video/upload/v1600820785/General%20assets/Levitating_ltrtpk.mp3',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia'
  },
  {
    title: 'Gimme More',
    cover: 'https://upload.wikimedia.org/wikipedia/en/7/76/Britney_Spears_-_Blackout.png',
    src:
      'https://res.cloudinary.com/henryzarza/video/upload/v1600820787/General%20assets/GimmeMore_sd5tar.mp3',
    artist: 'Britney Spears',
    album: 'Blackout'
  }
];

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
const audioElement = document.querySelector('audio');
const track = audioCtx.createMediaElementSource(audioElement);
const gainNode = audioCtx.createGain();
const playCheck = document.querySelector('#playCheck');
const iconPlay = document.querySelector('#icon-play');
const coverContainer = document.querySelector('#cover-container');
let currentIndex = 0;

playCheck.addEventListener('change', function (e) {
  const isChecked = e.target.checked;
  iconPlay.setAttribute('class', isChecked ? 'fas fa-pause' : 'fas fa-play');

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  if (isChecked) {
    audioElement.play();
    coverContainer.classList.add('active');
  } else {
    audioElement.pause();
    coverContainer.classList.remove('active');
  }
});

function startAudio() {
  audioElement.src = PLAY_LIST[currentIndex].src;
  const img = coverContainer.querySelector('img');
  img.src = PLAY_LIST[currentIndex].cover;
  img.alt = PLAY_LIST[currentIndex].title;
  document.querySelector('.title').textContent = PLAY_LIST[currentIndex].title;
  document.querySelector('.artist').textContent = PLAY_LIST[currentIndex].artist;
  document.querySelector('.album').textContent = PLAY_LIST[currentIndex].album;
  audioElement.play();
}

document.querySelectorAll('.control').forEach((el) => {
  el.addEventListener('click', function () {
    currentIndex = currentIndex + 1 >= PLAY_LIST.length ? 0 : currentIndex + 1;
    console.log('currentIndex', currentIndex);
    startAudio();
  });
});

// volume
document.querySelector('#volume').addEventListener('input', function () {
  gainNode.gain.value = this.value;
});

// panning
const panner = new StereoPannerNode(audioCtx, { pan: 0 });
document.querySelector('#panner').addEventListener('input', function () {
  panner.pan.value = this.value;
});

// connect everyting
track.connect(gainNode).connect(panner).connect(audioCtx.destination);
