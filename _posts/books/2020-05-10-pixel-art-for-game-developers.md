---
title: Pixel Art for Game Developers
image: /assets/img/game-dev
categories: books
---

## Pixel Art FTW

Pixel art was created due to technical restraints. However, players love pixel
pixel art due to nostalgia and the simplicity leads to memorable and iconic
imagery. Pixel art games use a highly accepted game styles. Each pixel conveys
as much information as possible which leads to iconic art where features are
exagerated.

> Pixel art looks intentional and timeless

For game developers, pixel art makes life easier. Sprites are literally pixel
sized resulting in tiny file sizes. They are somewhat easy to create and the
software needed to make them is cheap. It is easy to import into games and it
works well on small screens.

Compared to 3D, the design process is much simpler. Thus there are various
reasons to use pixel art in game development.

## Drawing Pixel Art

When drawing lines, focus on drawing straight lines or lines that follow a
consistent pattern. An important aspect of creating curves is to avoid lone
pixels as they break the ilusion of a curve. A line should always be 1 pixel
wide otherwise it turns aestheticly unpleasent.

> When importing pixel images, reduce/disable anti-aliasing. While on normal
> images/assets it can be useful to soften the image, for pixel art where every
> pixel counts it can easily turn our drawings blurry.

## The importance of Color

No pixel art would be what it is without a good color palette. While gradients
work with lots of colors it is much more common to have a ramp with fewer colors
as a palette. In fact, generating different sceneraries by changing just a few
color in our ramp is quite simple which makes this approach to coloring quite
powerful - **Palette swapping**. Using this technique we can quickly change the
same scenary into a sunset, night scene or dungeon scene while recycling
existing art and giving a differnt feeling. Beyond that, we can in the same
generate a special versions of characters like this as well for special attacks
or to reuse a character as a different version.

We can quickly see that the color palette is important. But what makes a good
color palette ? to begin with it should have as few colors as possible. While
more colors add more detail to our art, it also increases the drawing/animation
time **exponentially**. Too many colors also makes it dificult to keep our art
consistent.

How do we pick colors ? The easiest way is to generate a gradiend from dark to
light for each object we want to draw and keep that gradient as small as
possible. For a tree for example, we would pick 3 shades of green and 3 shades
of brown to add complexity to our tree. We could add an extra unrelated color
such as red to draw apples or black to draw a whole in the wood. Another
important part is saturation. A more saturated color draws the eye and makes it
stand out so use it wisely. Low saturation is generally good for backgrounds.

> This might be a lot to wrap our heads around but it boils down to keeping
> color palettes as simple as possible and using as little change as possible
> to make as much of an impact as possible.

A great way of learning about colors and coloring is to look at art drawn by
others.

## Tip and Tricks to draw better

> Most of what makes art look good has to do with shadowing, cast shadow, light
> consistency and linear perspective.

When it comes to shading, any surface that is perpendicular to the light,
reflects the most light and is thus the brightest part of the object. Any
surface that is parallel to the light source will appear darker. In a similar
way the shadow of our object should be aligned with the light source to create a
good feeling of depth. The shadow is darker closeer to the object and gets
lighter toward the edges. An extra tip at this point, a distant light source
casts a blurry shadow while a near light source (torch) casts a dark and rich
shadow.

Atmospheric Perspective is one way our brain determines the distance of objects.
Object appear smaller when they are far. If one object overlaps another, it
immedeatly converys a sense of depth. Returning to Atmospheric Perspective, very
distance objects (horizon, mountains, etc.) don't just appear smaller and
overlapped but lighter and bluish. Why ? because we are used to how the
atmosphere changes the color of things. For mountains this would mean the first
mountains are dark and become inreasingly lighter and bluer as they overlap
until they blend with the horizon.

The Linear Perspective is the guide we use to determine the size of objects to
give a feeling of depth. The lines start big and get smaller the closer they are
to the horizon.

If we combine all this concepts in our art we can create complex and rich
scenary with a lot of eye candy.

## Caveats with Animation

Animation is what allows us to bring inanimate objects such as sprites to life.
While traditional animations were done in 24 FPS, 30 and 60 FPS is much more
common. Each animation consists of a sprite that loops in place so that we can
move it according to the user input later on.

