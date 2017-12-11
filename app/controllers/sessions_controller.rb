class SessionsController < ApplicationController
  skip_before_action :require_login

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to :root
    else
      flash[:error] = 'Usuário ou senha inválida'
      redirect_to session_path
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to session_path
  end
end
