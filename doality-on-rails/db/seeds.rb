# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


todos = Todo.create([
  {title: 'Burn Javascript', body: 'Find flammable flash drive', done: false},
  {title: "Fight at Denny's", body: '3AM. Parking Lot.', done: false},
  {title: '#{\}#{doality-on-rails_development.execute} <<-SQL DROP DATABASE ${doality-on-rails_development}; SQL',
  body: 'Whoops.', done: false},
  {title: 'Write a Todo', body: 'Yay, that was easy!', done: true},
  {title: 'Write better seeds', body: "I'm running out of material", done: false},
  {title: "Marlene's Todo List", body: 'Shuffleboard, Bridge, Learning The Google', done: false},
  {title: 'Oh darn', body: 'I think I got the last Todo wrong', done: false},
  {title: 'Compliment someone', body: 'Great for mental health :)', done: false},
  ])
