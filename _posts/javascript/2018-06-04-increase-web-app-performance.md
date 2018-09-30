---
title: Increase Web app performance
image: /assets/img/performance
categories: javascript
---

As we develop Web Apps we tend to hit performance bottlenecks along the way and
while sometimes they are not as terrible they can slow down our Web App
considerably and can consume a lot of data which isn't great. There are some key
areas we can focus on to increase drastically the performance of our Web Apps:

Unsplash Image Credits: Emil Jarfelt

- [Google Maps bottleneck](#google-maps-bottleneck)
- [Loading Images Lazy](#loading-images-lazy)
- [Minify CSS and Javascript](#minify-css-and-javascript)
- [Serve assets using Service Worker](#serve-assets-using-service-worker)
- [IndexedDB is not that terrible](#indexeddb-is-not-that-terrible)

## Google Maps bottleneck

A lot of websites these days use google maps to display their store location or
to indicate where something is happening but few users know just how much google
maps decreases the performance of a Website. It seems rather simple to copy and
paste a pre-generated map into our HTML and 1,2,3 we have a map but Google map
is resource hungry. The way google maps loads is that it loads several smaller
images (tiles) to generate the whole map you requested and it also loads a
few scripts. Unfortunately those images can take some time to load especially
in HTTP 1.0.

The solution to this problem is rather simple:

1. place it at the bottom where it gets rendered later
2. use a toggle button to load the map only when the user actually needs it

Personally I prefer option 2 as it actually stops the map from loading the
individual tiles and gives the user the option to chose. The way you archive
this effect is simple. Place your google HTML snippet inside a `div` and give
that `div` a style of `display:none`. This means that the user won't use the
map but it will be loading the Javascript in the back just not the images.

```html
<div id="map-container" style="display:none">
  <!-- the map goes here -->
</div>

<div onclick="showMap(this)">
  <img src="palceholder-image.png">
</div>
```

I usually use a dummy image of a map which is scaled up a lot which gives it a
blurred effect. The replacement image itself is just 15kb large and when the
user clicks the image, I change the styling to **display:block** for the map and
**display:none** for the image.

```javascript
function showMap(placeholder) {
  let mapContainer = document.getElementById('map-container');
  mapContainer.style.display = 'block';
  placeholder.style.display = 'none';
}
```

## Loading Images Lazy

Browsers load all images by default. This behaviour makes it easy to build
websites but at the same time it makes sites less responsive. We cannot just
ditch image loading all together but it would be wise to prioritize the images
that are above the fold and lazy load the rest of the images
(when the user scrolls). This sounds great but how do we do this ?

This is where the `Intersection Observer API` comes into play. This API enables
us to tell when an HTML element enters the view and leaves it. We do this by
adding an element to our observer API.

When we create our images we cannot add the `src` attribute just yet or else
the Browser will fetch the image immediately which we don't want. Instead we
add a `data-src` attribute which will store the image link for later:

```html
<img class='image-class-name' data-src='ourImage.png'>
```

Now we can write the javascipt needed to notify us when the images enter the view:

```javascript
const images = document.querySelectorAll('.image-class-name');
let observer = new IntersectionObserver(onIntersection, config);
images.forEach(image => {
  observer.observe(image);
});

function onIntersection(element) {
const images = document.querySelectorAll(".your-classname");
  element.forEach(elem => {
   if (elem.intersectionRatio > 0) {
    observer.unobserve(elem.target);
    preloadImage(elem.target);
   }
  };
};
```

A quick walkthrough, first we are gathering all our images with the class
`.image-class-name`. Next we create our `IntersectionObserver` and finally we
loop through our images and add tell our observer to notify us when these images
enter the view. The `onIntersection` function gets called when the image or
images [it can be an array] enter the view. The image is past into our function
as the first parameter. This element is an array so we loop through it
(it can be 1 as well as 100 images). We make sure that the element is without
our desired view and then we tell our observer to unobserve our image so that
we don't fetch the same image more than once. Finally we load our image.

With a few lines of javascript we were able to lazy load our images. Now as the
user scrolls our site, our images will load dynamically which means less Data
consumption for our mobile users and a faster page speed.

## Minify CSS and Javascript

Assets such as CSS and Javascript have to be minified or uglyfied. Personally I
like injecting my minified CSS into the head with a style tag if my CSS is small
to reduce unnecesary requests and to speed up the paint of the site. Javascript
should be minified and added inside the body tag using an **async** or **defer**
attribute to improve the way it is loaded. There are several tools available for
this such Webpack and Parcel or the old school Gulp and Grunt. Especially CSS
increases the pages "Firs meaningful paint" time which will reduce your
performance quite a bit.

## Serve assets using Service Worker

The service worker is a middle man that can effectively intercept all requests
your website does. Why is this useful ? The big idea here is that you can cache
resources on the user's machine and then you can serve them locally instead of
fetching them from the web. This doesn't just reduce the amount of server calls
it also lays out the way to an offline experience. In an offline/low signal
scenario you can actually serve the website 100% from cache showing the user
the content they want without accessing the internet which is not just faster but
safes also data from your plan. Furthermore you can combine the service worker
with IndexedDB to store large images and even videos locally which enhances even
more the offline experience and responsiveness of your website.

## IndexedDB is not that terrible

As we saw previously, IndexedDB allows us to store almost everything on the
user's machine. This is a great oportunity to build a web app around but also
to improve the performance of our websites. IndexedDB works with callbacks.
