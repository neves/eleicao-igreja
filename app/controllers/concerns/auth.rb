module Auth
  extend ActiveSupport::Concern
  
  included do
    before_action :require_login
    helper_method :current_user, :logged_in?, :admin?
  end

  private

  def require_login
    redirect_to session_path unless logged_in?
  end

  def current_user
    User.find_by_id(current_user_id)
  end

  def current_user_id
    session[:user_id]
  end

  def logged_in?
    !! current_user_id
  end

  def admin?
    return current_user_id === 1
  end
end
