class AddVotesToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :votes, :string
  end
end
