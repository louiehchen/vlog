class Apps::VoipController < ApplicationController

  def index
    @phone = Phone.new
  end

  def make_call
    begin
      @phone = Phone.new(phone_params)
      @phone.start_call(@phone.clean_number)
      @phone.save
      flash[:notice] = "We're calling you now!"
      redirect_to :back
    rescue
      flash[:notice] = "Hmmm something funky happened"
      redirect_to :back
    end
  end

  def connection
    @phone = Phone.new('6036821948')
    @phone.send_text(@phone.clean_number)
  end

  private

  def phone_params
    params.require(:phone).permit(:number)
  end

end