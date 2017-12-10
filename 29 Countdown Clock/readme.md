# Countdown Clock

In this project we learned how to build a countdown clock, that can be set to different preset times, or any specific time we want. This is pretty much a Pomodoro clock.

### Notes

#### `Date.now()` and time stamps.

Initially `Date.now()` will return the number of milliseconds the has elapsed since 01/01/1970. To turn it into a date object and get the current time in the format of weekday + day of the month + local time we can do so with `new Date()`.

So using that object we can apply various JavaScript date methods to get specific pieces of the time data such as just the day, month, or year.

```javascript
const end = new.Date();
const day = end.getDay();
const hour = end.getMonth();
const month = end.getFullYear();
```
#### setInterval() and clearInterval()

The `setInterval` method allows us to enable a function or some code snippet to be run every so often. So in hour example we  set up a constant `countdown` that holds the `setInterval` method that will run a function substracting seconds off of the minutes we want to countdown to, every 1000 milliseconds (1000 msecs = 1 sec).

```javascript  
const now = Date.now();
const then = now + seconds * 1000;

countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
}, 1000);
```

In order to clear the countdown constant by stoping the method running via `setInterval`, you need to clear it with `clearInterval()`. Otherwise if you try to run this method whilst it's already running (thorugh another function call), they will both run, thus displaying overlapping countdowns. 

```javascript
function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it!
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

```

