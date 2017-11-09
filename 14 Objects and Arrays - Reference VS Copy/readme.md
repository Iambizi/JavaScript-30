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


