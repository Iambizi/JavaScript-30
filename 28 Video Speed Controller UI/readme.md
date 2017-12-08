# Video Speed Controller UI

In this project we used `mousemove` events and html videos to create a custom speed-bar for a video's playbackRate between the range of 0.4 and 4;

### Notes

We had to do a little math to:  

* calculate the position of the our mouse inside our speed bar:
```javascript
const y = e.pageY - this.offsetTop;
```
* turn our pixel units into percents:

```javascript
const percent = y / this.offsetHeight;
```

* Calculate the `playbackRate` given that our min rate is 0.4 and the max 4 :

```javascript
const playbackRate = percent * (max - min ) + min;
```
since our min and max values start at 0.4 and end at 4 our percentage will be adjusted accordingly so for example 20% will correspond to a 1.12 rate.
