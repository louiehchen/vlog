class PostsController < ApplicationController
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

  private

  def post_params
    params.require(:post).permit(:url, :title, :description)
  end
end
