Rails.application.routes.draw do
  resources :cart_items
  resource :carts do
    member do
      post "addToCart"
    end
  end
  resources :flavors
  resources :users
  resources :snacks
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
