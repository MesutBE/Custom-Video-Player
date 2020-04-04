

/* Build out functions */
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
