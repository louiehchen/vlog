class ReubensController < ApplicationController

  def index
    # @reubens = Reuben.all
    # render json: @reubens
  end

  def all_reubens
    @reubens = Reuben.all
    render json: @reubens
  end

  def show
    @reuben = Reuben.find(params[:id])
  end

  def new
    @reuben = Reuben.new
  end

end
