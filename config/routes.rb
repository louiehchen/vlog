Rails.application.routes.draw do


  devise_for :admins, controllers: { sessions: 'admins/sessions' }

  devise_for :users, controllers: { sessions: "users/sessions" }

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'welcome#index'
  resources :posts

  get '/posts_json' => 'posts#all_posts'
  get '/projects' => 'projects#index'
  get '/about' => 'welcome#about'
  get '/apps' => 'apps#index'

  namespace :apps do
    resources :background, :only => [:index]
    resources :talking, :only => [:index]
  end

end
