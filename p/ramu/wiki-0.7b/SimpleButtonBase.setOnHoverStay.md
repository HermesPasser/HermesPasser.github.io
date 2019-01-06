---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

[SimpleButtonBase](SimpleButtonBase).setOnHoverExit()   

## Parameters
``function`` **func**: Function to be called.  

## Description
Set the function called while the mouse stays on the button.  

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?let%20btn%20=%20new%20SimpleButtonBase(10,10,100,100);%0Abtn.setOnHoverStay(function()%7B%0A%20%20%20/*...*/%0A%7D);%0A%0ARamu.init();).
```javascript
let btn = new SimpleButtonBase(10,10,100,100);
btn.setOnHoverStay(function(){
   /*...*/
});
``` 
See also [SimpleButtonBase.setOnClick](SimpleButtonBase.setOnClick), [SimpleButtonBase.setOnHoverExit](SimpleButtonBase.setOnHoverExit) and [SimpleButtonBase.setOnHoverEnter](SimpleButtonBase.setOnHoverEnter).