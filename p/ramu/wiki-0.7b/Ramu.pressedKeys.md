---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``static Object`` [Ramu](Ramu).pressedKeys

## Description
Object with all key presses, the value is a empty object (``{}``) if no one key is pressed. The key enters it when it is pressed and exits when it is released.  
```javascript
if (keyCode.a in Ramu.pressedKeys){
   alert('A is pressed');
}
```
See also [Ramu.lastKeysPressed](Ramu.lastKeysPressed).