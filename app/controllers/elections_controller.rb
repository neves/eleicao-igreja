class ElectionsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]
  before_action :single_vote!, only: [:new, :create]

  def new
    @roles_with_candidates = Role.all.includes(:candidates)
  end

  def show
    redirect_to action: :new unless current_user.votes?
  end

  def result
    @roles_with_candidates = Role.all.includes(:candidates)
  end

  def create
    current_user.votes = params[:election]
    current_user.save!
    head :ok
  end

  def destroy
    User.clear_votes
    redirect_back fallback_location: election_path
  end

  private

  def single_vote!
    redirect_to action: :show if current_user.votes?
  end
end
