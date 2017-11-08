# Array Cardio Day 1

## Notes

Practice using some array build-in methods: ```.filter()``` ```.map()``` ```.sort()``` ```.reduce()```


* ```.filter()```: creates an array filled with all array elements that pass a test (provided as a function).

```javascript
const fifteen = inventors.filter(inventor => (inventor.year >=1500 && inventor.year <1600));

```
* ```.map()```: creates a new array with the results of calling a function for every array element. Important to note it does not change the original array. In our example we are asking the array to be re-arranged by first and last name.

```javascript
const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
```
* ```.sort()```: sorts the items of an array. The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down). By default, the sort() method sorts the values as strings in alphabetical and ascending order.

```javascript
arr.sort((a, b) => a > b ? 1 : -1);
```
content will be displayed in an ascending order

```javascript
arr.sort((a, b) => a > b ? -1 : 1);
```
content will be displayed in an descending order

* ```.reduce()```: reduces the array to a single value.It executes a provided function for each value of the array (from left-to-right).
The return value of the function is stored in an accumulator (just a fancy word for total or result).

```javascript
const years = inventors.reduce((total,inventor)=> {
return total + (inventor.passed - inventor.year)},0);
```


