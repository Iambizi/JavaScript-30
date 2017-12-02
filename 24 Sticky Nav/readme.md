# Sticky Nav

In this project we built a sticky navigation with some javascript, and include a logo scroll out (hot shot tingss)

### Notes

When an element's position gets changed to `fixed`, this element no longer takes space in the DOM, which is what happened with our nav. As a result the the elements below it would take advantage of that new space. 

The way we went about fixing this is by programmatically setting a value for some padding to occupy that new found space. We could have hard coded a fixed padding value in css but it wouldn't have been able to adapt to further page modifications.

```javascript
document.body.style.paddingTop = nav.offsetHeight + 'px';
// or 
document.body.style.paddinTop = `${nav.offsetHeight}px`;
```

#### Properties 

* OffsetTop

* scrollY

### Logic 

In Our `fixNav` function we figure out where the top of the nav bar is (ex 500px from the top), and as soon as we hit 501 px by scrolling down the top of the screen, signal the navbar to fix itself.

```javascript
function fixNav() {
  console.log(topOfNav,window.scrollY);// logs topOfNav aswell as how many pixels down weve scrolled from the top(number of pixels weve scrolled down our window). When topOfNav = window.scrollY thats when we want to make our nav fixed
    if(window.scrollY >= topOfNav){
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      document.body.classList.add('fixed-nav'); // then add the a position:fixed property in css
    }
    // fixes the offset as result of the nav no longer taking in space when it becomes fixed. As result of the nav no longer occupying space in the rest of the page below the nav decides to occupy that space
    else{
      document.body.style.paddingTop =  0;
      document.body.classList.remove('fixed-nav');
    }
}
```

