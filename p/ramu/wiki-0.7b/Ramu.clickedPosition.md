---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``static Object`` [Ramu](Ramu).clickedPosition

## Keys
- ``int`` **X**: Clicked/touched position in x.
- ``int`` **Y**: Clicked/touched position in y.  

## Description
Object with the clicked/touched position on canvas. The object is emptied on the end of frame.   
**Note:** it will return wrong values if the canvas is distorced (like with css).

```javascript
let obj = new GameObj();
if (!Ramu.Utils.isEmpty(Ramu.clickedPosition)){
   obj.x = Ramu.clickedPosition.X;
   obj.y = Ramu.clickedPosition.Y;
}
```
See also [Ramu.mousePosition](Ramu.mousePosition).