class CreateSnacks < ActiveRecord::Migration[6.1]
  def change
    create_table :snacks do |t|
      t.string "name"
      t.bigint "user_id", null: false
      t.string "category"
      t.string "brand"
      t.string "type"
      t.string "origin"

      t.timestamps
    end
  end
end
