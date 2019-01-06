---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

[SpritesheetAnimator](SpritesheetAnimator).addX()   

## Parameters
``int`` **y**: Value to be added to [y](GameObj.y).  

## Description
Add a value to current y position of it and its animations.

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?let%20img%20=%20Ramu.Utils.getImage(%22https://raw.githubusercontent.com/HermesPasser/Ramu/master/demos/img/anim/crossSheet.gif%22);%0Alet%20anim%20=%20new%20SpritesheetAnimation(img,%2010,%2010,%2035,%2035);%0Aanim.addFrame(%5Bnew%20Rect(43,%2052,%2035,%2035)%5D);%0A%0Alet%20animator%20=%20new%20SpritesheetAnimator(10,%2010,%2035,%2035);%0Aanimator.addAnimation(%27anim1%27,%20anim);%0Aanimator.setCurrentAnimation(%27anim1%27);%0A%0Anew%20GameObj().update%20=%20function()%20%7B%0A%20%20animator.addY(3%20*%20Ramu.time.delta);%0A%7D;%0A%0ARamu.init();).
```javascript
let animator = new SpritesheetAnimator(10, 10, 35, 35);

new GameObj().update = function() {
  animator.addY(3 * Ramu.time.delta);
};
``` 

See also [SpritesheetAnimator.addX](SpritesheetAnimator.addX), [SpritesheetAnimator.setX](SpritesheetAnimator.setX) and [SpritesheetAnimator.setY](SpritesheetAnimator.setY).