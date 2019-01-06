---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``virtual`` [Drawable](Drawable).draw()   

## Description
A GameObj that will be drawn in the canvas. It will be called once per frame.  

**Note:** if you try to draw something out of it then nothing will be drawn after the [update](GameObj.update).  

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?class%20NewObj%20extends%20Drawable%7B%0A%20%20%20draw()%7B%0A%20%20%20%20%20%20//%20logic%20here%0A%20%20%7D%0A%7D).
```javascript
class NewObj extends Drawable{
   draw(){
      // logic here
  }
}
``` 
See also [GameObj.update](GameObj.update).