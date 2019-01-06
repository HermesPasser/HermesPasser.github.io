---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``static`` [Ramu](Ramu).init(width, height)   

## Parameters
- ``int`` **width**: Width of the canvas. (optional, default is 500)  
- ``int`` **height**: Height of the canvas. (optional, default is 500)  

## Description
Setup Ramu and call the game loop. 

**Note:** it will throw an error if the code is called outside of a *body* tag.  

Called without parameters: (You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?Ramu.init();))  
```javascript
Ramu.init();
``` 

Called with parameters: (You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?Ramu.init(200,300);))  
```javascript
Ramu.init(200, 300);
``` 
