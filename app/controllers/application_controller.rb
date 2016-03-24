class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def load_pseudo_user
  	@pseudo_user = PseudoUser.new
  	gather_lat_lon(@pseudo_user)
  end

  def gather_lat_lon(sudo_user)
  	begin 
  		loc = request.location
  		sudo_user.assign_attributes(lat: loc.latitude, lon: loc.longitude)
  	rescue => e
  		Rails.logger.error('Issue with geocoder:' + e.message)
  	end
  end
  
end
