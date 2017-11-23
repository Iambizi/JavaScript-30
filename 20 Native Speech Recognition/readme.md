# Native speech Recognition

I this project we used native speech recognition from our browser to transcribe what we say on our page. Each them we pause our speech a new paragraph will start

### Notes 

This project also required to us to set a server due to the security restrictions on accessing the user's computer microphone, we needed to run our index.html from a secure origin ( a website that is HTTPS or in our case a local host).

#### Events:

* `result`: the event that is listened for when the microphone receives input
* `end`: when the microphone stops receiving input

#### SpeechRecognition:
`SpeechRecognition` is a global variable that lives in the browser on top of the window. This window object allows us to use our microphone for speech functionality.

```javascript
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // for firefox

const recognition = new SpeechRecognition();
```
#### Logic

1 set speech recognition on the browswe window then create other instances of that SpeechRecognition with a recognition constant
```javascript
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
// then we take this recognition constant and set the interimResults property and set it to true as you are speaking your speech is going to populate in the browser. 
//If you didnt apply the method you would have need to stop speaking before it prepopulates.
recognition.interimResults = true;
```
2 We created the functionality that build our paragraphs
```javascript
let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
  console.log(e.results);
  // in our developer tools we take the nested elements from our SpeechRecognition event and convert them into a string that we can see. //e.results needs to be converted into an array 1st so that we can use .map() on it
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')
    
    p.textContent = transcript;
    // at this point we see what we are saying in the dom but it keeps getting over written everytime we speak, because if we stop speaking transcript runs again and replaces our previous speach. So we need to check if the results are final
    if(e.results[0].isFinal){
      p = document.createElement('p');
      words.appendChild(p);
    }
    console.log(transcript);
});

```

3 We set a new event listener 'end'. When we stopped speaking and started speaking again the transcribing would stop and thats because we are listening for the 'results' event and when we stop speaking it just unbinds itself. So we need to set up another event listener for the 'end' event run recognition.start again.
```javascript
recognition.addEventListener('end',recognition.start);

recognition.start();
```
