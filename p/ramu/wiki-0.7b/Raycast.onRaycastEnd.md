---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``virtual`` [Raycast](Raycast).onRaycastEnd()   

## Description
Triggered when the raycast ends (even if is ended because of an [abort](Raycast.abort) call).  

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?new%20SimpleRectCollisor(10,%2040,%2050,%2050);%0A%0Aclass%20NewObj%20extends%20Raycast%7B%0A%20%20%20onRaycastEnd()%7B%0A%20%20%20%20%20%20this.destroy();%0A%20%20%7D%0A%7D%0A%0Anew%20NewObj(1,3,5,6).init(0,%200,%2020,%2030,%2010);%0A%0ARamu.init();%0ARamu.debugMode%20=%20true;).
```javascript
new SimpleRectCollisor(10, 40, 50, 50);

class NewObj extends Raycast{
   onRaycastEnd(){
      this.destroy();
  }
}

new NewObj(1,3,5,6).init(0, 0, 20, 30, 10);

Ramu.init();
Ramu.debugMode = true;
``` 
See also [Collisor.onCollision](Collisor.onCollision).