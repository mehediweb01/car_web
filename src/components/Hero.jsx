import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Hero() {
  return (
    <div className="mt-3">
      <Carousel indicators={false}>
        {/* item 1 */}
        <Carousel.Item>
          <div className="text-center heroSection">
            <p className="fs-6">Meet your new car</p>
            <h1>Honda Civic Type R</h1>
            <div className="mt-4">
              <button type="button" className="btn">
                More Details
              </button>
              <button type="button" className="btn testDrive ms-3">
                Test Drive
              </button>
            </div>
            <div>
              <img
                src="Images/Header Image.png"
                alt="header-image"
                className="d-block w-100 mt-3"
              />
            </div>
          </div>
        </Carousel.Item>
        {/* item 2 */}
        <Carousel.Item>
          <div className="text-center heroSection">
            <p className="fs-6">Meet your new car</p>
            <h1>Audi</h1>
            <div className="mt-4">
              <button type="button" className="btn">
                More Details
              </button>
              <button type="button" className="btn testDrive ms-3">
                Test Drive
              </button>
            </div>
            <div>
              <img
                src="Images/car1.png"
                alt="header-image"
                className="d-block w-100 mt-3 car"
              />
            </div>
          </div>
        </Carousel.Item>
        {/* item 3 */}
        <Carousel.Item>
          <div className="text-center heroSection">
            <p className="fs-6">Meet your new car</p>
            <h1>BMW</h1>
            <div className="mt-4">
              <button type="button" className="btn">
                More Details
              </button>
              <button type="button" className="btn testDrive ms-3">
                Test Drive
              </button>
            </div>
            <div>
              <img
                src="Images/car2.png"
                alt="header-image"
                className="d-block w-100 mt-3 car"
              />
            </div>
          </div>
        </Carousel.Item>
        {/* item 4 */}
        <Carousel.Item>
          <div className="text-center heroSection">
            <p className="fs-6">Meet your new car</p>
            <h1>Ford</h1>
            <div className="mt-4">
              <button type="button" className="btn">
                More Details
              </button>
              <button type="button" className="btn testDrive ms-3">
                Test Drive
              </button>
            </div>
            <div>
              <img
                src="Images/car3.png"
                alt="header-image"
                className="d-block w-100 mt-3 car1"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Hero
