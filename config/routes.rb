Rails.application.routes.draw do
  root to: 'page#home'
  get '/chapter-three', to: 'page#chapter-three'
  get '/todo', to: 'page#todo'
  resources :posts
end
