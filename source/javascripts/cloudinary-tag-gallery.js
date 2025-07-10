;(async () => {
  // Step 1: Load and populate DOM with Cloudinary content
  await (async () => {
    const gallery = document.getElementById("gallery")
    const tag = gallery.dataset.cloudinaryTag

    const url = `https://res.cloudinary.com/jeangelique/image/list/${tag}.json`
    const response = await fetch(url)
    const data = await response.json()

    while (gallery.firstChild) {
      gallery.removeChild(gallery.firstChild)
    }

    const sortedImages = data.resources.sort((a, b) => a.public_id.localeCompare(b.public_id))

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
      gallery.appendChild(link)
    })
  })()

  // Step 2: Import gallery after DOM is populated
  const currentScript = document.querySelector('script[data-gallery-path]')
  const galleryPath = currentScript.dataset.galleryPath
  import(galleryPath)
})()
