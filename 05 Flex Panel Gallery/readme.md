# Flex Panel Gallery

Making use of flexbox, we are building a panel effect with elements that grow and display headings, and subheadings as you click on them.

#### Logic
We have a 'panels' constant that holds all of the divs with the class 'panel'.So wit the `forEach` method we just want to loop over each 'panel', and listen for 2 events: a click event, after which we run the function ```toggleOpen```, and a ```transitionend``` event. 

IMPORTANT TO NOTE: on both events, the function that we want to run are only being referenced hence written `toggleOpen` as opposed to `toggleOpen()` cause we only want them to run upon hearing the event, and not for it to run once the page is loaded.

```javascript 
 panels.forEach(panel => panel.addEventListener('click', toggleOpen));
 panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
```  
`toggleOpen()` simply adds a class of 'open' to the panel and toggles the element with the specific css properties of the 'open' class.
```javascript
function toggleOpen() {
    this.classList.toggle('open');
  }
```
Since there are going to be mutliple transitionend events being fired, we run a simple console.log() to find out wich properties we explicitly want to target. 
```javascript
function toggleActive(e){
      console.log(e.propertyName);
      if (e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
      }
```

