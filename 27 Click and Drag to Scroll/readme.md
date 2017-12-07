# Click and Drag to Scroll

In this project we built a replica of a grab and scroll effect.

### Notes

#### flag variables

Is a variable you define to have one value until some condition is true, in which case you change the variable's value.  It is a variable you can use to control the flow of a function or statement, allowing you to check for certain conditions while your function progresses.

```javascript
let isDown = false;

isDown = true;
```

#### pageX and offsetLeft

* `pageX` : is a mouse event property that allows us to output the coordinates of a mouse pointer when it is clicked.

```javascript
event.pageX
```

* `offsetLeft`: We already found out where the cursor was when we clicked down with `pageX`, now we want to know where it was when we moved it.Using `offsetLeft` we can recalculate every single time that we moved the mouse.


```javascript
startX = e.pageX - slider.offsetLeft;
```
### Logic

Selecting the numbers sliders within white box, then listen to a mainly four events: mousedown, mouseleave, mouseout, and mousemove. Then execute a callback function for each. 

