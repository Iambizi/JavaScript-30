# Shift key Checkbox Check

In this project we built a script that enables us to check multiple checkboxes at once between an initial checked box and an another one after we've hit the shift key and checked it at the same time. It's a common layout that can be found in many email clients.

## Notes

* `event.shiftKey`: Property that allows us to check if the the shift key is active.
* `checkbox.checked`: Property that allows us to check wether a checkbox has been checked or not. (It returns a bolean to determine it)

### Logic

1) We start by selecting all of the checkboxes in our page. Then We loop through our checkboxes and listen for the click event on our checkboxes and set our callback function.

```javascript
const checkboxes = document.querySelectorAll(`.inbox input=[type="checkbox"]`);
checkboxes.forEach(checkbox => checkbox.addEventListener('click',handlecheck));
```
 
2) Create callback 

```javascript
function handlecheck(e) {
  // this console log will return the mouse event in the console base on our previous event listener on each looped checkboxes
  console.log(e)
  //lets set this flag that will help us determine the items inBetween the first and last checked that need to be ticked.
  let inBetween = false;
  // check if they have a shiftKey down and that they are checking the box, then we run the script
  if (e.shiftKey && this.checked) {
    //what we want to is loop over each checkbox and check if they are checked when clicked and shift is held down if their are checked. If so we then check what  in between 1st box and last box
    checkboxes.forEach(checkbox => {
      // this console.log shows that we are looping for every checkbox if e.shiftKey && this.checked
      console.log(checkbox);
        // this conditional statement looks for the 1st(this) and lastChecked boxes
      if (checkbox === this || checkbox === lastChecked) {
        //a) we set a flag variable called inBetween that is set to false earlier at the top, once we hit that 1st its gonna be true
        inBetween = !inBetween
        // this console log will print this string on the 1st checkbox and last checkbox
        console.log('starting to check in between')
      }
      //b) then we will programatically set it to checked, for every single one untill we hit that last one, where our inBetween gets set to false.
      if (inBetween){
        //.checked property returns a boolean to check an item so we set it to true.
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}
```
