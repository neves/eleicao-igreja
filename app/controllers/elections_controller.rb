class ElectionsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]
  before_action :single_vote!, except: :show

  def new
    @roles_with_candidates = Role.all.includes(:candidates)
  end

  def show
    redirect_to action: :new unless current_user.votes?
  end

  def create
    current_user.votes = params[:election]
    current_user.save!
    head :ok
  end

  private

  def single_vote!
    redirect_to action: :show if current_user.votes?
  end
end
