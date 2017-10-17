# Key Sequence Detection (Konami Code)

In this project we learn about key sequencing detection, which means that when somoene inputs a certain sequence of keys into a window or input, something will happen.

### Methods
 * `splice()`

## Logic

We start by creating an event listener for `keyup` that will push all the keys we hit into an array called `pressed`.
```javascript
window.addEventListener('keyup', (e) => {
  console.log(e.key);
```
We then create a constant `secretCode` that contains the word or key sequence we wish to detect.
```javascript
const secretCode ='iambizi';
```
Now by using the `splice()` method we want to trim the array to hold only the number of characters contained in our `secretCode` constant.
```javascript
pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
```

Finally we set up a conditional statement that will check if our array includes the key sequence we are looking for and at that point we can execute our konami code or in this case the `cornify_add()` function.
```javascript
if (pressed.join('').includes(secretCode)){
    console.log('BINGO!');
    cornify_add();
  }
```


Store them in an array and then check everytime it keys up if it matches what you are looking for.
