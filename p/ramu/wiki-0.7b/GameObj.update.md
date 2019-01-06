---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``virtual`` [GameObj](GameObj).update()   

## Description
Will be called once per frame, add the GameObj logic here.  

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?class%20NewObj%20extends%20GameObj%7B%0A%20%20%20update()%7B%0A%20%20%20%20%20%20//%20logic%20here%0A%20%20%7D%0A%7D).
```javascript
class NewObj extends GameObj{
   update(){
      // logic here
  }
}
``` 
See also [GameObj.start](GameObj.start).