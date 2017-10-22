# Slide in on scroll 

In this project we built a slide in on scroll, when we slide down along a page, images will slide themselves in from the left or right side.

Properties: 

The following properties are associated with the `window` object.

* `window.scrollY`: This read-only property of the Window interface returns the number of pixels that the document is currently scrolled vertically. So in our case this tells how far we are from the top of our browser as we slide down the page.

* `window.innerHeight`: returns Height (in pixels) of the browser window viewport.

### Logic:

* debouncing:

debounce controls the ammount of times a function runs over a certain amount of time, so here we need to run debounce only once every 20 mili secs so performance doesnt suffer from always calling checkSlide when we scroll through the page. The reason we need all of this is because of scroll events fired. Because scrolling through a page is something we always do we need to limit the amount of time our function is called. ALWAYS debounce functions with scroll events.

```javascript
function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }
  ```  
  
  
  Essentially we need to loop through each images and figure out their positioning relative to the page and make some calculations so as to gradually show images as we gradually scroll them into .
  
  ```javascript
  sliderImages.forEach(sliderImage =>{


        const slideInAt = (window.scrollY + innerHeight) - sliderImage.height / 2;
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;

        const isNotScrolledPast = window.scrollY < imageBottom;
  ```
