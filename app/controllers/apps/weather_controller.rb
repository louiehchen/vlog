class Apps::WeatherController < ApplicationController

	before_action :load_pseudo_user, only: [:index]

	def index
		
	end

end