Any modern pixel art program will allow us to create duplicates of each frame.
After creating a duplicate, we can make increasingly small changes. A good tool
for this is onion skinning which allows us to emulate the effect of a light
table by showing us prior and later frames.

One of the problems with animating pixel art is **pixel flashing**. This
happens when a pixel appears in one frame and doesn't in the next giving off
the sensation of flashing or jitter. It is especially common in low resolution
pixel art.

While there are various animation techniques it is best to keep it simple at the
beginning - anticipation, squash and stretch. Anticipation is the process of
showing that a movement is about to happen. An example would be a football
player moving his lag back in preparation for shooting a ball. In other words,
we create momentum for the actual movement and follow it through to show the
whole animation cycle.

> Anticipation is especially convincing when it exagerates the movement.

A great techniqued for showing fast moving objects is ghost trailing. We create
less detailed versions of the fast moving object that trail it. This way the
player doesn't just see a fast moving object but a trail which can be followed.

A squash happens when the width increases respective to its height. In a game
this would happen when a slime jumps down or a fat character lands on the floor.
The character contracts due to the abrubt stopping and expands to the sides.

The opposite of a squash is a stretch. Instead of jumping down, the character
jumps up this time stretching its body. We can combine squash and stretch to
create lots of movement. If we use it in a subtle way, we can create also an
idle cycle for our character to give the player something to look at while the
character isn't moving.

> A key aspect of game animations is that unlike movie animations, the player
> decides the next animation at any given point in time. This means animations
> have to loop well and fit with one another.

Usually every game has some common animation which the player can trigger like
walk, run, idle, attach, death, jump and tacking damage. Generally each
animation is about 8-16 frames depending on how smooth it should look but there
are animations with fewer frames when there is only the need for some feedback.

## The power of Tiles

Now we will cover a huge part of pixel art which is tiles. A tile is a resuable
and combinable piece of art which we can use to compose our world. **Tiles**
usually are between 8x8 and 32x32 big - each dimension doubles in size. Given
that we work with a constriant size, it is useful to keep a grid layout when
working our art.

Tiles are small pieces of art which can be combined which in turn means they
should be made to able to connect nicely both horizontally and vertically.
Sometimes we combine them in a **grid** to create a wall for instance. For these
type of scenarios it is useful keep tiles homogenous to avoid tiles from
sticking out. They key of tiles is recycling. Thats why creating a tile that
can be combined and reused over and over without creating a boring scene it
vital and helps reduce drawing time.

When it comes to matching tiles and creating transitions, **dithering** is a
great technique. We add pixels between transisting tiles to create a sense of
fade. This can be done organically (by hand) or with a pattern (a brush tool).
Organic dithering can be very charming and less "computerized" when done
properly.

Once we are ready to make our tiles, it very important to compose the tiles to
make sure that are not creating tiles with obvious patterns and that they fit
well with each other. Generally a good 3 step process it to create a single
tile, compose to test the tiling, shadows and highlights and finally add some
texture to give the tiles depth.

## Avoiding common errors

One error which beginners commonly do especially when you work on small
resolution art is **banding** or also called super pixels. This happens when
drawing diagonal/curved lines and the different shades line up it creates a
feeling thick lines. This can be countered by creating shades of organic shape
instead don't just follow the outer line to create inner shades.

At the beginning we talked about anti aliasing and how it makes our art look
blurry. Thats why you should avoid this to keep the art quality intact.

Another issue is poor shape quality. The general shape of the art should give
the viewer a guideline. A bad shape is marked by awkward lines and missing
pieces in the sillouhette.

The color palette we chose impacts the look at feel of our art. It shouldn't be
too saturated nor too muted. It shouldn't have too much contrast nor too little.

A common misconcept is that pixel art has to have a lot of details but the
opposite it true. The less pixel your art needs the better. Complex art doesn't
just make it though to work on later on during tight schedules but it also
isn't aesthetically pleasing - KISS (keep it simple, stupid).

When it comes to shading avoid **pillow shading**. Pillow shading consists in
adding shading to your art by making the outlines darker. While it creates
shades it makes the art look flat and unpleasent. Don't forget, shades should
match the light source.

Finally, give your art good texture. Texture lets you play with light and
shadows and allows you to create unique art which conveys a lot of information
to the player.
