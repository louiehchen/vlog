class Apps::WeatherController < ApplicationController

	before_action :load_pseudo_user, only: [:index, :get_weather_data]

	def index
	end

	def get_weather_data
		test_data = WeatherHelper.get_weather_by_ip(@pseudo_user)
		render text: test_data
	end

end