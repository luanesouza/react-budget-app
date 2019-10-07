class CreateExpenses < ActiveRecord::Migration[5.2]
  def change
    create_table :expenses do |t|
      t.string :type
      t.integer :total
      t.integer :user_id
      t.integer :account_id

      t.timestamps
    end
  end
end
