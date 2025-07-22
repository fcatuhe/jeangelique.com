Rails.application.routes.draw do
  root to: "pages#_show", slug: "index"
  get "/*slug", to: "pages#_show"
end
