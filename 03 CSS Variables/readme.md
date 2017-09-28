# CSS Variables

In this project we use CSS Variables to change 3 sliders each respectively representing the color, spacing, and blur of a picture. 

## Notes

With preprocessors like Sass, variables were part of the preprocessor language, not the CSS itself. Once the code compiles, those variables are gone.

Native CSS has started supporting CSS variables, or "CSS Custom Properties". It allows you to work with variables directly in CSS. There is no compiling.
The important feature relevant to this course is that they can be manipulated with JavaScript.

**Example**
```css
:root {
  --base:#FFF;
  --spacing: 10px;
  --blur: 10px;
}

img {
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
}
```



#### Logic

An important feature of CSS variables is that they follow the cascading property of native CSS, which is what we will take advantage of for our project. For each input Element inside our controls class, we attach an even listener listening for the ```'change'``` event and the ```mousemove``` event, after which we will use the information from that event to execute the ```handleUpdate()``` function. 
This function modifies the value of the variables initial set at the root level

```javascript
const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
 ```



