class ElectionController < ApplicationController
  def show
    @roles_with_candidates = Role.all.includes(:candidates)
  end
end
