---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

[Audio](Audio).stop()  

## Description
Stop the audio.  

You can test this snippet of code [here](https://hermespasser.github.io/p/ramu/tryramu/?let%20symphony5%20=%20new%20Ramu.Audio(%22https://upload.wikimedia.org/wikipedia/commons/a/ae/Wolfgang_Amadeus_Mozart_-_Klarinettenkonzert_A-Dur_-_3._Rondo_%2528Allegro%2529.ogg%22);%0A%0Asymphony5.play();%0A%0Anew%20GameObj().update%20=%20function()%7B%0A%20%20%20if(keyCode.s%20in%20Ramu.pressedKeys)%7B%0A%20%20%20%20%20%20%20symphony5.stop();%0A%20%20%20%7D%0A%7D;%0A%0ARamu.init();).
```javascript
let symphony5 = new Ramu.Audio("https://upload.wikimedia.org/wikipedia/commons/a/ae/Wolfgang_Amadeus_Mozart_-_Klarinettenkonzert_A-Dur_-_3._Rondo_%28Allegro%29.ogg");
symphony5.play();
new GameObj().update = function(){
   if(keyCode.s in Ramu.pressedKeys){
       symphony5.stop();
   }
};
``` 
See also [Audio.pause](Audio.pause), [Audio.resume](Audio.resume) and [Audio.play](Audio.play).  
