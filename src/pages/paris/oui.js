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
    src: '/images/oui/31052019_Jeangelique%20-%20000.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%20000.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%20000.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%20000.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%20000.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 4016,
    height: 6016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20001a.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%20001a.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%20001a.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%20001a.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%20001a.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5651,
    height: 3769,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20002.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%20002.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%20002.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%20002.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%20002.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 3514,
    height: 5267,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20003a.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%20003a.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%20003a.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%20003a.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%20003a.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5416,
    height: 3615,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20004.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%20004.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%20004.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%20004.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%20004.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5217,
    height: 3483,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20005.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%20005.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%20005.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%20005.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%20005.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20006.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%20006.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%20006.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%20006.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%20006.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20006a.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%20006a.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%20006a.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%20006a.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%20006a.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5788,
    height: 3863,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20006b.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%20006b.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%20006b.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%20006b.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%20006b.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 4016,
    height: 6016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20006c.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%20006c.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%20006c.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%20006c.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%20006c.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20006d.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%20006d.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%20006d.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%20006d.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%20006d.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20006e.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%20006e.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%20006e.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%20006e.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%20006e.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5509,
    height: 3677,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20006f.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%20006f.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%20006f.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%20006f.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%20006f.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 4455,
    height: 2973,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20006g.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%20006g.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%20006g.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%20006g.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%20006g.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5734,
    height: 3829,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%207.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%207.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%207.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%207.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%207.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5719,
    height: 3817,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%208.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%208.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%208.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%208.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%208.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%209.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%209.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%209.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%209.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%209.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5908,
    height: 3944,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2010.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2010.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2010.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2010.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2010.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 4723,
    height: 3155,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2011.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2011.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2011.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2011.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2011.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2012.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2012.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2012.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2012.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2012.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2013.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2013.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2013.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2013.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2013.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5407,
    height: 3609,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2014.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2014.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2014.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2014.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2014.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2015.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2015.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2015.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2015.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2015.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 4719,
    height: 3149,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2016.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2016.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2016.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2016.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2016.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5316,
    height: 3549,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2017.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2017.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2017.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2017.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2017.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5251,
    height: 3502,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2018.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2018.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2018.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2018.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2018.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 4016,
    height: 6016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2019.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2019.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2019.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2019.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2019.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2020.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2020.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2020.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2020.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2020.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2021.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2021.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2021.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2021.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2021.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 3659,
    height: 5482,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2022.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2022.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2022.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2022.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2022.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5655,
    height: 3775,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2023.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2023.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2023.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2023.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2023.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5257,
    height: 3508,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2023a.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2023a.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2023a.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2023a.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2023a.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 934,
    height: 1244,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2024.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2024.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2024.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2024.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2024.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2025.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2025.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2025.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2025.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2025.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2026.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2026.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2026.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2026.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2026.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2027.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2027.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2027.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2027.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2027.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2027a.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2027a.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2027a.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2027a.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2027a.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 2217,
    height: 1478,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2028.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2028.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2028.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2028.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2028.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 2681,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2029.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2029.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2029.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2029.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2029.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2030.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2030.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2030.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2030.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2030.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2030b.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2030b.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2030b.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2030b.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2030b.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2030c.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2030c.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2030c.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2030c.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2030c.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 3994,
    height: 5984,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2031.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2031.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2031.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2031.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2031.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2032.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2032.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2032.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2032.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2032.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5415,
    height: 3613,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2033.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2033.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2033.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2033.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2033.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5025,
    height: 3355,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2034.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2034.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2034.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2034.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2034.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5120,
    height: 3418,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2035.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2035.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2035.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2035.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2035.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2036.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2036.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2036.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2036.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2036.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5524,
    height: 3687,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2037.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2037.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2037.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2037.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2037.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5739,
    height: 3829,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2038.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2038.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2038.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2038.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2038.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5226,
    height: 3489,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2039.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2039.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2039.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2039.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2039.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5504,
    height: 3672,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2040.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2040.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2040.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2040.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2040.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2041.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2041.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2041.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2041.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2041.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2042.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2042.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2042.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2042.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2042.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2043.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2043.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2043.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2043.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2043.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2044.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2044.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2044.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2044.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2044.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5838,
    height: 3900,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2045.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2045.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2045.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2045.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2045.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2046.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2046.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2046.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2046.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2046.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5893,
    height: 3934,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2047.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2047.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2047.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2047.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2047.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5584,
    height: 3699,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2048.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2048.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2048.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2048.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2048.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5299,
    height: 3567,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2049.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2049.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2049.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2049.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2049.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2050.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2050.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2050.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2050.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2050.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2051.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2051.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2051.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2051.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2051.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2052.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2052.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2052.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2052.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2052.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5398,
    height: 3604,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2053.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2053.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2053.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2053.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2053.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5483,
    height: 3660,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2054.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2054.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2054.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2054.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2054.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5325,
    height: 3472,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2055.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2055.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2055.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2055.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2055.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2056.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2056.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2056.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2056.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2056.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5320,
    height: 3552,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2057.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2057.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2057.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2057.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2057.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5634,
    height: 3760,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2058.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2058.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2058.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2058.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2058.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5650,
    height: 3771,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2059.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2059.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2059.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2059.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2059.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5510,
    height: 3678,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2060.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2060.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2060.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2060.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2060.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5816,
    height: 3869,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2060a.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2060a.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2060a.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2060a.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2060a.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 1552,
    height: 1164,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2061.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2061.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2061.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2061.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2061.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 3285,
    height: 4918,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2062.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2062.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2062.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2062.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2062.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 3506,
    height: 5253,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2063.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2063.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2063.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2063.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2063.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5788,
    height: 3863,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2064.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2064.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2064.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2064.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2064.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5860,
    height: 3912,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2065.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2065.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2065.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2065.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2065.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5357,
    height: 3574,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2066.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2066.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2066.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2066.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2066.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2067.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2067.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2067.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2067.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2067.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2068.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2068.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2068.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2068.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2068.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5374,
    height: 3588,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2069.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2069.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2069.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2069.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2069.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5768,
    height: 3851,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2070.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2070.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2070.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2070.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2070.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5235,
    height: 3496,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2071.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2071.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2071.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2071.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2071.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5590,
    height: 3730,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2072.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2072.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2072.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2072.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2072.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2073.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2073.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2073.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2073.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2073.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5562,
    height: 3713,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2074.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2074.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2074.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2074.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2074.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 4016,
    height: 6016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2075.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2075.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2075.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2075.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2075.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5531,
    height: 3694,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2076.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2076.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2076.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2076.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2076.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5532,
    height: 3690,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2077.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2077.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2077.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2077.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2077.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5444,
    height: 3633,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2077a.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2077a.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2077a.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2077a.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2077a.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 900,
    height: 1200,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2078.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2078.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2078.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2078.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2078.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5650,
    height: 3770,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2079.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2079.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2079.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2079.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2079.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2080.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2080.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2080.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2080.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2080.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 4016,
    height: 6016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2081.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2081.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2081.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2081.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2081.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 4016,
    height: 6016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2082.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2082.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2082.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2082.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2082.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2083.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2083.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2083.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2083.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2083.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 4016,
    height: 6016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2084.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2084.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2084.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2084.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2084.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 4016,
    height: 6016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2085.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2085.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2085.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2085.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2085.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5472,
    height: 3653,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2086.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2086.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2086.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2086.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2086.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5915,
    height: 3949,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2087.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2087.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2087.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2087.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2087.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2088.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2088.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2088.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2088.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2088.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2089.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2089.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2089.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2089.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2089.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2090.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2090.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2090.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2090.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2090.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2091.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2091.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2091.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2091.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2091.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2092.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2092.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2092.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2092.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2092.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2093.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2093.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2093.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2093.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2093.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5253,
    height: 3506,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2094.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2094.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2094.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2094.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2094.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5400,
    height: 3606,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2095.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2095.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2095.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2095.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2095.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5512,
    height: 3680,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2096.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2096.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2096.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2096.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2096.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2097.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2097.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2097.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2097.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2097.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2098.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2098.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2098.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2098.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2098.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2098a.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2098a.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2098a.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2098a.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2098a.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 1108,
    height: 1478,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2099.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%2099.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%2099.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%2099.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%2099.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 3851,
    height: 5769,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20100.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%20100.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%20100.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%20100.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%20100.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20101.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%20101.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%20101.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%20101.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%20101.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20102.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%20102.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%20102.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%20102.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%20102.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5549,
    height: 3702,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20103.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%20103.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%20103.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%20103.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%20103.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20104.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%20104.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%20104.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%20104.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%20104.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 5477,
    height: 3656,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20105.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%20105.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%20105.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%20105.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%20105.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 6016,
    height: 4016,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20106.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%20106.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%20106.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%20106.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%20106.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 2217,
    height: 1478,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20107.jpg',
    srcSet:
      '/images/oui/31052019_Jeangelique%20-%20107.jpg?nf_resize=fit&w=320 320w, /images/oui/31052019_Jeangelique%20-%20107.jpg?nf_resize=fit&w=640 640w, /images/oui/31052019_Jeangelique%20-%20107.jpg?nf_resize=fit&w=1024 1024w, /images/oui/31052019_Jeangelique%20-%20107.jpg?nf_resize=fit&w=1920 1920w',
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    width: 2217,
    height: 1478,
  },
]
