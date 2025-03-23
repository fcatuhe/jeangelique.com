// Load stylesheets
const stylesheets = [
  "https://cdn.jsdelivr.net/npm/photoswipe@5.3.8/dist/photoswipe.css",
  "https://cdnjs.cloudflare.com/ajax/libs/justifiedGallery/3.8.1/css/justifiedGallery.min.css",
]

stylesheets.forEach((href) => {
  const link = document.createElement("link")
  link.rel = "stylesheet"
  link.href = href
  document.head.appendChild(link)
})

// Import scripts
import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
import "https://cdnjs.cloudflare.com/ajax/libs/justifiedGallery/3.8.1/js/jquery.justifiedGallery.min.js"

import PhotoSwipeLightbox from "https://cdn.jsdelivr.net/npm/photoswipe@5.3.8/dist/photoswipe-lightbox.esm.min.js"

// Initialize JustifiedGallery
$("#gallery").justifiedGallery({
  rowHeight: 300,
  margins: 3,
  lastRow: "justify",
})

// Initialize PhotoSwipe
const lightbox = new PhotoSwipeLightbox({
  gallery: "#gallery",
  children: "a",
  pswpModule: () => import("https://cdn.jsdelivr.net/npm/photoswipe@5.3.8/dist/photoswipe.esm.min.js"),
  initialZoomLevel: "fit",
  secondaryZoomLevel: "fill",
  zoom: false,
  counter: false,
  loop: false,
})

lightbox.init()
