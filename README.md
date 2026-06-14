# Gládio Cítrico

A lab to my tests written in Jekyll. [Click here](https://hermespasser.github.io) to access the website.

## Installation

This site depends on ruby 3.x. Specifically it was tested last with version 3.2.3.

If you're under linux, follow the script below.

```sh
# Make sure devkit is installed. Refer to https://jekyllrb.com/docs/installation/ubuntu/
# if problems arise
apt install ruby-dev

# Make sure GEM_HOME is set and is set to the current user gem home
export GEM_HOME="$(ruby -e 'puts Gem.user_dir')"
export PATH="$PATH:$GEM_HOME/bin"
gem install bundler
bundler install

bundle exec jekyll serve --livereload
```
