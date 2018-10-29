Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do 
     resources :fighters, only: [:index, :create, :destroy, :update]
    end 
  end 
  root controller: :home, action: :index
end
