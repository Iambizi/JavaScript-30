# Stripe Follow Along Dropdown

### Notes

In this project we recreated Stripe payment's fluid navigation follow along dropdowns. 

#### getBoundingClientRect() adjustments

In this project we had to take into account the fact that our navigation might not always be at the top of the viewport. Other Elements such as a Title could offset the positioning of our constants with the `getBoundingClientRect()`. Hence we had to first get the `getBoundingClientRect()` information for our nav and use that set the values for our dropdowns' top and left coordinates, so that would adapt to any changes in our nav's positioning. 

```javascript
const navCoords = nav.getBoundingClientRect();
const dropdownCoords = dropdown.getBoundingClientRect();

const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
};
```

#### CSS > Selector

Wes used this in our triggers constant, it helps us match an elements direct children element, in this context it means we want to select 
all the `li` items descending from any elements with the class of `cool`
```javascript
const triggers = document.querySelectorAll('.cool > li');
```
### Logic 

Basically we have some dropdowns that are hidden with some css properties and we set event listeners that listen for the `mouseenter` event and for the `mouseleave` event, calling `handleEnter()` and `handleLeave()` functions respectively which will on one hand display, style, situate the dropdowns relative the appropriate nav link and hide them on the other hand.
