---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

[SpritesheetAnimation](SpritesheetAnimation).addFrame()   

## Parameters
[``Rect``](Rect)\\[``Rect[]``](Rect) **rect**: Rect or rect array that represents the sheet of the image to be added as frame.  

## Description
Add an animation frame.

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?let%20img%20=%20Ramu.Utils.getImage(%22https://raw.githubusercontent.com/HermesPasser/Ramu/master/demos/img/anim/crossSheet.gif%22);%0Alet%20anim%20=%20new%20SpritesheetAnimation(img,%2010,%2010,%2035,%2035);%0Aanim.addFrame(new%20Rect(43,%2052,%2035,%2035));%0Aanim.addFrame(new%20Rect(3,%2052,%2035,%2035));%0Aanim.addFrame(new%20Rect(83,%202,%2035,%2035));%0Aanim.addFrame(%5B%0A%20%20new%20Rect(43,%202,%2035,%2035),%0A%20%20new%20Rect(3,%202,%2035,%2035)%0A%5D);%0A%0A%0ARamu.init();).
```javascript
let img = Ramu.Utils.getImage("https://raw.githubusercontent.com/HermesPasser/Ramu/master/demos/img/anim/crossSheet.gif");
let anim = new SpritesheetAnimation(img, 10, 10, 35, 35);
anim.addFrame(new Rect(43, 52, 35, 35));
anim.addFrame(new Rect(3, 52, 35, 35));
anim.addFrame(new Rect(83, 2, 35, 35));
anim.addFrame([
  new Rect(43, 2, 35, 35),
  new Rect(3, 2, 35, 35)
]);
``` 
