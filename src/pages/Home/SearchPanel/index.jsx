import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { HiSearch, HiPlus } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import cn from 'classnames';
import categories from 'constant/categories';
import style from './style.module.scss';

const Index = () => {
  const history = useHistory();

  return (
    <Fragment>
      <div className={cn(style['btn-tab'], style.active)}>
        <HiSearch size={18} />
        <span className="ml-2">SEARCH</span>
      </div>

      <div className={style['btn-tab']}>
        <HiPlus size={18} />
        <span className="ml-2">ADD LISTING</span>
      </div>

      <div className={style['search-form']}>
        <Container fluid>
          <Row className={style.boxed}>
            <Col md="6">
              <Form.Group>
                <Form.Label>TYPE</Form.Label>

                <Form.Control as="select" custom>
                  {categories.map((v, i) => (
                    <option key={i} value={v.name}>
                      {v.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Check
                  inline
                  type="radio"
                  label="Used items"
                  name="group1"
                  id="Used items"
                />

                <Form.Check
                  inline
                  type="radio"
                  label="New items"
                  name="group1"
                  id="New items"
                />
              </Form.Group>
            </Col>

            <Col md="6">
              <Form.Group>
                <Form.Label>CATEGORY</Form.Label>

                <Form.Control as="select" custom>
                  <option value="Sedan">
                    Sedan
                  </option>
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Check
                  inline
                  type="checkbox"
                  label="With photos"
                  name="group2"
                  id="With photos"
                />

                <Form.Check
                  inline
                  type="checkbox"
                  label="With videos"
                  name="group2"
                  id="With videos"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className={cn(style.boxed, style.border)}>
            <Col md={4}>
              <Form.Group>
                <Form.Label>LOCATION</Form.Label>

                <Form.Control as="select" custom>
                  <option value="New York">
                    New York
                  </option>

                  <option value="Jakarta">
                    Jakarta
                  </option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label>BRAND</Form.Label>

                <Form.Control as="select" custom>
                  <option value="Suburu">
                    Suburu
                  </option>

                  <option value="Toyota">
                    Toyota
                  </option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label>MODEL</Form.Label>

                <Form.Control as="select" custom>
                  <option value="All">
                    All
                  </option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>PRICE</Form.Label>

                <div className="d-flex align-items-center">
                  <Form.Control as="select" custom>
                    <option value="5000">
                      $5000
                    </option>

                    <option value="12000">
                      $12000
                    </option>
                  </Form.Control>

                  <span className="px-2">-</span>

                  <Form.Control as="select" custom>
                    <option value="12000">
                      $12000
                    </option>

                    <option value="20000">
                      $20000
                    </option>
                  </Form.Control>
                </div>
              </Form.Group>
            </Col>

            <Col md={6} className="d-flex align-items-center justify-content-end">
              <Button variant="link" className="text-white d-flex align-items-center">
                <MdClose className="text-white" />
                <span className="ml-2">Clear all filters</span>
              </Button>

              <Button
                variant="warning"
                size="lg"
                className="px-4"
                onClick={() => history.push('/search')}
              >
                SEARCH
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={style['adv-search']}>
        ADVANCED SEARCH
      </div>
    </Fragment>
  );
};

export default Index;
