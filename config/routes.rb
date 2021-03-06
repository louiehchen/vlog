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
  get '/apps' => 'welcome#apps'
  get '/reubens_json' => 'reubens#all_reubens'
  post '/mail' => 'mailer#contact_mailer'

  resources :reubens

  namespace :apps do
    resources :background, :only => [:index]
    resources :todo, :only => [:index]
    resources :boxdot, :only => [:index]
    resources :bouncy, :only => [:index]
    resources :ip, :only => [:index]
    resources :stopwatch, :only => [:index]
    resources :texty, :only => [:index]
    resources :confessions
    resources :zx_ball, only: [:index]
    post '/texty/send_text' => 'texty#send_text'
  end

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
