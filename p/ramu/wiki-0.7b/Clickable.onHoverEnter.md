---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``virtual`` [Clickable](Clickable).onHoverEnter()   

## Description
It will be called when the player's mouse enters the object.  

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?var%20TXT%20=%20new%20Text(%22Hover%20Enter%22,%2010,%2010,%20200);%0A%0Aclass%20ClickableChild%20extends%20Clickable%7B%0A%20%20%20onHoverEnter()%7B%0A%20%20%20%20%20%20TXT.text%20=%20%22Hover%20Enter%22;%0A%20%20%7D%0A%20%20onHoverExit()%7B%0A%20%20%20%20%20%20TXT.text%20=%20%22Hover%20Exit%22;%0A%20%20%7D%0A%20%20onClick()%7B%0A%20%20%20%20%20%20%20%20%20%20TXT.text%20=%20%22...%22;%0A%20%20%7D%0A%7D%0A%0Alet%20c%20=%20new%20ClickableChild(200,%20200,%20100,%20100);%0ARamu.init();).
```javascript
var TXT = new Text("Hover Enter", 10, 10, 200);

class ClickableChild extends Clickable{
   onHoverEnter(){
      TXT.text = "Hover Enter";
  }
  onHoverExit(){
      TXT.text = "Hover Exit";
  }
}
``` 
See also [Clickable.onHoverExit](Clickable.onHoverExit) and [Clickable.onHoverStay](Clickable.onHoverStay).