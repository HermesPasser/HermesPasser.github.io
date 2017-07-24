# Gládio Cítrico site constructor
# by Hermes Passer in 07/2017 with python3
# ==========================================
# Folders:
#	pages  - autogenered completed pages
#	pieces - contain the code to be pasted in output file
#	raw_pages - content of page without html structure
# The first line of a document in raw folder will be the title of page.
# 

VAR_FOLDER = "pieces"
RAW_FOLDER = "raw_pages"

import os
import sys; sys.path.insert(0, "./" + VAR_FOLDER)
import variables

# print(variables.html)

variables.html = variables.html.format(
	"../images/favicon.ico",# shortcut ico
	"../pieces/style.css",	# style
	"../pieces/script.js",	# script
	"{0}",					# title
	variables.cross_column,	# cross-column
	"{1}",					# content
	variables.sidebar		# sidebar
)

print("Gládio Cítrico site constructor.")

for filename in os.listdir(RAW_FOLDER):
	with open("{0}/{1}".format(RAW_FOLDER, filename), 'r') as f: 
		title = f.readline()
		next(f)
		content = f.read()
	with open("pages/{0}".format(filename), 'w+') as f:
		content = "<h1>" + title + "</h1>\n<br />\n" + content
		f.write(variables.html.format(title + " - Gl&#225;dio C&#237;trico", content))

print("Done.")