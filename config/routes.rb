Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, default: {format: :json} do
      resources :todos, only: [:index, :create, :update, :destroy] do
        resources :steps, only: [:create, :index]
      end
      resources :steps, only:[:update, :destroy]
  end
end
