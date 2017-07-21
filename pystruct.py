# Pystruct - Gládio Cítrico site constructor
# by Hermes Passer in 07/2017 with python3
# ==========================================
# Folders:
#	pages  - autogenered completed pages
#	pieces - contain the code to be pasted in output file
#	raw    - content of page without html structure
# The first line of a document in raw folder will be the title of page.

import os

print("Pystruct - Gládio Cítrico site constructor.")
with open('pieces/head.html', 'r') as f: html_i = f.read()
with open('pieces/body.html', 'r') as f: html_e = f.read()

for filename in os.listdir("raw"):
	with open("raw/{0}".format(filename), 'r') as f: 
		title = f.readline()
		next(f)
		content = f.read()
	with open("pages/{0}".format(filename), 'w+') as f: 
		f.write("{0}\n{1}\n{2}".format(html_i.replace("#t", title), content, html_e))

print("Done.")
input()