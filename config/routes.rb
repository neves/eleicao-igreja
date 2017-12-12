Rails.application.routes.draw do
  resources :users
  resources :roles
  resource :session
  resource :election
  root 'elections#show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
