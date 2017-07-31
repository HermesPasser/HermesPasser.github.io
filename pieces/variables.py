# Gládio Cítrico site constructor

# ============== sidebar
sidebar = """
<br>
				<a href="http://gladiocitrico.blogspot.com.br/">Brother blog (in portuguese)</a><br>
				<p>Software</p>
				<a href="mangafoxdownloader.html">MangaFox Downloader</a><br>
				<a href="">Manga Host Downloader</a><br>
				<a href="">Tileset Converter MV</a><br>
				<a href="">BakaStuki Extractor</a><br>
				<a href="updatewp.html">Update by Webpage</a><br>
				<a href="">Duplicate Bookmarks Remover</a><br>
				<a href="">This page</a><br><br>
				
				<p>Game</p><br>
				<a href="">Dev'lusion</a><br>
				
				<p>Other</p><br>
				<a href="">Chess js</a><br>
				<a href="">SISEstoque</a><br>
				<a href="">TecInfoActivities</a><br>
				<a href="">Unity Mechanics and Utilities</a><br>
"""

# ============== HTML
html = """
<html lang="en">
	<head>
		<meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="shortcut icon" href="{0}" />
		<link rel="stylesheet" type="text/css" href="{1}" />
		<script type="text/javascript" src="{2}"></script>
		<title>{3}</title>
	</head>
	
	<body onload="load();" onresize="load()">
		<header></header>
		
		<section id="cross-column">
			{4}
		</section>
		
		<main id="main"></section>
			<section id="content">
				{5}
			</section>
			
			<section id="sidebar">
				{6}
			</section>
		</main>
		
		<footer>
			<small id="fooster-text">Gl&#225;dio C&#237;trico by Hermes Passer</small>
		</footer>
	</body>
</html>
"""