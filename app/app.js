

/* Play-Pause user-story 1 */
function togglePlay() {
    debugger;
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}
function updateButton() {
    debugger;
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
}
//Skip user-story 2 
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}