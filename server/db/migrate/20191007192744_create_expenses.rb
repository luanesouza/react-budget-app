class CreateExpenses < ActiveRecord::Migration[5.2]
  def change
    create_table :expenses do |t|
      t.string :type
      t.integer :total

      t.timestamps
    end
  end
end
