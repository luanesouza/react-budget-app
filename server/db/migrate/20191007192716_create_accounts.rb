class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.integer :balance
      t.integer :budget_balance

      t.timestamps
    end
  end
end
