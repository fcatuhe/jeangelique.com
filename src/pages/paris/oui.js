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
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_000.jpg',
    width: 4016,
    height: 6016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_001a.jpg',
    width: 5651,
    height: 3769,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_002.jpg',
    width: 3514,
    height: 5267,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_003a.jpg',
    width: 5416,
    height: 3615,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_004.jpg',
    width: 5217,
    height: 3483,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_005.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_006.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_006a.jpg',
    width: 5788,
    height: 3863,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_006b.jpg',
    width: 4016,
    height: 6016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_006c.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_006d.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_006e.jpg',
    width: 5509,
    height: 3677,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_006f.jpg',
    width: 4455,
    height: 2973,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_006g.jpg',
    width: 5734,
    height: 3829,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_7.jpg',
    width: 5719,
    height: 3817,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_8.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_9.jpg',
    width: 5908,
    height: 3944,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_10.jpg',
    width: 4723,
    height: 3155,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_11.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_12.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_13.jpg',
    width: 5407,
    height: 3609,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_14.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_15.jpg',
    width: 4719,
    height: 3149,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_16.jpg',
    width: 5316,
    height: 3549,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_17.jpg',
    width: 5251,
    height: 3502,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_18.jpg',
    width: 4016,
    height: 6016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_19.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_20.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_21.jpg',
    width: 3659,
    height: 5482,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_22.jpg',
    width: 5655,
    height: 3775,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_23.jpg',
    width: 5257,
    height: 3508,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_23a.jpg',
    width: 934,
    height: 1244,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_24.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_25.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_26.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_27.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_27a.jpg',
    width: 2217,
    height: 1478,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_28.jpg',
    width: 2681,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_29.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_30.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_30b.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_30c.jpg',
    width: 3994,
    height: 5984,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_31.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_32.jpg',
    width: 5415,
    height: 3613,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_33.jpg',
    width: 5025,
    height: 3355,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_34.jpg',
    width: 5120,
    height: 3418,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_35.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_36.jpg',
    width: 5524,
    height: 3687,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_37.jpg',
    width: 5739,
    height: 3829,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_38.jpg',
    width: 5226,
    height: 3489,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_39.jpg',
    width: 5504,
    height: 3672,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_40.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_41.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_42.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_43.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_44.jpg',
    width: 5838,
    height: 3900,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_45.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_46.jpg',
    width: 5893,
    height: 3934,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_47.jpg',
    width: 5584,
    height: 3699,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_48.jpg',
    width: 5299,
    height: 3567,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_49.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_50.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_51.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_52.jpg',
    width: 5398,
    height: 3604,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_53.jpg',
    width: 5483,
    height: 3660,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_54.jpg',
    width: 5325,
    height: 3472,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_55.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_56.jpg',
    width: 5320,
    height: 3552,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_57.jpg',
    width: 5634,
    height: 3760,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_58.jpg',
    width: 5650,
    height: 3771,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_59.jpg',
    width: 5510,
    height: 3678,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_60.jpg',
    width: 5816,
    height: 3869,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_60a.jpg',
    width: 1552,
    height: 1164,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_61.jpg',
    width: 3285,
    height: 4918,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_62.jpg',
    width: 3506,
    height: 5253,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_63.jpg',
    width: 5788,
    height: 3863,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_64.jpg',
    width: 5860,
    height: 3912,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_65.jpg',
    width: 5357,
    height: 3574,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_66.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_67.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_68.jpg',
    width: 5374,
    height: 3588,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_69.jpg',
    width: 5768,
    height: 3851,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_70.jpg',
    width: 5235,
    height: 3496,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_71.jpg',
    width: 5590,
    height: 3730,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_72.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_73.jpg',
    width: 5562,
    height: 3713,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_74.jpg',
    width: 4016,
    height: 6016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_75.jpg',
    width: 5531,
    height: 3694,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_76.jpg',
    width: 5532,
    height: 3690,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_77.jpg',
    width: 5444,
    height: 3633,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_77a.jpg',
    width: 900,
    height: 1200,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_78.jpg',
    width: 5650,
    height: 3770,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_79.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_80.jpg',
    width: 4016,
    height: 6016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_81.jpg',
    width: 4016,
    height: 6016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_82.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_83.jpg',
    width: 4016,
    height: 6016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_84.jpg',
    width: 4016,
    height: 6016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_85.jpg',
    width: 5472,
    height: 3653,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_86.jpg',
    width: 5915,
    height: 3949,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_87.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_88.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_89.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_90.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_91.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_92.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_93.jpg',
    width: 5253,
    height: 3506,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_94.jpg',
    width: 5400,
    height: 3606,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_95.jpg',
    width: 5512,
    height: 3680,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_96.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_97.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_98.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_98a.jpg',
    width: 1108,
    height: 1478,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_99.jpg',
    width: 3851,
    height: 5769,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_100.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_101.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_102.jpg',
    width: 5549,
    height: 3702,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_103.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_104.jpg',
    width: 5477,
    height: 3656,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_105.jpg',
    width: 6016,
    height: 4016,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_106.jpg',
    width: 2217,
    height: 1478,
  },
  {
    src:
      'https://res.cloudinary.com/jeangelique/image/upload/c_scale,w_1920/v1562517668/oui/31052019_Jeangelique_-_107.jpg',
    width: 2217,
    height: 1478,
  },
]
