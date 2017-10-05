# Array Cardio Day 2

In this challenge were are learning more new array methods.

* `.some()`: this method tests whether at least one element in the array passes the test implemented by the provided function. 
It returns `true` if the callback function returns a truthy value for every array element; otherwise, `false`.

```javascript
const isAdult = people.some(person=>{
      const currentYear = (new Date()).getFullYear();
      return currentYear - person.year <=19;
  });
```

* `.every()`: this method tests whether all elements in the array pass the test implemented by the provided function. 
It returns `true` if the callback function returns a truthy value for every array element; otherwise, `false`.
```javascript
const overAdult = people.every(personOlder => {
      const currentYear = (new Date()).getFullYear();
      return currentYear - personOlder.year <=19;
    });
```

* `.find()`: Find is like filter, but instead returns just the one you are looking for. This method returns a value in the typed array, if an element satisfies the provided testing function. Otherwise undefined is returned.
```javascript
const comment = comments.find(function comment() {
  if (comment.id === 823423) {
    return true;
  }
});
```
or the refactored version: 
```javascript
const comment = comments.find(comment => comment.id === 823423);
```
* `findIndex()`: this method returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
```javascript
const index = comments.findIndex(comment => comment.id === 223423);
```    
