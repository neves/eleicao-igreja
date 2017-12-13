require 'group_count_votes'

class User < ApplicationRecord
  has_secure_password
  belongs_to :role, optional: true
  validates :email, :name, presence: true
  serialize :votes, JSON

  scope :votes, -> { where.not(votes: nil) }

  # returns a hash where the user_id is the key and the number of votes is the value
  def self.election_result
    group_count_votes(votes.pluck(:votes))
  end

  def self.clear_votes
    User.update_all(votes: nil)
  end

  def votes_received
    self.class.election_result[id]
  end
end
