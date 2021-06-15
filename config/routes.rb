Rails.application.routes.draw do
  resources :invitations
  devise_for :users
  root to: 'home#index'
  
  namespace :admin do
    root to: 'dashboard#show'
    resources :patients
  end
end
