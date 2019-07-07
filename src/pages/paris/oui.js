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
    src: '/images/oui/31052019_Jeangelique%20-%20000.jpg?nf_resize=fit&h=640',
    width: 523,
    height: 784,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20001a.jpg?nf_resize=fit&h=640',
    width: 737,
    height: 491,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20002.jpg?nf_resize=fit&h=640',
    width: 458,
    height: 687,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20003a.jpg?nf_resize=fit&h=640',
    width: 706,
    height: 471,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20004.jpg?nf_resize=fit&h=640',
    width: 680,
    height: 454,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20005.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20006.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20006a.jpg?nf_resize=fit&h=640',
    width: 755,
    height: 504,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20006b.jpg?nf_resize=fit&h=640',
    width: 523,
    height: 784,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20006c.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20006d.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20006e.jpg?nf_resize=fit&h=640',
    width: 718,
    height: 479,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20006f.jpg?nf_resize=fit&h=640',
    width: 581,
    height: 387,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20006g.jpg?nf_resize=fit&h=640',
    width: 748,
    height: 499,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%207.jpg?nf_resize=fit&h=640',
    width: 746,
    height: 497,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%208.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%209.jpg?nf_resize=fit&h=640',
    width: 770,
    height: 514,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2010.jpg?nf_resize=fit&h=640',
    width: 616,
    height: 411,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2011.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2012.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2013.jpg?nf_resize=fit&h=640',
    width: 705,
    height: 470,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2014.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2015.jpg?nf_resize=fit&h=640',
    width: 615,
    height: 410,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2016.jpg?nf_resize=fit&h=640',
    width: 693,
    height: 463,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2017.jpg?nf_resize=fit&h=640',
    width: 685,
    height: 456,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2018.jpg?nf_resize=fit&h=640',
    width: 523,
    height: 784,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2019.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2020.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2021.jpg?nf_resize=fit&h=640',
    width: 477,
    height: 715,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2022.jpg?nf_resize=fit&h=640',
    width: 737,
    height: 492,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2023.jpg?nf_resize=fit&h=640',
    width: 685,
    height: 457,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2023a.jpg?nf_resize=fit&h=640',
    width: 121,
    height: 162,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2024.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2025.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2026.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2027.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2027a.jpg?nf_resize=fit&h=640',
    width: 289,
    height: 192,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2028.jpg?nf_resize=fit&h=640',
    width: 349,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2029.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2030.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2030b.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2030c.jpg?nf_resize=fit&h=640',
    width: 521,
    height: 780,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2031.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2032.jpg?nf_resize=fit&h=640',
    width: 706,
    height: 471,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2033.jpg?nf_resize=fit&h=640',
    width: 655,
    height: 437,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2034.jpg?nf_resize=fit&h=640',
    width: 668,
    height: 445,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2035.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2036.jpg?nf_resize=fit&h=640',
    width: 720,
    height: 481,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2037.jpg?nf_resize=fit&h=640',
    width: 748,
    height: 499,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2038.jpg?nf_resize=fit&h=640',
    width: 681,
    height: 455,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2039.jpg?nf_resize=fit&h=640',
    width: 718,
    height: 479,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2040.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2041.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2042.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2043.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2044.jpg?nf_resize=fit&h=640',
    width: 761,
    height: 508,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2045.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2046.jpg?nf_resize=fit&h=640',
    width: 768,
    height: 513,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2047.jpg?nf_resize=fit&h=640',
    width: 728,
    height: 482,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2048.jpg?nf_resize=fit&h=640',
    width: 691,
    height: 465,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2049.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2050.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2051.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2052.jpg?nf_resize=fit&h=640',
    width: 704,
    height: 470,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2053.jpg?nf_resize=fit&h=640',
    width: 715,
    height: 477,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2054.jpg?nf_resize=fit&h=640',
    width: 694,
    height: 452,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2055.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2056.jpg?nf_resize=fit&h=640',
    width: 694,
    height: 463,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2057.jpg?nf_resize=fit&h=640',
    width: 735,
    height: 490,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2058.jpg?nf_resize=fit&h=640',
    width: 737,
    height: 491,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2059.jpg?nf_resize=fit&h=640',
    width: 718,
    height: 479,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2060.jpg?nf_resize=fit&h=640',
    width: 758,
    height: 504,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2060a.jpg?nf_resize=fit&h=640',
    width: 202,
    height: 151,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2061.jpg?nf_resize=fit&h=640',
    width: 428,
    height: 641,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2062.jpg?nf_resize=fit&h=640',
    width: 457,
    height: 685,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2063.jpg?nf_resize=fit&h=640',
    width: 755,
    height: 504,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2064.jpg?nf_resize=fit&h=640',
    width: 764,
    height: 510,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2065.jpg?nf_resize=fit&h=640',
    width: 698,
    height: 466,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2066.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2067.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2068.jpg?nf_resize=fit&h=640',
    width: 701,
    height: 468,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2069.jpg?nf_resize=fit&h=640',
    width: 752,
    height: 502,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2070.jpg?nf_resize=fit&h=640',
    width: 683,
    height: 456,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2071.jpg?nf_resize=fit&h=640',
    width: 729,
    height: 486,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2072.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2073.jpg?nf_resize=fit&h=640',
    width: 725,
    height: 484,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2074.jpg?nf_resize=fit&h=640',
    width: 523,
    height: 784,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2075.jpg?nf_resize=fit&h=640',
    width: 721,
    height: 481,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2076.jpg?nf_resize=fit&h=640',
    width: 721,
    height: 481,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2077.jpg?nf_resize=fit&h=640',
    width: 710,
    height: 473,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2077a.jpg?nf_resize=fit&h=640',
    width: 117,
    height: 156,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2078.jpg?nf_resize=fit&h=640',
    width: 737,
    height: 491,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2079.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2080.jpg?nf_resize=fit&h=640',
    width: 523,
    height: 784,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2081.jpg?nf_resize=fit&h=640',
    width: 523,
    height: 784,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2082.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2083.jpg?nf_resize=fit&h=640',
    width: 523,
    height: 784,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2084.jpg?nf_resize=fit&h=640',
    width: 523,
    height: 784,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2085.jpg?nf_resize=fit&h=640',
    width: 713,
    height: 476,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2086.jpg?nf_resize=fit&h=640',
    width: 771,
    height: 515,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2087.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2088.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2089.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2090.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2091.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2092.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2093.jpg?nf_resize=fit&h=640',
    width: 685,
    height: 457,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2094.jpg?nf_resize=fit&h=640',
    width: 704,
    height: 470,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2095.jpg?nf_resize=fit&h=640',
    width: 719,
    height: 480,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2096.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2097.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2098.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2098a.jpg?nf_resize=fit&h=640',
    width: 144,
    height: 192,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%2099.jpg?nf_resize=fit&h=640',
    width: 502,
    height: 752,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20100.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20101.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20102.jpg?nf_resize=fit&h=640',
    width: 723,
    height: 482,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20103.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20104.jpg?nf_resize=fit&h=640',
    width: 714,
    height: 476,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20105.jpg?nf_resize=fit&h=640',
    width: 784,
    height: 523,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20106.jpg?nf_resize=fit&h=640',
    width: 289,
    height: 192,
  },
  {
    src: '/images/oui/31052019_Jeangelique%20-%20107.jpg?nf_resize=fit&h=640',
    width: 289,
    height: 192,
  },
]
