# Add a Jekyll header to the .MD files from github

unless ARGV[0]
	puts "Version missing"
	exit 0
end

text = <<END
---
title: Ramu #{ARGV[0]} doc
pagename: ramu
keywords: ramu, game engine, doc, documentation
description: Ramu 0.7b doc.
show-comments: false

layout: default
---
[doc home](home) &#8226; [Ramu](../)  

END

wiki_folder = "wiki-#{ARGV[0]}"
Dir.entries(wiki_folder).each do |file|
	next if file == $0 or File.directory?(file)
	
	File.open(File.join(wiki_folder, file), 'a+') do |f|
		ftxt = f.read
		
		next if ftxt.include?(text)

		f.truncate(0)
		f.write text + ftxt
	end
end
