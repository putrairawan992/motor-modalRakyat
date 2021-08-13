import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import style from './style.module.scss';

const menus = [
  {
    label: 'Buy',
    link: '/buy'
  }, {
    label: 'Sell',
    link: '/sell'
  }, {
    label: 'News',
    link: '/news'
  }, {
    label: 'Service',
    link: '/service'
  }
];

const Index = () => (
  <div className={style.container}>
    <Container>
      <Row>
        <Col>
          <img
            src="/img/logo.jpg"
            className={style.logo}
            alt="logo"
          />
        </Col>

        <Col md={6}>
          {menus.map((v, i) => (
            <Link
              to={v.link}
              key={i}
              className={style['menu-item']}
            >
              {v.label}
            </Link>
          ))}
        </Col>

        <Col className="d-flex align-items-end">
          <Button variant="success" size="lg" className="d-flex align-items-center pl-3 pr-4">
            <HiPlus size={25} />
            <span className="ml-2">ADD LISTING</span>
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Index;
