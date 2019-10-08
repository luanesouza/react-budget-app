# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([{
  name: 'Peter',
  email: 'peter@email.com',
  username: 'p_p'
  },
  {
  name: 'Paul',
  email: 'paul@email.com',
  username: 'p_pa'
  },
  {
  name: 'Danielle',
  email: 'dan@email.com',
  username: 'dan'
  },
  {
  name: 'Carol',
  email: 'Carol@email.com',
  username: 'ca_rol'
  }])

account1 = Account.create(balance:3000, budget_balance: 2000, user_id: 1)
account2 = Account.create(balance:9000, budget_balance: 200, user_id: 3)
account3 = Account.create(balance:1000, budget_balance: 50, user_id: 2)

expense1 = Expense.create(category: 'brunch', total: 200, user_id: 1, account_id: account1.id)

p '------------------ seed done --------------------------'
