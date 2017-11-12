# Local Storage and Event Delegation

In this project we built a little web app that allow us to add dishes to of meals we want prepared at a restaurant. With the help of local storage we will prevent the page from submitting and refreshing by default and store data in the browser.

### Local Storage

Browser have the ability to store local data for individual webpages and browsers. The data is stored as a string that can be parsed into javascript objects. You can get and set items from `localStorage`.
`JSON.stringify()` here is necessary to convert it to a string of the object's key value pairs.

```javascript
localStorage.setItem('items', JSON.stringify(items));
```
The following example shows how to utilise data and add it to a variable for use between browser reloads, it allows your page to have continuity based on existing user behaviour.

```javascript
const items = JSON.parse(localStorage.getItem('items')); 
// Here, the 'items' refer to the string interpretation of the object, whilst JSON.parse converts the string back to a javascript object, ready for use.
```
### Event Delegation

Event delegation allows us to attach a single event listener, to a parent element, that will fire for all descendants matching a selector, whether those descendants exist now or are added in the future. A parent element delegates instruction to its child elements

```javascript
itemsList.addEventListener('click', toggleDone);
function toggleDone(e){
    //Example of an event delegation, we listen for a click on the unordered list parent element `itemsList` with class of plates and then when somoene clicks, execute toggleDone.
    if(!e.target.matches('input')) return; 
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    console.log(e.target);
  }
```
### Clear button challenge
 The following bit of code is how i added an uncheck button to clear all the checks on each input at once: 
 
 ```javascript
 const uncheck = document.querySelector('.uncheck');
 
 function removeAllChecks() {
   const check=document.getElementsByTagName('input');
   for(var i=0;i<check.length;i++)
     {
      if(check[i].type=='checkbox')
      {
       check[i].checked= false;
     }
   }
}

uncheck.addEventListener('click',removeAllChecks);
 ```
 
