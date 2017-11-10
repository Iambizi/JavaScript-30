# Local Storage and Event Delegation

In this project we built a little web app that allow us to add dishes to of meals we want prepared at a restaurant. With the help of local storage we will prevent the page from submitting and refreshing by default and store data in the browser.

# Local Storage

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
