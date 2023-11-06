# image-beam-cannon-js

An [Atari 2600 TIA](https://en.wikipedia.org/wiki/Television_Interface_Adaptor)'s inspired approach to generating [HTML5 canvas graphics](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

## How Does This Work?

A "beam" horizonitally scans every pixel from left to right, moving to the next line once it gets to the end of that line. The currenlly "scanned" pixel dictates "where" something can be drawn to the canvas. What gets drawn to the current pixel is determined by the `drawBeam` method, which itself can be configured by the `drawFn` property. "When" something is drawn is determined by a message queue. Messages are sent asynchrounously, and each time the beam moves the most recent message is read - which can change the color, offset, delay, or whether the beam is drawing at all. Because the beam is recusively moving forever (as it start back to it's origin once it reaches the end of the canvas) - it has to run from a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) thread so the UI can still be used to send messages for controlling what's being drawn.

That's pretty much it. 

## Why Do This?

Because I wanted to expeirment with a way to generate images using time instead of space. And, I wanted to learn more about the Atari 2600 TIA, and how to reason about graphics created using the Atari 2600 in general. And yes, it's name is a not-so-subtle reference to [Piccolo](https://dragonball.fandom.com/wiki/Piccolo)'s [special beam cannon](https://dragonball.fandom.com/wiki/Special_Beam_Cannon) from [Dragon Ball Z](https://en.wikipedia.org/wiki/Dragon_Ball_Z). Because why not. 





