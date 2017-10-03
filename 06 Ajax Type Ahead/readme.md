# Ajax Type Ahead
## Notes

In this challenge we built a Ajax city type ahead, you type the name of a city or state in the search box, and a bunch of suggestions for cities, states with its respective population count will appear as you type your word.

**Regular Expressions**
Sequence of characters that define a search pattern
with them you can use the methods `match()` `replace()` `search()` `split()` on strings. 
Most common use cases when you want to validate user inputed information(form validation).ex: at 1 capital and at least 1 number; you can use regular expressions to ensure that their entry matches the passwords qualifications.


In order to use a variable as your matched string, you need to create a RegExp.

```javascript
const regex = new RegExp(wordToMatch, 'gi');
```
This can then be used in match() methods for example

```javascript
return place.city.match(regex);
```
 
**Meta Characters used in regular expression**
literal characters: a specific charcater like the letter a, vs meta character a kind of character ex a capital letter from A-Z.

* single characters: \d =>(digit) indicates any character 0 through 9, \w => (word) any characters A-Z, a-z , and 0-9, \s =>(space) any white space (not line breaks though), . -> any characters PERIOD. if you write these metacharacters with capitals, that corresponds to anything thats NOT a specific characters for ex \d: anything but a number

*  quantifiers: indicates how many of a single character you want to use * => 0 or more, + => 1 or more, ? => 0 or 1, {min, max} , {n} or find a single character.

* position: this matches the position of the metacharacter in the string itself. ^ - begining of a line, $ -end, \b -word boundary.

Yellow highlight and number formating: go back to `display matches` before returning the match, we create a regex that will match the city name and then use that regex to replace the word it matches, with a span with a class of HL and the word that it matches.

**fetch API**

allows you to make network requests similar to XMLHttpRequest (XHR). The main difference is that the Fetch API uses Promises, which enables a simpler and cleaner API, avoiding callback hell and having to remember the complex API of XMLHttpRequest.

In this case, fetch is used to retrieve data from a url leading to a JSON data source.

```javascript
fetch(endpoint).then(blob => blob.json());
```
This will return a promise, that can then be resolved to retrieve the data via json(), the following code will add the data to an array

```javascript
fetch(endpoint).then(blob => blob.json()).then(data => cities.push(...data));
```

Note Use of the `... spread` operator to push each data object into the array instead of it entirely (which would push the entire data source at index 0)

```javascript
 function displayMatches() {
  const matchArray = findMatches(this.value,cities);//after step 4 weve taken care of the functionality
  const html = matchArray.map( place => {
    //step 5
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class= "hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class= "hl">${this.value}</span>`);
    return `<li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${place.population}</span>
    </li>`
```
