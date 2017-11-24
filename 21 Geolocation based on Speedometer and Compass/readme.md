# Geolocation Based on Speedometer and Compass

In this project we learnt about geolocation and the information that we can obtain from it such as the heading (a compass essentially) and also the speed at which somoene would be running.

### Notes


#### Geolocation: 

This is the a property of the window location that contains information about the users location. Access to it must be enabled for it to work.

### Logic

1. Select arrow and kilometers the user is running on 

```javascript
const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');
```
2. After that we need to listen for the user's position
```javascript
navigator.geolocation.watchPosition((data)=>{
console.log(data);
});
```
3. Now we need to update the data presented on our page

```javascript
navigator.geolocation.watchPosition((data)=>{
  console.log(data);
  speed.Math.round(data.coords.speed);// we used the round method to round up data for speed to a round #KM/H
  arrow.style.transform = `rotate(${data.coords.heading}deg)`// updates direction of arrow;
});
```

4. Now that we created our success callback, our function `data` will run if someone gives you access to their geolocation data.
However we need an `err` function that will handle denied access by popping up an alert box prompting the user to enable access for the compass and speedometer to work.

```javascript
navigator.geolocation.watchPosition((data) => {
      console.log(data);
      speed.textContent = data.coords.speed;
      arrow.style.transform = `rotate(${data.coords.heading}deg)`;
    }, (err) => {
      alert('mans needs to enable access for it to work !!');
    });
```
