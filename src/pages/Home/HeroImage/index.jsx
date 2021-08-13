import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import style from './style.module.scss';

const HeroImage = () => {
  return (
    <div className={style.wrapper}>
      <Container className={style.container}>
        <Row className={style.content}>
          <Col md={5} xs={12} className={style.heroshot}>
            <Image
              src="/img/phone.png"
              alt="phone"
            />
          </Col>

          <Col md={7} xs={12} className="d-flex align-items-center">
            <article className="text-right text-white d-flex flex-column align-items-end">
              <h1>Lorem Ipsum</h1>

              <p className="w-100">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
              </p>

              <Button variant="danger" className="px-3 mt-3">
                VISIT MOBILE VERSION
              </Button>
            </article>
          </Col>
        </Row>
      </Container>

      <Image
        src="/img/roads.jpg"
        alt="road"
        className={style.background}
      />
    </div>
  );
};

export default HeroImage;
