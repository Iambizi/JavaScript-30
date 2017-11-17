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
### ParseFloat

```javascript
 //Upon using the split() method we are are still getting back strings, so well also need to map the units and pass a parseFloat function that will run the function against every item in the array and thats going to return to us an actual array of numbers as opposed to array of strings when we only used split()
  const [min,secs] = timeCode.split(':').map(parseFloat);
  return (min * 60 ) + secs;
  console.log(min,secs)
})
```
