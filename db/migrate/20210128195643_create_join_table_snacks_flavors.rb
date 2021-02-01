class CreateJoinTableSnacksFlavors < ActiveRecord::Migration[6.1]
  def change
    create_join_table :snacks, :flavors do |t|

    end
  end
end
