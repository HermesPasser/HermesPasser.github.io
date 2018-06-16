# A simple script to switch the gemfile of development to production

def gem_text is_dev
	return [
		'source "https://rubygems.org"',
		is_dev ? 'gem "jekyll", "~> 3.8.2"' : 'gem "github-pages", ">=104", group: :jekyll_plugins',
		'gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]',
		'gem "wdm", "~> 0.1.0" if Gem.win_platform?'
	]
end

def write is_dev
	File.open("Gemfile", "w") do |f|
		f.write(gem_text(is_dev).join("\n"))
	end
end

case ARGV[0]
when '-d'
	write true
	puts 'build with -d'
when '-p'
	puts 'build with -p'
	write false
else
	puts '-d set up for local development.'
	puts '-p set up for production.'
end
