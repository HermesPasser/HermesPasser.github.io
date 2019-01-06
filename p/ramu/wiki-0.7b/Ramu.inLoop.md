---
title: Ramu 0.7b doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

``static bool`` [Ramu](Ramu).inLoop  

## Description
If false the game loop will stop and start/update/checkCollision will not be called. Is set to false when [init](init) is called so if you want to set it to true, do so after init is called.

**Note:** draw is still called even if the value is false.