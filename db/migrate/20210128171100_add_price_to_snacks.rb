class AddPriceToSnacks < ActiveRecord::Migration[6.1]
  def change
    add_column :snacks, :price, :integer
  end
end
