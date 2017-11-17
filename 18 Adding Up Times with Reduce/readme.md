# Adding up times with reduce

In this project we are making use of the `reduce()` method to allow us to add up the total amount of minutes,seconds and hours of a list of videos.

### Notes

There were 2 ways this could have been solved 

With `map()` and `reduce()` :

```javascript
    const timeAttributes = Array.from(document.querySelectorAll('[data-time]'));

    const totalSeconds = timeAttributes
        .map(node => node.dataset.time)
        .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        return mins * 60 + secs;
        })
        .reduce((a, b) => a + b);
```
or with `reduce()` only: 

```javascript
const timeAttributes = Array.from(document.querySelectorAll('[data-time]'));

    const totalSeconds = timeAttributes
        .reduce((a, b) => {
            b = b.dataset.time.split(':').map(parseFloat);
            return a + b[0]*60 + b[1];
        }, 0);
```
### Logic

```javascript
//1 select all nods that specifically have the data-time attribute
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
// 2 to be able to use the map method which is only used on array we would need to convert our timeNodes constant into an array first. Hence why we use Array.from
const seconds = timeNodes
  .map(node => node.dataset.time)
//now we need to turn them into seconds
  .map(timeCode=> {
  // well use es6 destructuring. Upon using the split() method we are are still getting back strings, so well also need to map the units and pass a parseFloat function that will run the function against every item in the array and thats going to return to us an actual array of numbers as opposed to array of strings when we only used split()
  const [min,secs] = timeCode.split(':').map(parseFloat);
  return (min * 60 ) + secs;
  console.log(min,secs)
})
//3 now we use the reduce() to add up all the seconds from each videos.
.reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds
//3600 is the amount of seconds in an hour. We needed to floor the operations so that we only get whole seconds exampl 73/60 = 1.21666 we only want whole seconds so well get 1
const hours = Math.floor(secondsLeft / 3600);
//mod (%) gives us how many items are left after the've been evenly distributed.
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

 console.log(hours, mins, secondsLeft);
```
