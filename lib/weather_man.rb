module WeatherMan

	BASE_URL = "http://api.openweathermap.org/data/2.5/weather?"
	# "http://api.openweathermap.org/data/2.5/forecast?&units=imperial"

	def get_weather_by_ip(sudo_user)
		api_key = ENV['WEATHER_API_KEY']
		latitude = sudo_user.lat
		longitude = sudo_user.lon
		RestClient.get("#{BASE_URL}lat=#{latitude}&lon=#{longitude}&units=imperial&appid=#{api_key}")
	end

	def get_weather_by_city(sudo_user)
		
	end

end