import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import cn from 'classnames';
import categories from 'constant/categories';
import style from './style.module.scss';

const Index = () => (
  <Fragment>
    <header className={style.header}>
      SEARCH FILTER
    </header>

    <div className={style['search-form']}>
      <Container fluid>
        <Row className={style.boxed}>
          <Col md={12}>
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

          <Col md={12}>
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
          <Col md={12}>
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

          <Col md={12}>
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

          <Col md={12}>
            <Form.Group>
              <Form.Label>MODEL</Form.Label>

              <Form.Control as="select" custom>
                <option value="All">
                  All
                </option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col md={12}>
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
        </Row>
      </Container>
    </div>
  </Fragment>
);

export default Index;
