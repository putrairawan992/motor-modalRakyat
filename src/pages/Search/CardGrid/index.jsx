import React from 'react';
import { useHistory } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { AiTwotoneCalendar, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { IoLogoCapacitor, IoGitNetwork } from 'react-icons/io5';
import { FaUserAlt } from 'react-icons/fa';
import style from './style.module.scss';

const Index = props => {
  const { id, image, brand, name, year, capacity, price, location, transmission, rating, admin } = props;
  const history = useHistory();

  return (
    <button
      onClick={() => history.push(`/product/${id}`)}
      className={style.container}
    >
      <Image src={image} alt={name} />

      <div className="pl-3 w-50">
        <div className={style.title}>
          <span className={style.brand}>{brand} {' '}</span>
          <span className={style.name}>{name}</span>
        </div>

        <div className="w-100 d-flex align-items-center justify-content-between">
          <small>{location.city}, <b>{location.id}</b></small>

          <div className="d-flex align-items-center">
            <FaUserAlt size={12} />
            <small className="ml-2">{admin}</small>
          </div>
        </div>

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

        <div className={style.price}>
          <div>$ {price}</div>

          <div className={style.rating}>
            {[...new Array(rating)].map((v, i) => <AiFillStar className="full" key={i} />)}
            {[...new Array(5 - rating)].map((v, i) => <AiOutlineStar className="empty" key={i} />)}
          </div>
        </div>

      </div>
    </button>
  );
};

export default Index;
