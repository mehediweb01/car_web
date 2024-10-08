import { Col, Row } from 'react-bootstrap'

const BestSellings = [
  {
    id: 1,
    img: 'Images/logo1.png',
    name: 'Subaru',
    price: 'from $40k',
  },
  {
    id: 2,
    img: 'Images/logo2.png',
    name: 'Volkswagen',
    price: 'from $15k',
  },
  {
    id: 3,
    img: 'Images/logo3.png',
    name: 'Toyota',
    price: 'from $27k',
  },
  {
    id: 4,
    img: 'Images/logo4.png',
    name: 'Mercedes-Benz',
    price: 'from $60k',
  },
  {
    id: 5,
    img: 'Images/logo5.png',
    name: 'Hyundai',
    price: 'from $30k',
  },
  {
    id: 6,
    img: 'Images/logo6.png',
    name: 'Infiniti',
    price: 'from $54k',
  },
]

function BestSelling() {
  return (
    <div className="mt-5 container-fluid bestSelling">
      <h1 className="text-center">Explore best selling car makes</h1>
      <Row className="d-flex justify-content-center">
        {BestSellings.map(({ id, img, name, price }) => (
          <Col key={id} md={4} className="mt-4">
            <div className="d-flex justify-content-lg-center justify-content-start m-lg-0 m-2">
              <div className="d-flex gap-4 mx-auto">
                <img src={img} alt={name} />
                <div>
                  <div className="name">{name}</div>
                  <div className="opacity-50">{price}</div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default BestSelling
