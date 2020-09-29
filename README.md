# lightbox
Simple lightbox without nav


### Steps to implement:

- [Copy the CSS and place it in your project](https://github.com/datene/lightbox/blob/master/lightbox.css)
- For every image create a lightbox code block, be sure to give it the input a unique id and refer to the id on the label. 
- Specify your image source on the img element.

```
<div class="lightbox-image">
  <input type="checkbox" id="lightbox-1" name="lightbox" />
  <label for="lightbox-1">
    <img src="./images/cat.jpg" alt="Loading cat" />
  </label>
</div>
```

### How it works
All the images have a checkbox input and when the check box is checked the image in the label expands. 
When an images is clicked again it toggles the checkbox off
