---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``static bool`` [Ramu.Utils](Ramu.Utils).playSound(sound, volume = null)   

## Parameters
- ``audio`` **sound**: Audio to be played.  
- ``float`` **volume **: Volume of the sound. (optional, default is null)  

## Return
``bool``: Return true if the gameObj is inside of the canvas and false if not.  

## Description
Play a sound.  

**Note:** this method is deprecated, use [Ramu.Audio](Ramu.Audio) instead.

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?Ramu.init();%0Alet%20trainSnd%20=%20new%20Audio(%22https://hermespasser.github.io/p/ramu/losttrain/res/steam-train-whistle-daniel_simon.wav%22);%0ARamu.Utils.playSound(trainSnd);%0A).
```javascript
let trainSnd = new Audio("https://hermespasser.github.io/p/ramu/losttrain/res/steam-train-whistle-daniel_simon.wav");
Ramu.Utils.playSound(trainSnd);
``` 
