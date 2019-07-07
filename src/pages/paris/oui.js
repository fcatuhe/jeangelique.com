import React, { useState, useCallback } from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'

import Layout from '../../components/layout'

const ParisOuiPage = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((_event, { index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <Layout skipContainer className="font-family-cinzel">
      <div className="py-10vh bg-primary text-white">
        <div className="container text-center">
          <h1>Nous sommes mariés !</h1>
        </div>
      </div>

      <div>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>

      <div className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h3>Merci !</h3>
        </div>
      </div>
    </Layout>
  )
}

export default ParisOuiPage

const photos = [
  {
    src: '/images/oui/31052019_Jeangelique - 000.jpg',
    width: 4016,
    height: 6016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 001a.jpg',
    width: 5651,
    height: 3769,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 002.jpg',
    width: 3514,
    height: 5267,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 003a.jpg',
    width: 5416,
    height: 3615,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 004.jpg',
    width: 5217,
    height: 3483,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 005.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 006.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 006a.jpg',
    width: 5788,
    height: 3863,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 006b.jpg',
    width: 4016,
    height: 6016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 006c.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 006d.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 006e.jpg',
    width: 5509,
    height: 3677,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 006f.jpg',
    width: 4455,
    height: 2973,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 006g.jpg',
    width: 5734,
    height: 3829,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 7.jpg',
    width: 5719,
    height: 3817,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 8.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 9.jpg',
    width: 5908,
    height: 3944,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 10.jpg',
    width: 4723,
    height: 3155,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 11.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 12.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 13.jpg',
    width: 5407,
    height: 3609,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 14.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 15.jpg',
    width: 4719,
    height: 3149,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 16.jpg',
    width: 5316,
    height: 3549,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 17.jpg',
    width: 5251,
    height: 3502,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 18.jpg',
    width: 4016,
    height: 6016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 19.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 20.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 21.jpg',
    width: 3659,
    height: 5482,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 22.jpg',
    width: 5655,
    height: 3775,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 23.jpg',
    width: 5257,
    height: 3508,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 23a.jpg',
    width: 934,
    height: 1244,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 24.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 25.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 26.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 27.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 27a.jpg',
    width: 2217,
    height: 1478,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 28.jpg',
    width: 2681,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 29.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 30.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 30b.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 30c.jpg',
    width: 3994,
    height: 5984,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 31.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 32.jpg',
    width: 5415,
    height: 3613,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 33.jpg',
    width: 5025,
    height: 3355,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 34.jpg',
    width: 5120,
    height: 3418,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 35.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 36.jpg',
    width: 5524,
    height: 3687,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 37.jpg',
    width: 5739,
    height: 3829,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 38.jpg',
    width: 5226,
    height: 3489,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 39.jpg',
    width: 5504,
    height: 3672,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 40.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 41.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 42.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 43.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 44.jpg',
    width: 5838,
    height: 3900,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 45.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 46.jpg',
    width: 5893,
    height: 3934,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 47.jpg',
    width: 5584,
    height: 3699,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 48.jpg',
    width: 5299,
    height: 3567,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 49.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 50.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 51.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 52.jpg',
    width: 5398,
    height: 3604,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 53.jpg',
    width: 5483,
    height: 3660,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 54.jpg',
    width: 5325,
    height: 3472,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 55.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 56.jpg',
    width: 5320,
    height: 3552,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 57.jpg',
    width: 5634,
    height: 3760,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 58.jpg',
    width: 5650,
    height: 3771,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 59.jpg',
    width: 5510,
    height: 3678,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 60.jpg',
    width: 5816,
    height: 3869,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 60a.jpg',
    width: 1552,
    height: 1164,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 61.jpg',
    width: 3285,
    height: 4918,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 62.jpg',
    width: 3506,
    height: 5253,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 63.jpg',
    width: 5788,
    height: 3863,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 64.jpg',
    width: 5860,
    height: 3912,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 65.jpg',
    width: 5357,
    height: 3574,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 66.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 67.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 68.jpg',
    width: 5374,
    height: 3588,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 69.jpg',
    width: 5768,
    height: 3851,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 70.jpg',
    width: 5235,
    height: 3496,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 71.jpg',
    width: 5590,
    height: 3730,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 72.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 73.jpg',
    width: 5562,
    height: 3713,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 74.jpg',
    width: 4016,
    height: 6016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 75.jpg',
    width: 5531,
    height: 3694,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 76.jpg',
    width: 5532,
    height: 3690,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 77.jpg',
    width: 5444,
    height: 3633,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 77a.jpg',
    width: 900,
    height: 1200,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 78.jpg',
    width: 5650,
    height: 3770,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 79.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 80.jpg',
    width: 4016,
    height: 6016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 81.jpg',
    width: 4016,
    height: 6016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 82.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 83.jpg',
    width: 4016,
    height: 6016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 84.jpg',
    width: 4016,
    height: 6016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 85.jpg',
    width: 5472,
    height: 3653,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 86.jpg',
    width: 5915,
    height: 3949,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 87.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 88.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 89.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 90.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 91.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 92.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 93.jpg',
    width: 5253,
    height: 3506,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 94.jpg',
    width: 5400,
    height: 3606,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 95.jpg',
    width: 5512,
    height: 3680,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 96.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 97.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 98.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 98a.jpg',
    width: 1108,
    height: 1478,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 99.jpg',
    width: 3851,
    height: 5769,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 100.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 101.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 102.jpg',
    width: 5549,
    height: 3702,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 103.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 104.jpg',
    width: 5477,
    height: 3656,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 105.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 106.jpg',
    width: 2217,
    height: 1478,
  },
  {
    src: '/images/oui/31052019_Jeangelique - 107.jpg',
    width: 2217,
    height: 1478,
  },
]
