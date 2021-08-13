import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import cn from 'classnames';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgMenuGridO } from 'react-icons/cg';
import style from './style.module.scss';

const Index = ({ onSwitchGrid, onSwitchList, type }) => (
  <div className={style.inner}>
    <Row className="w-100 mx-0">
      <Col md={4} xs={12} className="d-flex align-items-center">
        <b>SEARCH RESULT</b>
      </Col>

      <Col md={8} xs={12}>
        <Form.Group as={Row} className="m-0">
          <Form.Label column md="3">SORT BY:</Form.Label>

          <Col sm="6">
            <Form.Control as="select" custom>
              <option value="PRICE">PRICE</option>
              <option value="RATE">RATE</option>
            </Form.Control>
          </Col>

          <Col sm="3" className="d-flex justify-content-end p-0">
            <div className={style['view-option']}>
              <button
                className={cn({ 'rounded-0': true, active: type === 'list' })}
                onClick={onSwitchList}
              >
                <GiHamburgerMenu />
              </button>

              <button
                className={cn({ 'rounded-0': true, active: type === 'grid' })}
                onClick={onSwitchGrid}
              >
                <CgMenuGridO />
              </button>
            </div>
          </Col>
        </Form.Group>
      </Col>
    </Row>
  </div>
);

export default Index;
