---
title: Designing Game Control
image: /assets/img/game-dev
categories:
  - books
  - csharp
---

Game controls are how the player interacts with the game. It is a good practice
to learn about ergonomics or the art of understanding how the equipment fits the
end user. We humans have a powerful control system by default, our hands. Our
fingers allow us to respond fairly dynamically so lets take a look at the
strength of our fingers.

- Thumb: reacts quickly/good for steering
- Index: has a fast response
- Middle: supportive and suited for combo moves
- Ring: stabilizes the grip
- Pinkie: fine tunes the grip

When it comes to the number of controls we can give to our player, it is better
to restrict it down to a few keys/buttons. Create hot keys and macros to chain
attacks/moves. Optionally, allow players to change the controls inside the menu.
It is very helpful to understand what our fingers can do to build controls
around those movements.

- tapping
- touch/hold
- pull
- scrub
- draw
- pinch

A good game will use a combination of these movements to create a learnable game
experience. If the controls are too complex, the player will get tired and
frustrated. Sometimes, a move cannot be executed due to lack of ammunition,
MP or restricted space. Nonetheless, give the player feedback that the button
is not available at the moment. Otherwise, the player assumes the game is
broken.

Generally speaking, mimicking real world movement with game controls results in
an intuitive controls. Also keep in mind that every control should be followed
by a quick animation or else it is difficult for the player to time actions
properly.

Modern consoles, especially mobile devices, offer an increasing amount of new
controls in the form of gyroscopes, actuators (vibration) and cameras (AR). You
can apply what we learned about controls to integrate them into your games.
