import xml.etree.ElementTree as ET
import tkinter as TK
from   tkinter.constants import *

if __name__ == "__main__":
	window = TK.Tk()
	window.minsize(width = 500, height = 400)
	
	lbName = TK.Label(window, text="title").grid(row=0, column=0, sticky=W)
	txtName = TK.Entry(window, width=40).grid(row=0, column=1, sticky=W)
	cbShowTitle = TK.Checkbutton(window, text="show title").grid(row=0, column=2, sticky=W)
	cbShowComment = TK.Checkbutton(window, text="show commentaries").grid(row=0, column=3, sticky=W)

	lbLink = TK.Label(window, text="linkname").grid(row=1, column=0, sticky=W)
	txtLink = TK.Entry(window, width=40).grid(row=1, column=1, sticky=W)

	lbDesc = TK.Label(window, text="description").grid(row=2, column=0, sticky=W)
	txtDesc = TK.Entry(window, width=40).grid(row=2, column=1, sticky=W)

	lbKey = TK.Label(window, text="keywords").grid(row=3, column=0, sticky=W)
	txtKey = TK.Entry(window, width=40).grid(row=2, column=1, sticky=W)

	lbCont = TK.Label(window, text="content").grid(row=4, column=0, sticky=W)
	txtCont = TK.Text(window,  width=30, height = 10).grid(row=4, column=1, sticky=W)
	
	# Add button here...
	
	window.mainloop()