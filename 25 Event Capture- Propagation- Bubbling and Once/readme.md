# Event Capture, Propagation, Bubbling and Once

In this project we learn about the concept of bubbling, the capture which is an options object  


### Notes

With bubbling, when you have elements nested within each other, if your listen for an event it will ripple all the way up to the top of the DOM.

Capture allows you to run the function on the way down, rather than on the way up (one, two, three instead of three, two, one)

#### stopPropagation(): 

stop bubbling events up, and returns only what you clicked on. 

#### `capture: true/ false`  

(3rd argument in an event listener event, callback function, options object) An options object that when set to true if your event listener listened for a click on an element it will return the 1st highest parent and stop there.

When set to false along with `e.stopPropagation()` it will return only values for the individual element you clicked on.  

#### `Once: true/ false` 

Another options object listens for an event then unbinds itself so it would be the same as saying: 

```javascript
div.removeEventListener('click', logText)
```
It will run once but stop after that one time, untill you refresh the page. 
Can be helpfull if say, you had a button, on you only wanted to be clicked once (example in the context of online store check outs) !
