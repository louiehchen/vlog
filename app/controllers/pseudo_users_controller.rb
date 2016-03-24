class PseudoUsersController < ApplicationController

	before_action :load_pseudo_user, only: [:create]

	def create
		@pseudo_user.assign_attributes(pseudo_user_params)
		@phone = Phone.new(number: params[:number])
		if @pseudo_user.save && @phone.save
			@pseudo_user.phones << @phone 
			flash[:success] = "All set! We'll send you a text if it's going to rain"
			redirect_to :back
		else
			flash[:error] = "Hmmm something went wrong..."
			redirect_to :back
		end
	end


	private

	def pseudo_user_params
		params.require(:pseudo_user).permit(:city, :lat, :lon, :name, :email, :phone_id)
	end

end