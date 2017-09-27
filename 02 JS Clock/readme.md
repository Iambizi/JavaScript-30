# JS Clock

## Notes

**Methods**:
* ```.getSeconds()```
* ```.getMinutes()```
* ```.getHours()```
* ```.setInterval(function, milliseconds)```: This method calls a function or evaluates an expression at specified intervals (in milliseconds).The method will continue calling the function until clearInterval() is called, or the window is closed.

**Objects**
* ```.style```: represents an individual style element. We use it to style properties of an existing element, in our project we used it to style the clocks hands ```secondHand.style.transform = `rotate(${secondDegrees}deg)`; ``` which in css is basically  ```transform:rotate(5deg)```for example.

#### Logic: 
A set interval method holds and calls the function ```setDate()``` at 1 sec interval.

The setdate() function manipulate each ```hand``` variable associated with its respected unit of time (```secondHand```, ```minHand```, ```hourHand```) to have it's styling modified, to rotate according to that specific time unit.

```javascript
//seconds
    const secondHand = document.querySelector('.second-hand');
    function setDate(){
      const now = new Date();
      const seconds = now.getSeconds();
      const secondDegrees = ((seconds/60)*360) + 90;
      secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    //minutes
      const minHand = document.querySelector('.min-hand');
      const minutes = now.getMinutes();
      const minDegrees = ((minutes/60)*360) + 90;
      minHand.style.transform = `rotate(${minDegrees}deg)`;
    //hour
      const hourHand = document.querySelector('.hour-hand');
      const hours = now.getHours();
      const hourDegrees = ((hours/60)*360 + 90);
      minHand.style.transform = `rotate(${hourDegrees}deg)`;
    }
    setInterval(setDate,1000);
```

