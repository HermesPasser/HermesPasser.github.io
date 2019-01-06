---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``virtual`` [Audio](Audio).play()   

## Description
Called when the audio reach the end.  

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?let%20symphony5%20=%20new%20Ramu.Audio(%22https://upload.wikimedia.org/wikipedia/commons/0/02/BeethovenSymphony5Mvt4Bar244.ogg%22);%0A%0Asymphony5.play();%0Asymphony5.onAudioEnd%20=%20function()%7B%0A%20%20%20alert(%22the%20audio%20ended%22);%0A%7D;%0A%0A%0ARamu.init();).
```javascript
let symphony5 = new Ramu.Audio("https://upload.wikimedia.org/wikipedia/commons/0/02/BeethovenSymphony5Mvt4Bar244.ogg");
symphony5.play();
symphony5.play();
symphony5.onAudioEnd = function(){
   alert("the audio ended");
};
``` 
