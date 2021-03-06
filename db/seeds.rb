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
Cart.destroy_all
CartItem.destroy_all


@admin = User.create!(username: "john", email: "john@email.com", password: "123456")

puts "#{User.count} users created"

@lays = Snack.create!(name: "Lays", user: @admin, brand: "Lays", category:"potato chip", origin: "U.S.", price: 2, img_url: "https://m.media-amazon.com/images/I/81vJyb43URL._AC_UL320_.jpg")
@crunch = Snack.create!(name: "Crunch", user: @admin, brand: "Nestle", category:"chocolate", origin: "U.S.", price: 2, img_url: "https://m.media-amazon.com/images/I/816zWCVMkJL._AC_UL320_.jpg")
@popcorn = Snack.create!(name: "Boom Chicka Pop", user: @admin, brand: "Angie's", category:"popcorn", origin: "U.S.", price: 2, img_url: "https://m.media-amazon.com/images/I/81c6w3y22RL._AC_UL320_.jpg")
@gummy = Snack.create!(name: "Haribo", user: @admin, brand: "Haribo", category:"gummy", origin: "Canada", price: 4, img_url: "https://m.media-amazon.com/images/I/51P-pDGMnGL._AC_UL320_.jpg")
@cheetos = Snack.create!(name: "Cheetos", user: @admin, brand: "Cheetos", category:"cheese", origin: "U.S.", price: 3, img_url: "https://m.media-amazon.com/images/I/91Mduj3AZOL._AC_UL320_.jpg")
@skittles = Snack.create!(name: "Skittles", user: @admin, brand: "Skittles", category:"hard candy", origin: "U.S.", price: 2, img_url: "https://m.media-amazon.com/images/I/71R0FuFKivL._AC_UL320_.jpg")
@kitKatSweetPotato = Snack.create!(name: "Kit Kat Sweet Potato", user: @admin, brand: "Kit-Kat", category:"chocolate", origin: "Japan", price: 2, img_url: "https://m.media-amazon.com/images/I/71DPa9fHP5L._AC_UL320_.jpg")
@kitKatStrawberry = Snack.create!(name: "Kit Kat Strawberry", user: @admin, brand: "Kit-Kat", category:"chocolate", origin: "Japan", price: 2, img_url: "https://m.media-amazon.com/images/I/61HsL3Y-BkL._AC_UL320_.jpg")
@Orion = Snack.create!(name: "Orion Sweet & Salty", user: @admin, brand: "Orion", category:"sweet cracker", origin: "Korea", price: 2, img_url: "https://m.media-amazon.com/images/I/61SGkyE918L._AC_UL320_.jpg")
@sourpatch = Snack.create!(name: "Sour Patch Kids", user:@admin, brand: "Sour Patch Kids", category:"sour candy", origin: "U.S.", price: 3, img_url: "https://m.media-amazon.com/images/I/81SFEy-bzlL._AC_UL320_.jpg")
@snakyard = Snack.create!(name: "Shitake Mushrooms", user:@admin, brand: "Snak Yard", category: "mushroom snack", origin: "U.S.", price: 5, img_url:"https://m.media-amazon.com/images/I/71J4R-GSiKL._AC_UL320_.jpg")
@lindt = Snack.create!(name: "Lindt Dark Chocolate", user:@admin, brand: "Lindt", category:"dark chocolate", origin:"Switzerland", price: 4, img_url:"https://m.media-amazon.com/images/I/71vVSDRa-ZL._AC_UL320_.jpg")
@edamame = Snack.create!(name: "Edamame Beans", user:@admin, brand: "The Only Bean", category:"nuts", origin:"U.S.", price: 4, img_url:"https://m.media-amazon.com/images/I/71YQL8bAIPL._AC_UL320_.jpg")
@oreos = Snack.create!(name: "Oreos", user:@admin, brand: "Oreos", category:"cookie", origin:"U.S.", price: 3, img_url:"https://m.media-amazon.com/images/I/81cIZ8VCzML._AC_UL320_.jpg")
@biscolata = Snack.create!(name: "Biscolata Lemon Cookies", user:@admin, brand: "Biscolata", category:"cookie", origin:"U.S.", price: 5, img_url:"https://m.media-amazon.com/images/I/61KBAXlOO3L._AC_UL320_.jpg")
@pocky = Snack.create!(name: "Pocky Strawberry", user:@admin, brand: "Pocky", category:"cookie", origin:"Japan", price: 3, img_url:"https://m.media-amazon.com/images/I/81Z0eLtu3AL._AC_UL320_.jpg")




puts "#{Snack.count} snacks created"

@sweet = Flavor.create!(name: "sweet")
@salty = Flavor.create!(name: "salty")
@bitter = Flavor.create!(name: "bitter")
@sour = Flavor.create!(name: "sour")
@umami = Flavor.create!(name: "umami")

puts "#{Flavor.count} flavors created"

@lays.flavors.push(@salty, @umami)
@crunch.flavors.push(@sweet)
@popcorn.flavors.push(@salty, @umami)
@gummy.flavors.push(@sweet)
@cheetos.flavors.push(@salty)
@skittles.flavors.push(@sweet)
@kitKatSweetPotato.flavors.push(@sweet)
@Orion.flavors.push(@sweet, @salty)
@sourpatch.flavors.push(@sweet, @sour, @bitter)
@snakyard.flavors.push(@salty, @umami)
@lindt.flavors.push(@sweet, @bitter)
@edamame.flavors.push(@salty, @umami)
@oreos.flavors.push(@sweet)
@biscolata.flavors.push(@sweet, @sour, @bitter)
@pocky.flavors.push(@sweet)

@cartTest = Cart.create!(user_id: @admin.id)
puts "#{Cart.count} carts created"

@cartItem = CartItem.create!(cart: @cartTest, snack: @lays, quantity: 2)
puts "#{CartItem.count} cart items created"
