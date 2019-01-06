---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

[SimpleParticle](SimpleParticle).setDrawPriority()   

## Description
Get a rect with the GameObj position and size.  

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?let%20img%20=%20Ramu.Utils.getImage(%22https://github.com/HermesPasser/Ramu/blob/master/demos/img/particleblue.png?raw=true%22);%0Alet%20particle%20=%20new%20SimpleParticle(img,%20new%20Rect(250,%20250,%205,%206),%20100,%20200);%0A%0Aparticle.setDrawPriority(3);%0A%0ARamu.init();).
```javascript
let img = Ramu.Utils.getImage("https://github.com/HermesPasser/Ramu/blob/master/demos/img/particleblue.png?raw=true");
let particle = new SimpleParticle(img, new Rect(250, 250, 5, 6), 100, 200);
particle.setDrawPriority(3);
``` 
