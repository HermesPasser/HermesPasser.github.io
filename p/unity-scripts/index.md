---
title: Unity Scripts
pagename: unity-scripts
keywords: unity
description: Scripts and systems for unity.
show-comments: true

layout: default
---
<p align="center">Demos, scripts and utilities for unity.</p>

Source code and other scripts in [Github](https://github.com/HermesPasser/unity-scripts).   


<h2 align="center">Systems</h2>

### novelist
A very simple precedual visual novel engine.   
Download [here](https://github.com/HermesPasser/unity-scripts/tree/master/novelist)  

#### Usage

Read the documentation [here](novelist).


<h2 align="center">(Very basic) Scripts</h2>

### Destroyer
Destroy a GameObject after a time defined.   
Download [here](https://github.com/HermesPasser/unity-scripts/blob/master/basic/Destroyer.cs)  

#### Usage

Attach to you GameObject.

Properties:  
**time (float)**: Time for GameObject to be destroyed.   

---
### FollowObject
Make a GameObject follow another.   
Download [here](https://github.com/HermesPasser/unity-scripts/blob/master/basic/FollowObject.cs)  

#### Usage

Attach to you GameObject.

Properties:  
**objectForFollow (Transform)**: GameObject to be followed.   
**velocity (float)**: GameObject (attached with the script) speed. Default: 1   

---
### GameLight
Control the light of a GameObject.   
Download [here](https://github.com/HermesPasser/unity-scripts/blob/master/basic/GameLight.cs)  

#### Usage

Attach to you GameObject.

Properties:  
**velocity (float)**: Velocity to flash. Default: 2   
**time (float)**: Time to flash. Default:  0   
**isFlashing (bool)**: Flag to tell if the light is flashing (like a broken one).   
**isDisabled (bool)**: Flag to tell if the light is disabled.   
**objLight (Light)**: Light source.   

---
### BasicTopDownMovimentationPC
Basic top-down movimentation with keyboard.   
Download [here](https://github.com/HermesPasser/unity-scripts/blob/master/basic/Movimentation/BasicTopDownMovimentationPC.cs)  

#### Usage

Attach to you GameObject.

Properties:  
**rbody (Rigidbody2D)**: GameObject to be moved.   
**speed (float)**: Movimentation speed. Default:  3   


---
### BasicTopDownMovimentationMobile
Basic top-down movimentation with touch.   
Download [here](https://github.com/HermesPasser/unity-scripts/blob/master/basic/Movimentation/BasicTopDownMovimentationMobile.cs)  

#### Usage

Attach to you GameObject.

Properties:  
**rbody (Rigidbody2D)**: GameObject to be moved.   
**speed (float)**: Movimentation speed. Default:  3   
**x (float)**: Position in X of the button.   
**y (float)**: Position in Y of the button.   
**width (float)**: Width of the button.   
**height (float)**: Height of the button.   
