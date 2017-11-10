# Objects and Arrays - Reference VS Copy

In this project we are learning about the difference between variables that are copied and variables that are referenced. This is often the source of a lot of bugs especially when we get into nested data.

### Strings numbers and Booleans.

```javascript
 start with strings, numbers and booleans
     let age = 100;
     let age2 = age;
     console.log(age, age2);
     age = 200;
     console.log(age, age2);
```
Here the value of `age` goes into the variable `age2` so we still get `age2 = 100` despite reasigning the original value `age` down the line with `200`.
The same would go for strings, after reasigning `name` from `wes` to `wesley` after console logging both values we still get `name2 = Wes`

```javascript
   let name = 'Wes';
     let name2 = name;
     console.log(name, name2);
     name = 'wesley';
     console.log(name, name2);
```
### Arrays

If you update an Array it will always reference back and take on any of the changes of it's original reference.Team is not the original array it is only a reference to the original array `players` so when we edit this original array it always adapts to its reference (team)

```javascript
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
  const team = players;

  console.log(players, team);
  //if switch the team array's 3rd index to `lux` when we call `players` it will reference back to `team`and also print lux at the 3rd index.
  team[3] = 'Lux';
```
To prevent the array from referencing another, you need to make a copy of it. Here are some ways to copy an array:

```javascript
const team2 = players.splice(); // when you pass nothing into slice it makes a copy of the array
const team3 = [].contact(players); //you take a blank and you concactanet into the existing array
const team4 = [...players,team]; //you take this new array and you spread into that array with the players. What the spread does is it will take every item out of your iterable and put it into the containing, in this case the array.
const team5 = Array.from(players)
```
### Objects

The same principles from the arrays apply with objects, and the ways you can copy objects are:

```javascript
const person = {
 name: 'Wes Bos',
 age: 80
};

const cap2 = object.assign({}, person, {number:99}); // to copy start with a blank object, you pass it the object that you wish to copy, then you fold in the property that you wish to override and you stick the entire line into its variable (cap2).
```
Important to note that this method is shallow, it only override one level deep, so you won't be able to do it on a object of objects.

