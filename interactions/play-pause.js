
// debugger;
const player = document.querySelector('.player');
const toggle = player.querySelector('.toggle');
const video = player.querySelector('.viewer');

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);