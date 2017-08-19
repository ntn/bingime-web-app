require 'open-uri'
require 'json'

class PagesController < ApplicationController
    def home
    end
    def to_s
	  attributes.each_with_object("") do |attribute, result|
	    result << "#{attribute[1].to_s} "
		end
	end

end
