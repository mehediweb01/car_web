import { Button, Card, Col, Row } from 'react-bootstrap'

const Trending = [
  {
    id: 1,
    img: 'Images/Img1.png',
    title: 'Used 2019 Audi S4 Premium Plus',
    Miles: '11 475 Miles',
    transmission: 'AWD',
    cylinders: '4-Cylinder Turbo',
    Price: '$41,400',
  },
  {
    id: 2,
    img: 'Images/Img2.png',
    title: '2013 Subaru Forester Premium Plus',
    Miles: '40 475 Miles',
    transmission: 'AWD',
    cylinders: '4-Cylinder Turbo',
    Price: '$22,500',
  },
  {
    id: 3,
    img: 'Images/Img3.png',
    title: 'Used 2010 BMW X3 Sport package',
    Miles: '20 850 Miles',
    transmission: 'RWD',
    cylinders: '4-Cylinder',
    Price: '$39,200',
  },
]

function TrendingCard() {
  return (
    <div className=" container-fluid">
      <h1 className=" text-center mt-5 trendingTitle">Trending near you</h1>
      <Row className="d-flex justify-content-center mt-5 mx-md-0 mx-auto">
        {Trending.map(
          ({ id, img, title, Miles, transmission, cylinders, Price }) => (
            <Col key={id} md={4}>
              <Card
                style={{ width: '25rem', border: 'none' }}
                className="mx-lg-0 mx-auto mt-4"
              >
                <Card.Img src={img} alt={title} className="img-fluid" />
                <Card.Body>
                  <Card.Title className="title">{title}</Card.Title>
                  <Card.Text className="opacity-50">{Miles} Miles</Card.Text>
                  <Card.Text className="opacity-50">
                    {transmission} . {cylinders}
                  </Card.Text>
                  <Button className="fw-bold btn priceBtn" variant="primary">
                    {Price}
                  </Button>
                  <Button
                    className="fw-bold ms-2 btn opacity-50"
                    variant="secondary"
                  >
                    Best Sellers
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          )
        )}
      </Row>
    </div>
  )
}

export default TrendingCard
