# Gládio Cítrico site constructor
# by Hermes Passer in 09/2017 with python3
# ==========================================
# Folders:
#	pages  - auto generated completed pages
#	pieces - contain the code to be pasted in output file and variables
# ==========================================

VAR_FOLDER = "config"

import os
import xml.etree.ElementTree as ET
import sys; sys.path.insert(0, "./" + VAR_FOLDER)
import variables

print("Gládio Cítrico site constructor.")

# ============== Generate cross column
cross_column = ""
for url, name in {
	'Home'		: 'home.html', 
	'GitHub'	: 'https://github.com/HermesPasser/', 
	# 'Projects'	: '#', 
	# 'About'		: '#', 
}.items(): cross_column += "<li><a href=\"" + name + "\">" + url + "</a></li>\n\t\t\t"

# ============== Format html
variables.html = variables.html.replace('#css', 	"../" + VAR_FOLDER + "/style.css")
variables.html = variables.html.replace('#js', 		"../" + VAR_FOLDER + "/script.js")
variables.html = variables.html.replace('#icon', 	"../images/favicon.ico")
variables.html = variables.html.replace('#sidebar', variables.sidebar)
variables.html = variables.html.replace('#column', 	cross_column)

# ============== Generate the pages
pages = ET.parse(VAR_FOLDER + "/pages.xml").getroot()
pages = pages.findall(".//page")

for c in pages:
	title = c.find("title").text
	desc  = c.find("description").text
	key   = c.find("keywords").text
	cont  = c.find("content").text
	
	with open("pages/" + c.find("linkname").text + ".html", 'w+') as f:
		html = variables.html
		
		# Isso quebra se um desses não tiver texto
		html = html.replace('#desc', desc)
		html = html.replace('#keys', key)
		html = html.replace('#title', title + " - Gl&#225;dio C&#237;trico")
		html = html.replace('#content', cont)
		
		if 'dont-show-title' in c.attrib:
			html = html.replace('#page', "")
		else:
			html = html.replace('#page', title)
		
		f.write(html)

print("Done.")