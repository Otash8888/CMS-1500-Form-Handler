
Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      resources :recipients
      post 'auth/login', to: 'users#login'
      post 'auth/register', to: 'users#register'
      post 'create/recipients', to: 'recipients#create'
      get 'users/:id', to: 'users#show'
      get 'authorize_token', to: 'users#authorize_token'
    end
  end
end
