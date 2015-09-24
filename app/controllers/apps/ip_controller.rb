class Apps::IpController < ApplicationController

  def index
    @ip = request.remote_ip
  end

end