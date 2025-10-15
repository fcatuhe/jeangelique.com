Rails.application.routes.draw do
  get "/.well-known/*", to: ->(_env) { [ 204, {}, [] ] }

  root "pages#show", slug: "index"
  get "/*slug", to: "pages#show", as: :page
end
