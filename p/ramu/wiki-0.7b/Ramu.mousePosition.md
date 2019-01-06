---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``static Object`` [Ramu](Ramu).mousePosition

## Keys
- ``int`` **X**: Mouse position in x. (the value before Ramu starts is 0) 
- ``int`` **Y**: Mouse position in y. (the value before Ramu starts is 0)   

## Description
Object with the mouse position on canvas.   
**Note:** it may return wrong values if the canvas is distorced (like with css).
```javascript
let obj = new GameObj();
obj.x = Ramu.mousePosition.X;
obj.y = Ramu.mousePosition.Y;
```
See also [Ramu.clickedPosition](Ramu.clickedPosition).