# Sort Without articles.

In this project using the sort method we built a list of bands organized by alphabetical order. With the help of regular expressions we made sure the articles infront of the band were not taken into account when the names were sorted.

## Logic 

1 We create this function that allow us to filter the array items and replace any articles 'an', 'a','the' with an empty string
```javascript
function noArticles (bandName){
  return bandName.replace(/^(a|the|an)\s/,'');
}
```

2 We then sort our array items alphabetically and since we've created our noArticles function it will remove the articles when sorting the array content alphabetically.

```javascript 
const sortedBands = bands.sort(function(a,b){
     if(noArticles(a)>noArticles(b)) {
       return 1;
     } else {
       return -1;
     }
 });
 
 // simplified es6 script
const sortedBands = bands.sort((a,b) => noArticles(a)>noArticles(b) ? 1: -1);
```
3 We render our band names in a list, alphabetically.

```javascript
//select the unordered list in our html with the 'bands' id
document.querySelector('#bands').innerHTML =
sortedBands
// then with the help of map() we loop through each item in bands and render each item as list item in our unordered list. 
.map(band => `<li>${band}</li>`)
//we'll need to use the join() method because our map() will return an array that separates each items with a comma. join() will do away with them.
.join('')
```
