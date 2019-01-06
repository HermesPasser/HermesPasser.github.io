---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``static bool`` [Ramu.Utils](Ramu.Utils).isOutOfCanvas(gameObject)   

## Parameters
- [``gameObject``](GameObj) **gameObject**: gameObject to be checked.  

## Return
``bool``: Return true if the gameObj is outside of the canvas and false if not.  

## Description
Checks if the gameObject position (x,y) is out of the canvas.  

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?Ramu.init();%0Alet%20gameobj%20=%20new%20GameObj(1,%202,%204,%204);%0A%0Aif%20(Ramu.Utils.isOutOfCanvas(gameobj))%7B%0A%20%20%20new%20Text(%27gameobj%20not%27,%2010,%2010,%20100);%0A%7D%20else%20%7B%0A%20%20new%20Text(%27gameobj%20is%20inside%27,%2010,%2010,%20100);%0A%7D%0A%0Alet%20gameobj2%20=%20new%20GameObj(-5,%20-5,%204,%204);%0Aif%20(Ramu.Utils.isOutOfCanvas(gameobj2))%7B%0A%20%20%20new%20Text(%27gameobj2%20not%27,%2010,%2050,%20100);%0A%7D%20else%20%7B%0A%20%20new%20Text(%27gameobj2%20is%20inside%27,%2010,%2050,%20100);%0A%7D).
```javascript
if (Ramu.Utils.isOutOfCanvas(gameobj)){
   new Text('gameobj not', 10, 10, 100);
} else {
  new Text('gameobj is inside', 10, 10, 100);
}

let gameobj2 = new GameObj(-5, -5, 4, 4);
if (Ramu.Utils.isOutOfCanvas(gameobj2)){
   new Text('gameobj2 not', 10, 50, 100);
} else {
  new Text('gameobj2 is inside', 10, 50, 100);
}
``` 
See also [Ramu.Utils.isInsideOfCanvas](Ramu.Utils.isInsideOfCanvas)