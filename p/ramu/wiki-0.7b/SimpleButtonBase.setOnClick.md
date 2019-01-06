---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

[SimpleButtonBase](SimpleButtonBase).setOnClick()   

## Parameters
``function`` **func**: Function to be called.  

## Description
Set the function called when the button is clicked.  

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?let%20btn%20=%20new%20SimpleButtonBase(10,10,100,100);%0Abtn.setOnClick(function()%7B%0A%20%20%20/*...*/%0A%7D);%0A%0ARamu.init();).
```javascript
let btn = new SimpleButtonBase(10,10,100,100);
btn.setOnClick(function(){
   /*...*/
});
``` 

See also [SimpleButtonBase.setOnHoverEnter](SimpleButtonBase.setOnHoverEnter), [SimpleButtonBase.setOnHoverExit](SimpleButtonBase.setOnHoverExit) and [SimpleButtonBase.setOnHoverStay](SimpleButtonBase.setOnHoverStay).