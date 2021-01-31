# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Flavor.destroy_all
Snack.destroy_all
User.destroy_all

@admin = User.create!(username: "john", email: "john@email.com", password: "123456")

puts "#{User.count} users created"

@chips = Snack.create(name: "Lays", user: @admin, brand: "Lays", category:"potato chip", origin: "U.S.", price: 2, img_url: "https://m.media-amazon.com/images/I/81vJyb43URL._AC_UL320_.jpg")
@candy = Snack.create(name: "Crunch", user: @admin, brand: "Nestle", category:"chocolate", origin: "U.S.", price: 2, img_url: "https://m.media-amazon.com/images/I/81vJyb43URL._AC_UL320_.jpg")
@popcorn = Snack.create(name: "Popper", user: @admin, brand: "Popper", category:"popcorn", origin: "U.S.", price: 2, img_url: "https://m.media-amazon.com/images/I/81vJyb43URL._AC_UL320_.jpg")
@gummy = Snack.create(name: "Gummy Bear", user: @admin, brand: "Sour Bears", category:"gummy", origin: "Canada", price: 4, img_url: "https://m.media-amazon.com/images/I/81vJyb43URL._AC_UL320_.jpg")
@popcorn = Snack.create(name: "Cheetos", user: @admin, brand: "Cheetos", category:"cheese", origin: "U.S.", price: 3, img_url: "https://m.media-amazon.com/images/I/81vJyb43URL._AC_UL320_.jpg")
@popcorn = Snack.create(name: "Skittles", user: @admin, brand: "Skittles", category:"hard candy", origin: "U.S.", price: 2, img_url: "https://m.media-amazon.com/images/I/81vJyb43URL._AC_UL320_.jpg")


puts "#{Snack.count} snacks created"

@sweet = Flavor.create(name: "sweet")
@salty = Flavor.create(name: "salty")
@bitter = Flavor.create(name: "bitter")
@sour = Flavor.create(name: "sour")
@umami = Flavor.create(name: "umami")

puts "#{Flavor.count} flavors created"
