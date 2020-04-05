

/* Play-Pause user-story 1 */
function togglePlay() {

    const method = video.paused ? 'play' : 'pause';
    video[method]();
}
function updateButton() {

    const icon = this.paused ? '>' : '| |';
    console.log(icon);
    toggle.textContent = icon;
}
//Skip user-story 2 
function skip() {
    // debugger;
    video.currentTime += parseFloat(this.dataset.skip);
}

// 4. User Story: Video Bar
function handleProgress() {
    // debugger;
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

// 5. User Story: Video Bar Jump and Drag
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;

    logCurrent('Video bar updated..');
}

function logCurrent (message){
    log.push(
        {
            current: message,
        }
    );
    console.log(message);
}