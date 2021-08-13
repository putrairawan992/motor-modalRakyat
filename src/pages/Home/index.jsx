import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { IoMdDownload } from 'react-icons/io';
import HeroImage from './HeroImage';
import SearchPanel from './SearchPanel';
import DisplayCategory from 'components/layout/DisplayCategory';
import Shortcut from './Shortcut';
import OnlineSupport from 'components/layout/OnlineSupport';
import NewsLetter from 'components/layout/NewsLetter';
import AboutWidget from 'components/layout/AboutWidget';
import NewArrival from './NewArrival';

const Index = () => {
  return (
    <div>
      <HeroImage />

      <Container className="my-5">
        <Row>
          <Col md={8} xs={12}>
            <SearchPanel />
            <NewArrival />
            <Shortcut />
          </Col>

          <Col md={4} xs={12}>
            <DisplayCategory />
            <OnlineSupport />
            <NewsLetter />
            <AboutWidget />
          </Col>
        </Row>
        </Container>

      <section style={{ backgroundColor: '#f0f0f0' }}>
        <Container className="py-5">
          <Row>
            <Col md={9} xs={12}>
              <h4>Lorem ipsum</h4>
              <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</span>
            </Col>

            <Col md={3} xs={12}>
              <div className="h-100 d-flex align-items-center justify-content-end">
                <Button variant="success" size="lg" className="px-4 py-3">
                  <IoMdDownload />
                  <span className="ml-2">DOWNLOAD</span>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Index;
