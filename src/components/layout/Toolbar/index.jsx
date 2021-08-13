import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import style from './style.module.scss';

const menus = [
  {
    label: 'Home',
    link: '/'
  }, {
    label: 'About',
    link: '/about'
  }, {
    label: 'Help',
    link: '/help'
  }, {
    label: 'Contact',
    link: '/contact'
  }
];

const Index = () => {
  return (
    <div className={style['container']}>
      <Container>
        <Row>
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

          <Col md={6}>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
