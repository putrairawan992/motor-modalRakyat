import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import cn from 'classnames';
import style from './style.module.scss';
import vehicles from 'constant/vehicles';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { IoLogoCapacitor } from 'react-icons/io5';

const Index = () => {
  return (
    <Fragment>
      <div>
        <div className={cn(style['btn-tab'], style.active)}>
          USED
        </div>

        <div className={style['btn-tab']}>
          NEW
        </div>
      </div>

      <div className={style.products}>
        <Container fluid>
          <Row>
            <Col md="6" xs={12} className={style.border}>
              <div className={style.newest}>
                <Image
                  src={vehicles[0].image[0]}
                  className="w-100"
                  alt={vehicles[0].name}
                />

                <div className={style.title}>
                  <span className={style.brand}>{vehicles[0].brand}</span>
                  <span className={style.name}>{vehicles[0].name}</span>
                </div>

                <div className={style['detail-items']}>
                  <AiTwotoneCalendar />
                  <span>{vehicles[0].year}</span>
                </div>

                <div className={style['detail-items']}>
                  <IoLogoCapacitor />
                  <span>{vehicles[0].capacity}</span>
                </div>

                <span className={style.price}>
                  $ {vehicles[0].price}
                </span>
              </div>
            </Col>

            <Col md="6" xs={12}>
              <div className="my-3">
                {vehicles.slice(1, 4).map((v, i) => (
                  <div className={style.arrival} key={i}>
                    <Image
                      src={v.image[0]}
                      alt={v.name}
                    />

                    <div>
                      <div className={style.title}>
                        <span className={style.brand}>{v.brand}</span>
                        <span className={style.name}>{v.name}</span>
                      </div>

                      <div className={style['detail-items']}>
                        <AiTwotoneCalendar />
                        <span>{v.year}</span>
                      </div>

                      <div className={style['detail-items']}>
                        <IoLogoCapacitor />
                        <span>{v.capacity}</span>
                      </div>

                      <span className={style.price}>
                        $ {v.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Index;
