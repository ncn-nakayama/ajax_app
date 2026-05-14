class PostsController < ApplicationController
  def index
    @posts = Post.order(id: "DESC")
  end

  def new
  end

  def create
    # 新たに投稿されたメモ内容を変数postに格納
    post = Post.create(content: params[:content])
    # 変数postの値を、postというキーとセットでJavascriptに送信
    render json:{ post: post }
  end
end
