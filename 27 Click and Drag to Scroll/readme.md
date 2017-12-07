# Click and Drag to Scroll

In this project we built a replica of a grab and scroll effect.

### Logic

Selecting the items within white box, then listen a few events: (click down, add class of active), (figure out where we clicked down), mousedown, mouseleave, mouseout, and mousemove

#### flag variables

Is a variable you define to have one value until some condition is true, in which case you change the variable's value.  It is a variable you can use to control the flow of a function or statement, allowing you to check for certain conditions while your function progresses.

```javascript
let isDown = false;

isDown = true;
```

#### pageX and offsetLeft

* `pageX` is a mouse event property that allows us to output the coordinates of a mouse pointer when it is clicked.

```javascript
event.pageX
```

* `offsetLeft`we used this read only property to compensate for any added space by a margin or padding so that our `pageX` is still accurate by substraction. 

```javascript
startX = e.pageX - slider.offsetLeft;
```
