---
title: Responsive Images with HTML and Grunt
image: /assets/img/responsive
categories: javascript
---

Responsive images are key to a snappier web app and and to show a special care
to our mobile user's who usually load our content using their mobile plans. That
is why we can make use of the HTML picture element as well as a simple grunt
task (you can use gulp or webpack as well).

## Resizing Images

Apart from responsive images, it is very important that we optimize our images
the most we can before using them on our websites mainly because images like to
store a lot of unnecessary information and tend to be ridiculously large
(and heavy). Depending on what resolutions you want to support going above
1200px wide starts making the site load rather slowly.

On average an optimized image that is 1200px wide is about 300kb large which
isn't much but if we are on a smartphone things are a little different.
Smartphones are on average 300-400px wide which means our 1200px image is much
wider that it needs to be. Furthermore an image that is about 500px wide is
about 80kb large which is already 70% less. If we go a step further and reduce
the quality a little we can bring the image size down to even 20kb which one
smartphone can be a VERY BIG difference. As a recap:

- 1200px image (unoptimized): 800kb+
- 1200px image (optimized): ~300kb
- 500px image (optimized): ~80kb
- 500px image (optimized & reduce quality): ~20kb

That sounds good but how to do we do it ? Well, if you are a javascript advocate
you might be tempted to use javascript to check the clients screen size but
there is a much simpler approach which is already build into HTML. The
**picture** element is the magic element that makes it all possible. You see,
the **picture** element is wrapper for our commonly used **img** element. You
can use it like this:

```html
<picture>
  <img src="my-image.jpg" alt="my image">
</picture>
```

If you take a look at result it will slightly disappoint you. It only renders
your normal image like **img** would. The special power of **picture** is in
the source you can give it. Let suppose you went into an image editor and
created 3 copies of your image a large (1200px), a middle (700px) and a small
(300px) one. Using the source tag inside the **picture** element, we can tell
the browser which images to use based on the screen size like this:

```html
<picture>
  <source media="(min-width: 750px)" srcset="my-image-lg.jpg">
  <source media="(min-width: 500px)" srcset="my-image-md.jpg">
  <img src="my-image-sm.jpg" alt="my image">
</picture>
```

This is great, we are telling the browser to load the smallest image by
default, the medium sized image when the screen is at least 500px wide and the
large image when the screen is 750px wide. We are serving images completely
based on the user's needs. As a recap:

- Desktop users: Large Image (~300kb)
- Tablet users: Medium Image (~80kb)
- Smartphone users: Small Image (~20kb)

This is awesome, user's on a smartphone can expect their data plans to last at
least 100x more now on our site with a single image. Image if we had more
images, maybe 3 or 5 that would have been over 1_000Kb only in images. Once
again lets remember that a site that has to load over 1_000Kb in Images will
obviously slower than one that only has to load 60KB of images.

At this points our main concern is how to scale this. If we have a backend
server like **Rails** we can use the **carrierwave** gem which supports multiple
image sizes by default but for this guide let's assume we are building a
somewhat static site such as a clients website (restaurant page, blog, etc.).
We can add images and do it all manually or switch to an automation tool such
as Grunt.

## Resize in masses

Automation tools are must these days as the number of task we have to do
increases and the time we have to do them decreases. Grunt is one of the
options out there although Gulp and Webpack are more popular currently and we
can certainly use those tools as well but for the sake of this guide we are
going to stick with Grunt because it is pretty much the same.

To resize images we need [image magick](https://www.imagemagick.org/script/index.php),
don't let the somewhat old design of the website fool you. Many of the popular
options out there rely on it and just add an abstraction layer on top of it
like the above mentioned **carrierwave** gem. if you are on a mac I highly
recommend using [homebrew](https://brew.sh/):

```bash
brew install imagemagick
```

If you are not on a mac visit the site and got to the download section. Good
now we need Grunt itself and the required modules which requires **node**. I'm
not going into depth on how to install node but I recommend you install it using
a version manager like [nvm](https://github.com/creationix/nvm):

```bash
npm install grunt grunt-cli grunt-responsive-images -g
```

We are installing it globally which means we don't have to install for every
project separately. All that is left is to create our task and run it. The
task itself will not make sense if you haven't used task managers before:

```javascript
// Gruntfile.js
module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: '70%',
            suffix: '_large',
            quality: 80
          }, {
            width: '50%',
            suffix: '_medium',
            quality: 50
          }, {
            width: '40%',
            suffix: '_small',
            quality: 50
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'assets/images_src/',
          dest: 'assets/img/'
        }]
      }
    },
    clean: {
      dev: {
        src: ['assets/img'],
      },
    },
    mkdir: {
      dev: {
        options: {
          create: ['assets/img']
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
```

To run our task we have to open terminal and navigate to the root of our project
where **Gruntfile.js** is located and run grunt:

```bash
grunt
```

Before that lets go through what this will do. First we specify the image sizes
we want it to output in this case it will take each image and output them with
80%, 50% and 40% widths respectively. We can specify the quality reduction we
want as well which is also advisable. You would have to play around with those
settings and see the results you get but for my blog this is what I use. Next
under `file` we specify where to locate our original images. In my case my
images are located in a nested folder `assets/images_src/` which you can see
under `cwd` and the `dest` tells grunt where to put the optimized images. The
clean section does exactly that. It will remove anything that is inside the
`assets/img` folder which is my output folder before placing my optimized images
inside which makes sure I always have the latest and up to date versions of my
images. Finally the `mkdir` section makes a directory to store my images after
cleaning everything up. The result is that all the original images will be
copied, resized and placed inside the `assets/img` folder. The result looks
like this with these settings:

```bash
ll assets/img/
total 1760
drwxr-xr-x  23 alexander  staff   736B Jan 19 21:33 .
drwxr-xr-x   7 alexander  staff   224B Jan 19 21:33 ..
-rw-r--r--   1 alexander  staff    17K Jan 19 21:33 my-image-40pc_small.jpg
-rw-r--r--   1 alexander  staff    23K Jan 19 21:33 my-image-50pc_medium.jpg
-rw-r--r--   1 alexander  staff    60K Jan 19 21:33 my-image-70pc_large.jpg
```

Going back to the HTML all we have to do now is to use these images:

```html
<picture>
 <source media="(min-width: 750px)" srcset="assets/img/my-image-70pc_large.jpg">
 <source media="(min-width: 500px)" srcset="assets/img/my-image-50pc_medium.jpg">
 <img src="assets/img/my-image-40pc_small.jpg" alt="my image">
</picture>
```

And we are done. If we want to add new images we can place them in our source
folder and run grunt again.

> PS: The large image at the top for example was originally 300Kb large.
> The large, middle and small images are 67Kb, 24Kb and 18Kb respectively.
> Especially on a smartphone the size is a mere 6% of the original size.
