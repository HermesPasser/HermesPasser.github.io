---
title: Manga Host Downloader
pagename: mhdownloader
keywords: manga, download, downloader
description: Download from mangahost.net site
show-comments: true

layout: default
---
<img alt="Mangafox downloader logo (a page of manga)." src="https://raw.githubusercontent.com/HermesPasser/MangaFox-Downloader/master/app-icon.png"></img>
<p align="center">Download mangas from the brazilian's site Manga Host.</p>

Source code at [Github](https://github.com/HermesPasser/Manga-Host-Downloader)   
Download [1.7](href="https://github.com/HermesPasser/Manga-Host-Downloader/archive/master.zip)

**NOTE: This program will not be updated anymore.**

## Usage  

Needs ruby 2.4 or higher to work.  

### Command line arguments  

#### Help & other functionalities  

``h:`` to show help.  
``u:`` to update the program.    
``d:`` to change the default folder (default is program_folder/mangas/).  

#### Downloading

See the image below to undertand where get the information of the chapter that you want to download:  
![enter image description here](https://raw.githubusercontent.com/HermesPasser/Manga-Host-Downloader/master/about.png)
If there is a volume it will be before the chapter. The number after the chapter is the current page and should be ignored.   

``m:<manga_name>`` replace \<manga_name\> with the name of the manga. 
``c:<chapter_name>`` replace \<chapter_name\> with the name of chapter.  
``v:<volume_name>`` replace \<volume_name\> with the name of volume. Ignore this parameter if the manga does not have one. (optional)  
``p:<path>`` replace \<path\> with the path you want to download. This will just download the current manga in the selected folder and will not replace the default folder. (optional)  

e.g: ``m:manga_name c:01 p:c:\folder`` or ``m:other_manga c:5.5 v:4``

Below a video with the whole process:
<iframe src="https://www.youtube.com/embed/mDmbRwZjkas" frameborder="0" allowfullscreen></iframe>