# CSS Text Shadow Mouse Move Effect

In this cool little project we learn about `mousemove` events. We have some text and when you mouve your cursor on said text some colorfull text shadow effects follow you're cursor around. 

## notes

### Destructuring Objects

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
so we can go from :
```javascript
 const width = hero.offsetWidth;
 const height = hero.offsetHeight;
```
to this 
```javascript
  const {offsetWidth: width, offsetHeight: height } = hero;

```
 another example where we used it in the challenge: 
 
 ```javascript
 e.offsetX and e.offsetY 
 //was turned into
 let {offsetX: x, offsetY: y} = e;
 ```

## Logic

1 select hero text
```javscript
const hero = document.querySelector('.hero');
```

2 listen for mousemove then run shadow
```javascript
hero.addEventListener('mousemove',shadow);
```

3 Now Inside our shadow function: Get the width and height of what we are hovering on: our hero variable.
```javascript
const {offsetWidth: width, offsetHeight: height } = hero;
```

4 Fix little issue: eventhought we are listening for the mousemove on the hero element, if this element has nested elements it will also give us the x and y of the child element aswell. so we need to do some normalization to modify x and y values to make em consistent all accross the board.

```javascript
  if(this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offSetTop;
  }
```
5 Set a `walk` constant which essentially determines how far the text shadow will go and how many pixels at it's most it should be stretched to.
```javscript
const walk = 200;
```
6 set the color styling and the positioning of the x and y walks
 ```javascript
 text.style.textShadow = `
 ${xWalk}px ${yWalk}px 0 rgba(225,0,255,0.7),
 ${xWalk * - 1}px ${yWalk}px 0 rgba(0,255,255,0.7),
 ${yWalk}px ${xWalk * - 1}px 0 rgba(0,255,0,0.7),
 ${yWalk * - 1}px ${xWalk}px 0 rgba(0,0,255,0.7)
 `;
 ```
