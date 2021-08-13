import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import cn from 'classnames';
import style from './style.module.scss';
import vehicles from 'constant/vehicles';
import { AiTwotoneCalendar } from 'react-icons/ai';

const Index = () => {
  return (
    <Fragment>
      <div>
        <div className={cn(style['btn-tab'], style.active)}>
          NEWS
        </div>

        <div className={style['btn-tab']}>
          OFFERS
        </div>

        <div className={style['btn-tab']}>
          POPULAR
        </div>
      </div>

      <div className={style.products}>
        <Container fluid>
          <Row>
            <Col md={12}>
              <div className={style.newest}>
                <Image
                  src={vehicles[0].image[0]}
                  className="w-50 mr-3"
                  alt={vehicles[0].name}
                />

                <div className="w-50">
                  <div className={style.title}>
                    Post title example
                  </div>

                  <div className={style['detail-items']}>
                    <AiTwotoneCalendar />
                    <span>2013 Maret, 2013</span>
                  </div>

                  <p className="my-2">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                  </p>

                  <Badge variant="danger" className="px-3 py-2 mt-3">
                    24
                  </Badge>
                </div>
              </div>
            </Col>

            <Col md={12}>
              <div className="d-flex w-100 border-top">
                <div className="border-right mr-3">
                  <div className="my-3">
                    {vehicles.slice(1, 4).map((v, i) => (
                      <div className={style.arrival} key={i}>
                        <Image
                          src={v.image[0]}
                          alt={v.name}
                        />

                        <div>
                          <div className={style.title}>
                            Post title example
                          </div>

                          <div className={style['detail-items']}>
                            <AiTwotoneCalendar />
                            <span>2013 Maret, 2013</span>
                          </div>

                          <Badge variant="danger" className="px-3 py-2 mt-2">
                            24
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="">
                  <div className="my-3">
                    {vehicles.slice(1, 4).map((v, i) => (
                      <div className={style.arrival} key={i}>
                        <Image
                          src={v.image[0]}
                          alt={v.name}
                        />

                        <div>
                          <div className={style.title}>
                            Post title example
                          </div>

                          <div className={style['detail-items']}>
                            <AiTwotoneCalendar />
                            <span>2013 Maret, 2013</span>
                          </div>

                          <Badge variant="danger" className="px-3 py-2 mt-2">
                            24
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Index;
