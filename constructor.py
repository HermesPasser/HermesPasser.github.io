# Gládio Cítrico site constructor
# by Hermes Passer in 09/2017 with python3
# ==========================================
# Folders:
#	pages  - auto generated completed pages
#	config - pieces to contruct the pages
# ==========================================

import xml.etree.ElementTree as ET
print("Gládio Cítrico site constructor.")

VAR_FOLDER = "config"
root = ET.parse(VAR_FOLDER + "/pages.xml").getroot()

# ============== Generate cross column
cross_column = ""
for url, name in {
	'Home'		: 'home.html', 
	'GitHub'	: 'https://github.com/HermesPasser/', 
}.items(): cross_column += "<li><a href=\"" + name + "\">" + url + "</a></li>\n\t\t\t"

# ============== Format html
html = root.find(".//html").text
html = html.replace('#css', 	"../" + VAR_FOLDER + "/style.css")
html = html.replace('#js', 		"../" + VAR_FOLDER + "/script.js")
html = html.replace('#icon', 	"../images/favicon.ico")
html = html.replace('#sidebar', root.find(".//sidebar").text)
html = html.replace('#column', 	cross_column)

# ============== Generate the pages
pages = root.findall(".//page")
for c in pages:
	title = c.find("title").text
	desc  = c.find("description").text
	key   = c.find("keywords").text
	cont  = c.find("content").text
	with open("pages/" + c.find("linkname").text + ".html", 'w+') as f:		
		# Isso quebra se um desses não tiver texto
		tmphtml = html;
		tmphtml = tmphtml.replace('#desc', desc)
		tmphtml = tmphtml.replace('#keys', key)
		tmphtml = tmphtml.replace('#title', title + " - Gl&#225;dio C&#237;trico")
		tmphtml = tmphtml.replace('#content', cont)
		
		if 'dont-show-title' in c.attrib:
			tmphtml = tmphtml.replace('#page', "")
		else:
			tmphtml = tmphtml.replace('#page', title)
		
		f.write(tmphtml)

print("Done.")