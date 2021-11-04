# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.1'

gem 'bootsnap', '>= 1.4.4', require: false
gem "chartkick"
gem 'data_migrate'
gem 'devise'
gem 'honeybadger'
gem "hotwire-rails", "~> 0.1.3"
gem 'interactor'
gem 'jbuilder', '~> 2.7'
gem 'pg', '~> 1.1'
gem 'pg_search'
gem 'puma', '~> 5.5'
gem 'rails', '~> 6.1.4'
gem 'sass-rails', '>= 6'
gem 'turbolinks', '~> 5'
gem 'turbo-rails'
gem 'webpacker', '~> 5.0'

group :development, :test do
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'rubocop', require: false
  gem 'rubocop-minitest', require: false
  gem 'rubocop-performance', require: false
  gem 'rubocop-rails', require: false
end

group :development do
  gem 'annotate'
  gem 'dotenv-rails'
  gem 'listen', '~> 3.7'
  gem 'pry-byebug'
  gem 'pry-rails'
  gem 'rack-mini-profiler', '~> 2.3'
  gem 'spring'
  gem 'web-console', '>= 4.1.0'
end

group :test do
  gem 'capybara', '>= 3.26'
  gem 'selenium-webdriver'
  gem 'webdrivers'
end
