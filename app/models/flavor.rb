class Flavor < ApplicationRecord
  has_and_belongs_to_many :snacks
end
