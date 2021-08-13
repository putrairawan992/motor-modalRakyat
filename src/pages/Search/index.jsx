import React, { Fragment, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OnlineSupport from 'components/layout/OnlineSupport';
import NewsLetter from 'components/layout/NewsLetter';
import vehicles from 'constant/vehicles';
import SearchPanel from './SearchPanel';
import FilterBar from './FilterBar';
import CardList from './CardList';
import CardGrid from './CardGrid';

const Index = () => {
  const [cardType, setCardType] = useState('grid');

  return (
    <Fragment>
      <Container className="my-5">
        <Row>
          <Col md={8} xs={12}>
            <FilterBar
              onSwitchGrid={() => setCardType('grid')}
              onSwitchList={() => setCardType('list')}
              type={cardType}
            />

            <Row className="mt-5">
              {vehicles.map((v, i) => (
                <Fragment key={i}>
                  {cardType === 'list' && <Col md={4} xs={6}>
                    <CardList
                      id={v.sku}
                      image={v.image[0]}
                      brand={v.brand}
                      name={v.name}
                      year={v.year}
                      capacity={v.capacity}
                      price={v.price}
                      location={v.location}
                      transmission={v.transmission}
                      rating={v.rating}
                    />
                  </Col>}

                  {cardType === 'grid' && <Col md={12}>
                    <CardGrid
                      id={v.sku}
                      image={v.image[0]}
                      brand={v.brand}
                      name={v.name}
                      year={v.year}
                      capacity={v.capacity}
                      price={v.price}
                      location={v.location}
                      transmission={v.transmission}
                      rating={v.rating}
                      admin={v.admin.name}
                    />
                  </Col>}
                </Fragment>
              ))}
            </Row>
          </Col>

          <Col md={4} xs={12}>
            <SearchPanel />
            <OnlineSupport />
            <NewsLetter />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Index;
