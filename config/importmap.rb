# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"

pin "bootstrap", to: "https://cdn.jsdelivr.net/npm/bootstrap@5/dist/js/bootstrap.min.js"
pin "@popperjs/core", to: "https://cdn.jsdelivr.net/npm/@popperjs/core@2/dist/umd/popper.min.js"

# Gallery dependencies
pin "photoswipe", to: "https://cdn.jsdelivr.net/npm/photoswipe@5/dist/photoswipe.esm.min.js"
pin "photoswipe-lightbox", to: "https://cdn.jsdelivr.net/npm/photoswipe@5/dist/photoswipe-lightbox.esm.min.js"
pin "jquery", to: "https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js"
pin "justified-gallery", to: "https://cdn.jsdelivr.net/npm/justifiedGallery@3/dist/js/jquery.justifiedGallery.min.js"
