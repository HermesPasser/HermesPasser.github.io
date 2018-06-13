---
title: Ventura
pagename: ventura
keywords: update, updater
description: A Simple xml-based updater in python 3.6 with no try-catch statement.
show-comments: true

layout: default
--- 
<p align="center">A Simple xml-based updater in python 3.6 with no try-catch statement, use carefully.</p>  

Source at [github](https://github.com/hermespasser/ventura)   

Created as substitute of [updatewp]({{ site.baseurl }}p/rb-scripts/updatewp) in a series of post to a forum.

## Other links

Demonstration video:
<iframe src="https://www.youtube.com/embed/gHLClU0VyMA" frameborder="0" allowfullscreen="0"></iframe>

Portuguese post series in Condado Braveheart: [pt. 1](http://www.condadobraveheart.com/forum/index.php?topic=4341.0) - [pt.2](http://www.condadobraveheart.com/forum/index.php?topic=4346.0) - [pt.3](http://www.condadobraveheart.com/forum/index.php?topic=4360.new#new)   

## Usage

### Installation

First you need to install the package using ``pip install ventura`` and import in your project with ``import ventura``.

### Documentation

**update_if_is_need** *>> version (double), xml_url (string), path = "" (string, optional)*
version: *current project version*
xml_url: *url of the xml file on web*
path: *path where the new version will be downloaded and unpacked*

### XML format

```xml:
<?xml version="1.0" encoding="UTF-8"?>  
<ventura>  
	<update version="0.1">  
		<url>https://um.link</url>  
		<delete>file_to_delete1.txt,folder1\</delete>  
	</update>  
</ventura>
```
ventura: *root node*
update: *nodes with update information, you can have various of it. Version attribute says wich version is it.*
url: *file to download url, only one by node. Must be inside of a update node.*
delete: *files and folders to delete of previous version separated by commas, put a backslash "\" if is a folder. Must be inside of a update node and only one by node. 
