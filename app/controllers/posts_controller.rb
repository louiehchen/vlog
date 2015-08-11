class PostsController < ApplicationController

  before_action :require_login, only: [:new, :create, :edit, :update, :destroy]

  def new
    @post = Post.new
  end

  def create
    @admin = Admin.find(session["warden.user.admin.key"][0][0])
    @post = @admin.posts.new(post_params)
    if @post.save
      redirect_to root_path
    else
      flash[:notice] = "Please submit all information"
      redirect_to :back
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    @post.update_attributes(post_params)
    redirect_to @post
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    flash[:notice] = "Post was successfully destroyed"
    redirect_to root_path
  end

  private

  def require_login
    unless admin_signed_in?
      flash[:notice] = "You must be logged in to do that"
      redirect_to new_admin_session_path
    end
  end

  def post_params
    params.require(:post).permit(:url, :title, :description)
  end
end
