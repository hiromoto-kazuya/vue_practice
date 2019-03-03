Rails.application.routes.draw do
  root to: 'page#home'
  resources :posts
end
