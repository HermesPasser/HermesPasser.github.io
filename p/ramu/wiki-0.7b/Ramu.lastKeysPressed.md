---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``static Object`` [Ramu](Ramu).lastKeysPressed

## Description
Object with all key presses in the current frame, the value is a empty object (``{}``) if no one key is pressed. The object is emptied on the end of frame.  
```javascript
if (keyCode.a in Ramu.lastKeysPressed){
   alert('A is pressed');
}
```
See also [Ramu.pressedKeys](Ramu.pressedKeys).