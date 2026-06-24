source "https://rubygems.org"

ruby "3.2.3"

# https://jekyllrb.com/docs/installation/windows/#auto-regeneration
gem "wdm", "~> 0.2.0", :install_if => Gem.win_platform?

# https://jekyllrb.com/docs/installation/windows/#time-zone-management
# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "webrick", ">=1.7"
gem "jekyll", ">=4.4.1"
