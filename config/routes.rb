# frozen_string_literal: true

Rails.application.routes.draw do
  resources :invitations
  resources :aliments
  resources :aliment_groups

  devise_for :users
  root to: 'home#index'

  namespace :admin do
    root to: 'dashboard#show'

    resources :aliment_finders
    resources :recipes
    resources :duplicate_recipes, only: :edit
    resources :patients do
      namespace :operations do
        resources :harris
        resources :mifflins
      end

      resources :plans
      resources :calories
      resources :macros
      resources :group_portions
      resources :group_portion_times
      resources :patient_recipes
      resources :recipe_times
    end
  end
end
