# Gládio Cítrico site constructor
# by Hermes Passer in 07/2017 with python3
# ==========================================
# Folders:
#	pages  - auto generated completed pages
#	pieces - contain the code to be pasted in output file and variables
#	raw_pages - content of page without html structure
# The first line of a document in raw folder will be the title of page.
# ==========================================

VAR_FOLDER = "pieces"
RAW_FOLDER = "raw_pages"

import os
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
}.items(): cross_column += "<a href=\"" + name + "\">" + url + "</a>\n\t\t\t"

# ============== Format html
variables.html = variables.html.format(
	"../images/favicon.ico",			# shortcut ico
	"../" + VAR_FOLDER + "/style.css",	# style
	"../" + VAR_FOLDER + "/script.js",	# script
	"{0}",								# title
	cross_column,						# cross-column
	"{1}",								# content
	variables.sidebar					# sidebar
)

# ============== Generate the pages
for filename in os.listdir(RAW_FOLDER):
	with open("{0}/{1}".format(RAW_FOLDER, filename), 'r') as f: 
		title = f.readline()
		next(f)
		content = f.read()
	with open("pages/{0}".format(filename), 'w+') as f:
		content = "<h1>" + title + "\t\t\t\t</h1><br />\n" + content
		f.write(variables.html.format(title + " - Gl&#225;dio C&#237;trico", content))

print("Done.")