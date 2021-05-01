Rails.application.routes.draw do
  root 'pages#index'
  namespace :api do
    namespace :v1 do
      resources :airlines, param: :slug
      resources :reviews, only: [:create, :destroy]
    end
  end

  # if you url is not defined, you go back to index
  get '*path', to: 'pages#index', via: :all
end
