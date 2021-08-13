import React, { Fragment } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiTwotoneCalendar, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { IoLogoCapacitor, IoGitNetwork, IoColorFillSharp } from 'react-icons/io5';
import { IoMdColorFill } from 'react-icons/io';
import { MdLocalGasStation } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import style from './style.module.scss';

const Index = props => {
  const { image, brand, name, year, capacity, price, location, transmission, rating, admin, color, fuel, description, preview, vendor } = props;

  return (
    <Fragment>
      <div className={style.container}>
        <header className={style.header}>
          <h1>{name}</h1>

          <div className={style.rating}>
            {[...new Array(rating)].map((v, i) => <AiFillStar className="full" key={i} />)}
            {[...new Array(5 - rating)].map((v, i) => <AiOutlineStar className="empty" key={i} />)}
          </div>
        </header>

        <Row className="m-3 d-flex">
          <Col md={6} xs={12}>
            <Image
              src={image[0]}
              alt={name}
              className="w-100 mb-3"
            />

            <div className={style['list-image']}>
              {image.slice(1, image.length - 1).map((v, i) => (
                <div key={i} className="image-item">
                  <Image
                    src={v}
                    alt={name}
                    className="w-100 h-100"
                  />
                </div>
              ))}
            </div>
          </Col>

          <Col md={6} xs={12}>
            <div className={style.title}>
              <span className={style.brand}>{brand} {` `}</span>
              <span className={style.name}>{name}</span>
            </div>

            <div className="w-100 mb-2">
              <small>{location.city}, <b>{location.id}</b></small>

              <div className="d-flex align-items-center">
                <FaUserAlt size={12} />
                <small className="ml-2">{admin}</small>
              </div>
            </div>

            <div className={style.detail}>
              <div className="w-50">
                <div className={style['detail-items']}>
                  <AiTwotoneCalendar />
                  <span>{year}</span>
                </div>

                <div className={style['detail-items']}>
                  <IoLogoCapacitor />
                  <span>{capacity}</span>
                </div>

                <div className={style['detail-items']}>
                  <IoGitNetwork />
                  <span>{transmission}</span>
                </div>
              </div>

              <div className="w-50">
                <div className={style['detail-items']}>
                  <MdLocalGasStation />
                  <span>{fuel}</span>
                </div>

                <div className={style['detail-items']}>
                  <IoColorFillSharp />
                  <span>{color.interior}</span>
                </div>

                <div className={style['detail-items']}>
                  <IoMdColorFill />
                  <span>{color.exterior}</span>
                </div>
              </div>
            </div>

            <div className={style.price}>
              <div>$ {price}</div>

              <Button variant="danger">
                BUY THIS VEHICLE
              </Button>
            </div>
          </Col>
        </Row>
      </div>

      <div className={style.container}>
        <header className={style.header}>
          <h1>Info</h1>
        </header>

        <div className="p-3">
          <p>{description}</p>
          <p>{preview}</p>
        </div>
      </div>

      <div className={style.container}>
        <header className={style.header}>
          <h1>Vendor</h1>
        </header>

        <div className="p-3 d-flex justify-content-between">
          <img src="https://i.pravatar.cc/100?img=2" alt="vendor" />

          <div className="w-50">
            <div className="mb-3"><b>{vendor.name}</b></div>
            <div>City: <b>{location.city}</b></div>
            <div>Proposition: <b>{vendor.proposition}</b></div>
            <div>Last Visited: <b>{vendor.lastVisit}</b></div>
          </div>

          <div className="text-center d-flex flex-column justify-content-end">
            <div className="text-danger mb-3">See full vendor's info</div>

            <Button size="lg" className="w-100">
              + (555) 555 551
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
