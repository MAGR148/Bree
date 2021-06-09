Rails.application.routes.draw do
  resources :invitations
  resources :patients
  devise_for :users
  root to: 'home#index'
end
