require 'byebug'

class Apps::ConfessionsController < ApplicationController

  def index
    @confession = Confession.new
  end

  def create
    @all_confessions = Confession.all
    @rand_index = rand(@all_confessions.length)
    @confession = Confession.new(confession_params)
    if @confession.save && request.xhr?
      @shared = @all_confessions[@rand_index]
      render partial: 'confession', locals: {body: @shared.body, owner: @shared.owner} and return
    end
    render inline: "Please share to recieve a confession..." and return
  end

  private

  def confession_params
    params.require(:confession).permit(:body, :owner)
  end

end