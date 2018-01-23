---
title: How to use WebP with fallback option
permalink: how-to-use-webp
image: /assets/img/webp
categories: javascript
---

>WebP is a modern image format that provides superior lossless and lossy
> compression for images on the web. Using WebP, webmasters and web developers
> can create smaller, richer images that make the web faster.

What else can I add except that we should be using this all over the internet. Similar to
Service Worker and Progressive Web Apps, WebP is a hidden feature most developers don't use
or haven't even heard of but pays off a lot. But how much ?

[According to WebP](https://developers.google.com/speed/webp/) you can expect about 26% size reduction for PNGs and 25-35% for JPEGs. I have used it now for some time and I just confirm those numbers and even add that it is way more sometimes. But why isn't everyone using it ? Well similar to Service Workers, not all browsers support it which is why the following demo won't work on every browser:

<center>
<img src="https://mycroft1891.github.io/portfolio/img/projects/japanese.png" alt="Japanese image">
<br><br>
<img src="https://mycroft1891.github.io/portfolio/img/projects/japanese.webp" alt="Japanese image">
</center>
<br>

Ok the first image is the PNG which I have to say is already reduced in size and quality for efficiency. It was originally 600KB now it is 141KB. Doesn't sound bad, so what about the WebP image ? Well I just converted the reduced PNG to WebP and it is 9.4KB large which as you can see is way more than the promised 26%. I have to say that I cheated a little here. When I converted the image I also reduced the quality which if you have a great eye you can notice it but for my use case it was ok, so I left it like that. Great so lets learn how to convert images to WebP.

## Convert PNG and JPG to WebP

As usual when working with Images we need a tool and in this case is [Image Magick](https://www.imagemagick.org/script/index.php) and [WebP](http://brewformulas.org/Webp). Installing both is fairly simple using Homebrew:

{%- highlight bash -%}
$ brew install imagemagick
$ brew install webp
{%- endhighlight -%}

Now all we need is a small script to avoid typing things over and over again. This will convert JPGs:

{%- highlight bash -%}
#!/bin/sh
# convert_jpg.sh
SRC="$1"
convert $SRC.jpg -quality 50 -define webp:lossless=true $SRC.webp
{%- endhighlight -%}

and this will convert PNGs:

{%- highlight bash -%}
#!/bin/sh
# convert_png.sh
SRC="$1"
convert $SRC.png -quality 50 -define webp:lossless=true $SRC.webp
{%- endhighlight -%}

Save your script and make it an executable using `chmod`

{%- highlight bash -%}
$ chmod +x convert_jpg.sh
$ chmod +x convert_png.sh
{%- endhighlight -%}

Now we can convert images like this:

{%- highlight bash -%}
$ ./convert_jpg.sh my-image.jpg
$ ./convert_png.sh my-image.png
{%- endhighlight -%}

I know this looks very tedious but there are toolkits like `Grunt` and `Gulp` for this. On a larger scale we want to scale this same approach and the way we will do it is using `Gulp` this time. For that, we have to install it and all the modules required to make it happen. First we will need a folder where we are going to work and inside we will place a new folder with our PNGs and JPGs. The folder structure should look something like this:

{%- highlight bash -%}
test_folder
└── image_source
{%- endhighlight -%}

Now we navigate into that folder and run:

{%- highlight bash -%}
$ npm init
$ npm install gulp-cli -g
$ npm install gulp --save-dev
$ npm install imagemin --save-dev
$ npm install imagemin-webp --save-dev
$ touch gulpfile.js
{%- endhighlight -%}

Great we installed the Gulp Command Line Interface as well as Gulp itself and the two modules needed to process images and convert them. Now we can get our hands dirty writing our `gulpfile.js`:

{%- highlight javascript -%}
const gulp = require('gulp');
const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

gulp.task('default', function() {
  imagemin(['image_source/*.{jpg,png}'], 'build', {
  	use: [
  		imageminWebp({quality: 50})
  	]
  }).then(() => {
  	console.log('Images optimized');
  });
});
{%- endhighlight -%}

So what did we do ? We create a Gulp Task that will run by default when we type `gulp` in our CLI. We tell Gulp to take all the images inside the `image_source` folder, convert them to WebP and move them to the `build folder`.

For this guide we will use the images I use for my portfolio site:

{%- highlight bash -%}
image_source/
├── bitcoin.png # 147KB
├── blog.png # 98KB
├── chat.png # 142KB
├── christian.png # 115KB
├── japanese.png # 145KB
└── nasa.png # 117KB
{%- endhighlight -%}

We run our `gulp task` and watch our results in the `build` folder:

{%- highlight bash -%}
build/
├── bitcoin.webp # 8KB
├── blog.webp # 4KB
├── chat.webp # 6KB
├── christian.webp # 4KB
├── japanese.webp # 7KB
└── nasa.webp # 3KB
{%- endhighlight -%}

Great so we know two things now:

1. WebP is incredibly efficient
2. It isn't supported by all browsers


## Fallback Option for WebP

Until all the browsers support it, we can add a simple fallback option using the HTML `srcset`:

{%- highlight html -%}
<picture>
  <source srcset="/path/to/webp/bitcoin.webp" type="image/webp">
  <img src="/path/to/png/bitcoin.png" alt="bitcoin image">
</picture>
{%- endhighlight -%}

This way if the browser supports WebP, it will load the WebP image else it will load the PNG it is a win - win for everyone.
