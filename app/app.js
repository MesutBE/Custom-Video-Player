

/* Play-Pause user-story 1 */
function togglePlay() {

    const method = video.paused ? 'play' : 'pause';
    video[method]();
}
function updateButton() {

    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
}
//Skip user-story 2 
function skip() {
    debugger;
    video.currentTime += parseFloat(this.dataset.skip);
}