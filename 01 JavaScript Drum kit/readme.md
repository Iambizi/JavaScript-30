# JavaScript Drum Kit
Drum kit that associates 9 specific keyboard keys to 9 specific drum kit sounds.

## Notes
We make use of 2 new HTML 5 concepts:
* *The data-* attributes gives us the ability to embed custom data attributes to any HTML element. Each ```div.key``` and ```audio``` have a data attribute that binds them together
* The audio tag defines sounds, such as music or other audio streams.

**Events**: 
* 'Keypress':event that listens for the user to press a key.
* 'transitionend': event that listens for the end of css transition.

**Methods**: 
* ```.play()```
* ```.remove()```
* ```.querySelector()```

**Properties**
* ```.classList```:simpky adds classes like you would in jQuery with key.addclass.
* ```.propertyName```:returns the name of the CSS property associated with the transition, when a transitionevent occurs. 

**objects**: 
* ```window```

#### Logic:
```
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend',removeTransition));
  window.addEventListener('keydown',playSound);
```
The user presses a key, and event listener is attached to each key (listening for 'keydown' or 'transitionend'), and runs one of 2 functions (```playsound()``` and ```removeTransition()``` ) when the given event  is fired. 


```function playSound (e){
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
   console.log(audio);
   if (!audio) return 
   audio.currentTime=0; 
   audio.play();
   console.log(key);
   key.classList.add('playing');
 }
 
  function removeTransition(e) {
    if(e.propertyName !== 'transform') return // skip it if it's not transform.
    console.log(e.propertyName);
    this.classList.remove('playing');
  }```
  
