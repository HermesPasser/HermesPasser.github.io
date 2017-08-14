# Gládio Cítrico site constructor
				# <a href="">Tileset Converter MV</a><br>
				# <a href="">Manga Host Downloader</a><br>
				# <a href="">BakaStuki Extractor</a><br>
				# <a href="">Duplicate Bookmarks Remover</a><br>
				
				# <p>Game</p><br>
				# <a href="">Dev'lusion</a><br>
				
				# <p>Other</p><br>
				# <a href="">Chess js</a><br>
				# <a href="">SISEstoque</a><br>
				# <a href="">TecInfoActivities</a><br>
				# <a href="">Unity Mechanics and Utilities</a><br>

# ============== sidebar
sidebar = """
<br>
				<a href="http://gladiocitrico.blogspot.com.br/">Brother blog (in portuguese)</a><br>
				<p>Software</p>
				<a href="mangafoxdownloader.html">MangaFox Downloader</a><br>
				<a href="hermesmangadownloader.html">Hermes Manga(eden) Downloader</a><br>
				<a href="updatewp.html">Update by Webpage</a><br>
"""

# ============== HTML
html = """
<html lang="en">
	<head>
		<meta charset="utf-8"/>
		<meta name="description" content="#desc" />
		<meta name="viewport" 	 content="width=device-width, initial-scale=1">
		<meta name="keywords" 	 content="#keys"/>
		
		<link rel="shortcut    icon" href="#icon" />
		<link rel="stylesheet" type="text/css" href="#css" />
		
		<script type="text/javascript" src="#js"></script>
		<title>#title</title>
	</head>
	
	<body onload="load();" onresize="load()">
		<header></header>
		
		<section id="cross-column">
			#column
		</section>
		
		<main id="main"></section>
			<section id="content">
				<h1>#page</h1>
				<br />
				#content
			</section>
			
			<section id="sidebar">
				#sidebar
			</section>
		</main>
		
		<footer>
			<small id="fooster-text">Gl&#225;dio C&#237;trico by Hermes Passer</small>
		</footer>
	</body>
</html>
"""