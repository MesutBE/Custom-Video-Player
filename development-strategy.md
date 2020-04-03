# Custom-Video-Player: development strategy

Building this site one step at a time

## 0. Setup

* Create `development-strategy.md`
* Create `index.html`
- Create `style.css`
- Create `log.js`
- Create `handlers/handlers.js`
- Create `interactions/interactions.js`
- Create `view/styles.js`

## 1. User Story: Play/Pause
 
 __A user can start playing a video.__
 
### DOM 
 * Create a video element.
 * Create a play/pause button.
 
### Style
 * Create necessary styles.
 
### Handlers
 * Create a function that can starts video playing.
 * Create a function that updates the play/pause button.
 
### Listeners
 * Create a listener to listen `click`, `play` and `pause` events of video element.
 * Create a listener to listen `click` event of `toggle` element.

 ### Log

 * 
 
## 2. User Story: Skip

__A user can upward/forward the video. __

### DOM 
* Create two skip buttons which user can skip video 10 or 25 seconds.

### Style
 * Create necessary styles.
 
### Handlers
* Create a skip function.

### Listeners
* Create a listener to listen `click` event of `skip buttons`.

 ### Log

 * 

## 3. User Story: Range Sliders

__A user can slowdown/speedup the playing video, and volume up/down.__

### DOM 
* Create two `input` elements which type of `range`.

### Style
 * Create necessary styles.
 
### Handlers
* Create a function that handles range updates.

### Listeners
* Create a listener to listen `change` event of `ranges` element.
* Create a listener to listen `mousemove` event of `ranges` element.

 ### Log

 * 
 
## 4. User Story: Video Bar

__A user can see the progress bar for video.__

### DOM 
* Create `div` elements for `progress bar` which type of `range`.

### Handlers
* Create a function that handles the progress percentage.

### Listeners
* Create a listener to listen `timeupdate` event of `video` element.

 ### Log

 * 
 
## 5. User Story: Video Bar Jump and Drag

__A user can click and drag on video bar and watch the video beginning chosen time.__

### DOM 
* Update necessary classes for style.

### Handlers
* Create a function that updates the progress percentage by user click.

### Listeners
* Create a listener to listen `click` event of `progress` element.
* Create a listener to listen `mousemove` event of `progress` element.

 ### Log

 * 
 