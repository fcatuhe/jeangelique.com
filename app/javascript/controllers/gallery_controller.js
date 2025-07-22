import { Controller } from "@hotwired/stimulus"
import PhotoSwipeLightbox from "photoswipe-lightbox"
import PhotoSwipe from "photoswipe"
import "jquery"
import "justified-gallery"

const EXTERNAL_CSS_DEPENDENCIES = [
  "https://cdn.jsdelivr.net/npm/photoswipe@5/dist/photoswipe.css",
  "https://cdn.jsdelivr.net/npm/justifiedGallery@3/dist/css/justifiedGallery.min.css",
]

export default class extends Controller {
  static values = {
    tag: String,
    photos: Array,
  }

  async connect() {
    this.loadExternalCssDependencies()

    if (this.hasTagValue) {
      await this.loadCloudinaryContent()
    } else if (this.hasPhotosValue) {
      this.populateStaticGallery()
    }

    this.initializePhotoSwipe()
  }

  loadExternalCssDependencies() {
    const styleId = "gallery-external-css"

    if (!document.getElementById(styleId)) {
      const style = document.createElement("style")
      style.id = styleId
      style.textContent = EXTERNAL_CSS_DEPENDENCIES.map((url) => `@import url("${url}");`).join("\n")
      document.head.appendChild(style)
    }
  }

  async loadCloudinaryContent() {
    const tag = this.tagValue
    const url = `https://res.cloudinary.com/jeangelique/image/list/${tag}.json`

    try {
      const response = await fetch(url)
      const data = await response.json()

      this.clearGallery()
      this.populateCloudinaryGallery(data.resources)
    } catch (error) {
      console.error("Failed to load Cloudinary content:", error)
    }
  }

  populateStaticGallery() {
    this.clearGallery()
    this.photosValue.forEach((photo) => {
      const link = document.createElement("a")
      link.href = photo.src
      link.setAttribute("data-pswp-width", photo.width)
      link.setAttribute("data-pswp-height", photo.height)

      const img = document.createElement("img")
      img.src = photo.src
      img.srcset = photo.srcSet
      img.width = photo.width
      img.height = photo.height

      link.appendChild(img)
      this.element.appendChild(link)
    })
  }

  populateCloudinaryGallery(resources) {
    const sortedImages = resources.sort((a, b) => a.public_id.localeCompare(b.public_id))

    sortedImages.forEach((image) => {
      const publicId = image.public_id
      const width = image.width
      const height = image.height

      const src = `https://res.cloudinary.com/jeangelique/image/upload/c_limit,h_1920,w_1920/${publicId}`
      const srcSet = [
        `https://res.cloudinary.com/jeangelique/image/upload/c_limit,h_320,w_320/${publicId} 320w`,
        `https://res.cloudinary.com/jeangelique/image/upload/c_limit,h_640,w_640/${publicId} 640w`,
        `https://res.cloudinary.com/jeangelique/image/upload/c_limit,h_1024,w_1024/${publicId} 1024w`,
        `https://res.cloudinary.com/jeangelique/image/upload/c_limit,h_1920,w_1920/${publicId} 1920w`,
      ].join(", ")

      const link = document.createElement("a")
      link.href = src
      link.setAttribute("data-pswp-width", width)
      link.setAttribute("data-pswp-height", height)

      const img = document.createElement("img")
      img.src = src
      img.srcset = srcSet
      img.width = width
      img.height = height

      link.appendChild(img)
      this.element.appendChild(link)
    })
  }

  clearGallery() {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild)
    }
  }

  initializePhotoSwipe() {
    this.setupJustifiedGallery()
    this.setupPhotoSwipeLightbox()
  }

  setupJustifiedGallery() {
    window.jQuery("#gallery").justifiedGallery({
      rowHeight: 300,
      margins: 3,
      lastRow: "justify",
    })
  }

  setupPhotoSwipeLightbox() {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery",
      children: "a",
      pswpModule: PhotoSwipe,
      initialZoomLevel: "fit",
      secondaryZoomLevel: "fill",
      zoom: false,
      counter: false,
      loop: false,
    })

    lightbox.init()
  }
}
