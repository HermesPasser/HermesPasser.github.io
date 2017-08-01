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

def get_mark(text, mark):
	if mark + '[' in text: 
		start = text.index(mark + '[') + 2
	else:
		print('Mark [' + mark + ' cannot be found')
		return ""
		
	if ']' + mark in text: 
		end   = text.index(']' + mark)
	else:
		print ('Mark ' + mark + '] cannot be found')
		return ""
	
	return text[start:end]


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
variables.html = variables.html.replace('#css', 	"../" + VAR_FOLDER + "/style.css")
variables.html = variables.html.replace('#js', 		"../" + VAR_FOLDER + "/script.js")
variables.html = variables.html.replace('#icon', 	"../images/favicon.ico")
variables.html = variables.html.replace('#sidebar', variables.sidebar)
variables.html = variables.html.replace('#column', 	cross_column)

# ============== Generate the pages
for filename in os.listdir(RAW_FOLDER):
	with open("{0}/{1}".format(RAW_FOLDER, filename), 'r') as f: 
		content = f.read()
		key   = get_mark(content, "k")
		desc  = get_mark(content, "d")
		title = get_mark(content, "t") 
		content = get_mark(content, "c")
	with open("pages/{0}".format(filename), 'w+') as f:
		html = variables.html
		html = html.replace('#desc', desc)
		html = html.replace('#keys', key)
		html = html.replace('#title', title + " - Gl&#225;dio C&#237;trico")
		html = html.replace('#page', title)
		html = html.replace('#content', content)
		f.write(html)

print("Done.")