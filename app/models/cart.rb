class Cart < ApplicationRecord
  belongs_to :user
  has_many :cart_items, dependent: :destroy
  has_many :snacks, through: :cart_items
  # has_and_belongs_to_many :snacks
end
