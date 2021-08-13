import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
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
  <Fragment>
    <div className={style.container}>
      <Container>
        <Row>
          <Col md={2} xs={6}>
            <h5>Motor</h5>

            <div className="d-flex flex-column mt-1">
              <a href="/" className="text-secondary">Home</a>
              <a href="/" className="text-secondary">Privacy</a>
              <a href="/" className="text-secondary">Sitemap</a>
              <a href="/" className="text-secondary">News</a>
            </div>
          </Col>

          <Col md={2} xs={6}>
            <h5>About</h5>

            <div className="d-flex flex-column mt-1">
              <a href="/" className="text-secondary">Latest News</a>
              <a href="/" className="text-secondary">Press Releases</a>
              <a href="/" className="text-secondary">Careers</a>
              <a href="/" className="text-secondary">Term of Use</a>
            </div>
          </Col>

          <Col md={2} xs={6}>
            <h5>Help</h5>

            <div className="d-flex flex-column mt-1">
              <a href="/" className="text-secondary">Contact Us</a>
              <a href="/" className="text-secondary">Online Support</a>
              <a href="/" className="text-secondary">FAQ</a>
            </div>
          </Col>

          <Col md={3} xs={6}>
            <h5>Twitter</h5>
          </Col>

          <Col md={3} xs={6}>
            <h5>Contact Info</h5>

            <div className="mt-1 text-secondary">
              <p>Nemo enim ipsam,<br/>Voluptatem quia voluptas sit.</p>

              <div className="d-flex flex-column mt-1">
                <span><b>P:</b> + (555) 55 5550</span>
                <span><b>E:</b> sales@motor.co.id</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    <div className={style.navbar}>
      <Container>
        <Row>
          <Col>
            <img
              src="/img/logo.jpg"
              className={style.logo}
              alt="logo"
            />
          </Col>

          <Col md={6} className="d-flex align-items-center">
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

          <Col className="d-flex align-items-center justify-content-end">
            <div className={style.socmed}>
              <FaTwitter />
            </div>

            <div className={style.socmed}>
              <FaLinkedinIn />
            </div>

            <div className={style.socmed}>
              <FaFacebookF />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Fragment>
);

export default Index;
