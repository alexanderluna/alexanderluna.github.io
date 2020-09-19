---
title: Creating Game Characters
image: /assets/img/game-dev
categories:
  - books
  - csharp
---

Although game design changes there are 3 things that have to be established in
pre-production.

1. Character
2. Camera
3. Control

> If you change any of these *during* production you will put your gameplay at 
> risk.

When creating a keep in mind that its form should follow the function. Ideally,
you should be able to describe your character's personality in 3 words. The
traits should show up in the appearance. Play should be able to recognize your
character based on the silhouette. Color and texture also plays an important
role to match the personality. There are three types of game characters.

1. Humorous: funny speech,Funny actions, looks fun/cute
2. Hero: heroic action, good at some thing but has problems like everyone
3. Tough: hard core, says good things, looks like a bad guy

> The character name should match the appearance. It will help you name them
> early to create a bonding.

Players can personalize characters. Some of the things they can change are:

- name
- appearance
- clothing
- home
- weapon

Your goal should be to create realistic characters. Don't overexaggerate
physical traits. Use the design to convey information. When a character moves
you can give feedback like limbing, joyful jumps, etc. When the characters is
happy/hurt/interested show it to the player in the characters movements.
Similarly, the appearance should reflect the mood and health of the character.
When the character gets an upgrade to weapons or levels up add visual I candy to
show it to a player - "be expressive". Also, don't forget that your character
isn't alone consider adding companions guided by artificial intelligence or a
second playable character that the player can pick.

> Keep in mind that adding companions or a second playable character requires
> almost the same commitment and resources as for the main character. Consult
> with the programmer prior to adding one to the game.

Non-playable characters are what complete the game world. The main character is
their center and they are there to help, inform or award the player. Every NPC
should have a clear defined role. It shouldn't look like NPCs do nothing but
interact with the player. Make them go to bed and not always available.

The characters relation to the world and the proportions is what creates the
metric system. Everything should be measure in relation to the character's size
(1x character for jumping, 2x character for double jumping, etc.). This allows
players to gouge distances by eye. It boils down to jumping height/with/size and
movement speed of the character. Giving the player clues about these metrics
allows them to judge what the character can reach and can't.

Give your character a range of motions to keep it interesting like walking,
running, jumping, swimming and stealth. Don't forget about the IDLE state and to
give the player few spontaneous movements to break the boring wait.

> When creating your junk make sure it reaches the teak quickly and it's very
> responsive please use it to react to danger. Don't make the fall look slow or
> it feels floaty and avoid skipds or sliding. The landing should be firm and
> secure.

Some common jumps to implement include simple jump, double jump (while in air),
triple jump (after landing) and wall jump.
