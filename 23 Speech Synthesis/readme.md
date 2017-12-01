# Speech Synthesis

In this project we build a speech-synthesis app making use of an API that comes in most of the browsers, the SpeechSynthesis.

## Notes

#### Events: 

* change

* voiceschanged

#### speechSynthesisUtterance : 

represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)

```javascript
const msg = new SpeechSynthesisUtterance();
//example of properties we can attach to it :

msg.pitch;
msg.rate;
msg.voice;
msg.lang;
```

#### speechSynthesis : 

is the controller interface for the speech service; this can be used to retrieve information about the synthesis voices available on the device, start and pause speech, and other commands.

The following examples show properties and methods that can be used to alter the state of the speech device :

```javascript
speechSynthesis.paused;
speechSynthesis.pending;
speechSynthesis.speaking;

speechSynthesis.cancel();
speechSynthesis.pause();
speechSynthesis.speak();
```
At times you might want to provide a parameter to a function for use in an event listener. Unfortunately, doing this by a traditional function call will result in it being run on page load.

Using an anonymous function, you can avoid this problem

```javascript
stopButton.addEventListener('click', () => toggle(false));
```

