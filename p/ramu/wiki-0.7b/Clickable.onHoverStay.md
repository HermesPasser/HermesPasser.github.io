---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``virtual`` [Clickable](Clickable).onHoverStay()   

## Description
It will be called while the mouse remains on the object.    

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?var%20TXT%20=%20new%20Text(%22Hover%20Enter%22,%2010,%2010,%20200);%0A%0Aclass%20ClickableChild%20extends%20Clickable%7B%0A%20%20%20onHoverStay()%7B%0A%20%20%20%20%20%20TXT.text%20=%20%22Mouse%20inside%20of%20the%20object%22;%0A%20%20%7D%0A%20%20onHoverExit()%7B%0A%20%20%20%20%20%20TXT.text%20=%20%22Mouse%20is%20outside%20of%20the%20object%22;%0A%20%20%7D%0A%7D%0A%0Alet%20c%20=%20new%20ClickableChild(200,%20200,%20100,%20100);%0ARamu.init();).
```javascript
var TXT = new Text("Hover Enter", 10, 10, 200);

class ClickableChild extends Clickable{
   onHoverStay(){
      TXT.text = "Mouse inside of the object";
  }
  onHoverExit(){
      TXT.text = "Mouse is outside of the object";
  }
}
``` 
See also [Clickable.onHoverEnter](Clickable.onHoverEnter) and [Clickable.onHoverExit](Clickable.onHoverExit).