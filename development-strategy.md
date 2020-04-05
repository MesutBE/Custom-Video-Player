# Custom-Video-Player: development strategy

Building this site one step at a time

## 0. Setup

* Create `development-strategy.md`
* Create `index.html`
- Create `style.css`
- Create `log.js`
- Create `app/app.js`
- Create `interactions/interactions.js`
- Create `readme.md`

## 1. User Story: Play/Pause
 
 __A user can start playing a video.__
 
### DOM 
 * Create a video element.
 * Create a play/pause button.
 
### Style
 * Create necessary styles.

### App
 * Create a function that can starts video playing.
 * Create a function that updates the play/pause button.
 
### Interactions
 * Create a listener to listen `click`, `play` and `pause` events of video element.
 * Create a listener to listen `click` event of `toggle` element.

 ### Log

 * Log current status.
 
## 2. User Story: Skip

__A user can upward/forward the video.__

### DOM 
* Create two skip buttons which user can skip video 10 or 25 seconds.

### Style
 * Create necessary styles.
 
### App
* Create a skip function.

### Interactions
* Create a listener to listen `click` event of `skip buttons`.

 ### Log

 * Log current status.

## 3. User Story: Range Sliders

__A user can slowdown/speedup the playing video, and volume up/down.__

### DOM 
* Create two `input` elements which type of `range`.

### Style
 * Create necessary styles.
 
### App
* Create a function that handles range updates.

### Interactions
* Create a listener to listen `change` event of `ranges` element.
* Create a listener to listen `mousemove` event of `ranges` element.

 ### Log

 * Log current status.
 
## 4. User Story: Video Bar

__A user can see the progress bar for video.__

### DOM 
* Create `div` elements for `progress bar` which type of `range`.

### App
* Create a function that handles the progress percentage.

### Interactions
* Create a listener to listen `timeupdate` event of `video` element.
 
## 5. User Story: Video Bar Jump and Drag

__A user can click and drag on video bar and watch the video beginning chosen time.__

### DOM 
* Update necessary classes for style.

### App
* Create a function that updates the progress percentage by user click.

### Interactions
* Create a listener to listen `click` event of `progress` element.
* Create a listener to listen `mousemove` event of `progress` element.

 ### Log

 * Log current status.
 
 ## 6. Complete Readme

 * Complete `readme` file that gives information to the users about the project.