# Shift key Checkbox Check

In this project we built a script that enables us to check multiple checkboxes at once between an initial checked box and an another one after we've hit the shift key and checked it at the same time. It's a common layout that can be found in many email clients.

## Notes

* `event.shiftKey`: Property that allows us to check if the the shift key is active.
* `checkbox.checked`: Property that allows us to check wether a checkbox has been checked or not. (It returns a bolean to determine it)

### Logic

The most complicated part of this project for me was to wrap my head around the `let inBetween = false` flag  
