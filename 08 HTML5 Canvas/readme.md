# HTML 5 Canvas 
In this project we turned our browser into a canvas and use our mouse to draw multicolores lines with varying width.

## Notes

We started by setting up a context for our Canvas. 
```javascript
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
```
The width and height is 800x800 by default so we set the canvas' dimensions to be the entire window.  
```javascript
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

then we define basic properties for the way our mouse will draw on the canvas,
```javascript
ctx.strokeStyle ='#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
```
We also need to creat a couple of dummy variables that will help us with starting X and Y's and ending X and Y's positioning in order to draw the lines. Flag set to false to figure out if we should draw or if the mouse is simply moving.

```javascript
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
```
next up we need a function that will be called whenever we move our mouse on top of the canvas.

```javascript
function draw(e) {
  if (!isDrawing) return; // stop the function from runing if no mouse down
  console.log(e);
  //drawing path functionality
  ctx.strokeStyle = `hsl(${hue},100%,50%)`// functionality for continous color change
  ctx.lineWidth = hue
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  //es6 trick called destructuring an array to simplify
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;// part of continous color change functionality
  if (hue >= 360) {
    hue = 0;
  }
  // flipping direction and linewidth of cursor. We increment the linewidth from 1 to 100, but once we hit a 100 we are going back down from 100 lineWidth to 1. Hence if 100 > or < 1 flip direction.
  if (ctx.lineWidth >= 100 || ctx.linwidth <=1) {
    direction = !direction;
  }
  //So depending on that direction we either increment that lineWidth or decrement it.
  if (direction) {
    ctx.linewidth++;
  } else {
    ctx.linewidth--;
  }
}
```
**Destructuring assignment**
ES6 allows you to easily name multiple variables, via the following notation

so we can go from:
```javascript
lastX = e.offsetX
lastY = e.offsetY
```
to 

```javascript
[lastX, lastY] = [e.offsetX, e.offsetY];
```
