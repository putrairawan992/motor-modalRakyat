import React from 'react';
import { useParams } from 'react-router-dom';
import vehicles from 'constant/vehicles';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DisplayCategory from 'components/layout/DisplayCategory';
import OnlineSupport from 'components/layout/OnlineSupport';
import NewsLetter from 'components/layout/NewsLetter';
import AboutWidget from 'components/layout/AboutWidget';
import CardGrid from './CardGrid';
import style from './CardGrid/style.module.scss';

const Index = () => {
  const { id } = useParams();
  const res = vehicles.filter(f => f.sku === parseInt(id))[0];

  return (
    <div>
      <Container className="my-5">
        <Row>
          <Col md={8} xs={12}>
            <div className="text-uppercase font-weight-bold mb-4">
              <span className="text-secondary">BUY</span>
              <span>{' - '}</span>

              <span className="text-secondary">{res.type}</span>
              <span>{' - '}</span>

              <span>{res.brand}</span>
            </div>

            <CardGrid
              image={res.image}
              brand={res.brand}
              name={res.name}
              year={res.year}
              capacity={res.capacity}
              price={res.price}
              location={res.location}
              transmission={res.transmission}
              rating={res.rating}
              color={res.color}
              admin={res.admin.name}
              fuel={res.fuel}
              description={res.description}
              preview={res.preview}
              vendor={res.vendor}
            />

            <div className={style.container}>
              <header className={style.header}>
                <h1>COMMENTS</h1>
              </header>

              <div className="p-3 d-flex">
                <div className="w-50">
                  <Form.Control as="textarea" rows={4} />
                </div>

                <div className="w-50 pl-5">
                  <div className="d-flex mb-3">
                    <img src="https://i.pravatar.cc/50?img=2" alt="vendor" />
                    <b className="pl-3">John Doe</b>
                  </div>

                  <Button variant="danger">
                    LEAVE COMMENT
                  </Button>
                </div>
              </div>
            </div>
          </Col>

          <Col md={4} xs={12}>
            <DisplayCategory />
            <OnlineSupport />
            <NewsLetter />
            <AboutWidget />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
