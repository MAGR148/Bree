Rails.application.routes.draw do
  resources :invitations
  resources :aliments
  resources :aliment_groups
  devise_for :users
  root to: 'home#index'
  
  namespace :admin do
    root to: 'dashboard#show'
    
    resources :recipes

    resources :patients do
      resources :plans

      namespace :operations do
        resources :harris
        resources :mifflins
      end
      
      resources :calories
      resources :macros
      resources :group_portions
    end
  end
end
