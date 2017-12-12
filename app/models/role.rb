class Role < ApplicationRecord
  has_many :candidates, class_name: 'User'
  def to_s
    title
  end
end
