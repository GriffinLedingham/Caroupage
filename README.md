# Caroupage
A simple background/page Carousel without jQuery.

Include the caroupage.min.js script in your HTML. Below your page content, call

```
Caroupage.init({
  slides: ['./assets/xp.png',
            './assets/w7.jpg',
            './assets/vista.jpg'
  ],
  next: 'next',
  prev: 'prev'
});
```

to initialize the plugin with your page content.

`Slides` should be a list of images you'd like applied to your body as a background image.

`next` is the ID of your page's next button.

`prev` is the ID of your page's prev button.

Your content divs to be used with each different background image should have ID's of the format `content_0`, `content_1`, etc.
