class CreateCartItems < ActiveRecord::Migration[6.1]
  def change
    create_table :cart_items do |t|
      t.bigint "cart_id", null: false
      t.bigint "snack_id", null: false
      t.integer :quantity

      t.timestamps
    end
  end
end
