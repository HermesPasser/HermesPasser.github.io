# Gládio Cítrico site constructor

# ============== sidebar
sidebar = """
<br>
			<a href="http://gladiocitrico.blogspot.com.br/">Brother blog (in portuguese)</a></li>
			<h3>Software</h3> 
			<ul>
				<li><a href="hermesmangadownloader.html">Hermes Manga Downloader</a></li>
				<li><a href="mangafoxdownloader.html">MangaFox Downloader</a></li>
				<li><a href="tilecon.html">Tileset Converter MV</a></li>
				<li><a href="bakatsuki-extractor.html">BakaStuki Extractor</a></li>
				<li><a href="ramu.html">Ramu</a></li>
				<!-- Remove soon? -->
				<li><a href="updatewp.html">Update by Webpage</a></li>
			</ul>
"""
				# <a href="">Duplicate Bookmarks Remover</a><br>
				
				# <p>Game</p><br>
				# <a href="">Dev'lusion</a><br>
				
				# <p>Other</p><br>
				# <a href="">SISEstoque</a><br>
				# <a href="">TecInfoActivities</a><br>
				# <a href="">Unity Mechanics and Utilities</a><br>
				
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
		<header>
			<ul>
				#column
			</ul>
		</header>
		
		<main id="main"></section>
			<h1>#page</h1>
			#content
		</main>
		
		<aside>
			#sidebar
		</aside>
		
		<footer>
			<small id="fooster-text">Gl&#225;dio C&#237;trico by Hermes Passer</small>
		</footer>
	</body>
</html>
"""