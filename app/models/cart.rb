class Cart < ApplicationRecord
  belongs_to :user
  has_many :cart_items
  has_many :snacks, through: :cart_items
end
