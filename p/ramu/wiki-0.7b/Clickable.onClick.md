---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``virtual`` [Clickable](Clickable).onClick()   

## Description
It will be called when the player clicks the object.  

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?class%20ClickableChild%20extends%20Clickable%7B%0A%20%20%20onClick()%7B%0A%20%20%20%20%20%20alert(%22You%20clicked%20me!%22);%0A%20%20%7D%0A%7D%0A%0Alet%20c%20=%20new%20ClickableChild(0,%200,%20500,%20500);%0ARamu.init();).
```javascript
class ClickableChild extends Clickable{
   onClick(){
      alert("You clicked me!");
  }
}
``` 