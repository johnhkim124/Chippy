class Snack < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :flavors
  has_and_belongs_to_many :carts
end
