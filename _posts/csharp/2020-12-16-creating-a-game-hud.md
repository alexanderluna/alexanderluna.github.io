---
title: Creating a Game HUD
image: /assets/img/game-dev
categories:
  - books
  - csharp
---

The Hud is an overlay that communicates to the player information. It is a
versatile tool to display health, inventory, directions and context such as
score.

## Ways to use a HUD

Less common but equally effective are quick prompts such as congratulate the
player for striking a combo or leveling up displayed in the game. It helps keep
the player motivated and feel good. A combination of sound and flashy text does
the job very well. Each part of the HUD can be customized. Thus, be creative at
how you display information to the player. Consider adding a minimap to help the
player find missions, objects and pinpoint its location.

Another great area to use prompts is when the player interacts with a new
object/NPC. A prompt tells the player what to do or if an interaction is
possible and thus helps the player distinguish between non interactive objects.

## Creating a HUD-less experience

If your goal is to create a minimalist experience opt for a fading hud. That
way you only show information when the player needs it. Another options, is to
ditch the HUD entirely but this requires a very responsive game play to assert
to the player that things are happening. Otherwise the player will assume the
game is broken.

## Designing Icons

When designing icons for your game, distinguish them through shape and color to
show clear distinction and avoid text in icons. Take inspiration from other
professionals in the industry and always remember to keep the icons simple. It
should be easily inferable what the icon stands for.

## HUD structure

When it comes to nesting HUDs and screens make all screens accessible within
three button clicks. When designing the pause screen, make it interactive and
fancy. The resume button should be accessible with one click rather than forcing
the player to scroll through the menu to exit the screen.

## Other ways to use the HUD

Other interesting ways of using the hud is to kill time when the game loads
scenes or when a long animation is playing. At that time, we can show the player
tips, the game map, brief videos or mini games. Finally, there is the all
important credit screen. Take your time to honor the people who made the game
possible.
