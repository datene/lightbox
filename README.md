# lightbox
Simple lightbox without nav, [check it out](https://datene.github.io/lightbox/index.html)


### Steps to implement (simple version without nav):

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


### You want nav? We got nav. Just need a tiny bit of JS
Simple lightbox _with_ nav, [check it out](https://datene.github.io/lightbox/with_js.html)
- [Include the JS for the nav in your project](https://github.com/datene/lightbox/blob/master/all.js)
- Add the HTML for the navigation somewhere (preferably in the same container, but it doesn't really matter) on the page where you placed your lightboxes
```
<div class="collapsed" id="lightbox-nav">
  <button id="previous">&lsaquo;</button>
  <button id="next">&rsaquo;</button>
</div>
```
- [Add the CSS for the nav to your project](https://github.com/datene/lightbox/blob/master/nav.css)
