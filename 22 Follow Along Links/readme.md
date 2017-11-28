# Follow Along Links

In this project we built navigation highlighter that keeps track of our mouse and when it overs over any links, it transitions a highlight span on it.

### Notes

#### Methods

* getBoundingClientRect(): This is the star of the show, this method returns the size of an element and it's position relative to the viewport.

#### Logic

1. get all the triggers: so everything on our page that when overed over will create the navigation pill effect

```javascript
const triggers = document.querySelectorAll('a');
```
2. then we need to create the highlight span that will cover our links.

```javascript
  //create a span
  const highlight = document.createElement('span');
  //add a class of 'highlight' to the element
  highlight.classList.add('highlight');
 // put it into the dom
 document.body.append(highlight);
```
3. Now we need to listen to somoene 'hovering over a link' and create the highlightLink callback function

```javascript
function highlightLink() {
      console.log('Highlight!!');
    }
   triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));

```

4. now when we hover over an element on our page we need to figure out how big and where that element is: so width, height, x and y. We'll do this through getBoundingClientRect()
```javascript
function highlightLink() {
      const linkCoords = this.getBoundingClientRect();
      //4a now that we have those coordinates we can now apply the styling on our highlights
      highlight.style.height = `${linkCoords.height}px`;
      highlight.style.width = `${linkCoords.width}px`;
      //4b with js we are going to animate the left and the top value and make their values dynamic. top and left because of the flow of our mouse on navigation links.
      highlight.style.transform =`translate(${linkCoords.left}px, ${LinkCoords.top}px)`;
    }
 ```
 5. Fix the positioning offset of highlights caused by scrolling
 ```javascript
 function highlightLink() {
      const linkCoords = this.getBoundingClientRect();
      //5 now we run into an issue where when we scroll down the page and hover the links the highlights are off by the amount of the scroll.
      // to compensate for that we take how far we've scrolled down and add it to the value the hightlight's top and left positioning value. 
      //Hence why we need to define a new coords constant with the new adjusted values.
      const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left  window.scrollX
      }
      
      highlight.style.height = `${coords.height}px`;
      highlight.style.width = `${coords.width}px`;
      highlight.style.transform =`translate(${coords.left}px, ${coords.top}px)`;
    }
 ```
 
    
