import React from 'react';
import { useHistory } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { AiTwotoneCalendar, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { IoLogoCapacitor, IoGitNetwork } from 'react-icons/io5';
import style from './style.module.scss';

const Index = props => {
  const { id, image, brand, name, year, capacity, price, location, transmission, rating } = props;
  const history = useHistory();

  return (
    <button
      onClick={() => history.push(`/product/${id}`)}
      className={style.container}
    >
      <Image src={image} className="w-100" alt={name} />

      <div className={style.title}>
        <div className={style.brand}>{brand}</div>
        <div className={style.name}>{name}</div>

        <small>{location.city}, <b>{location.id}</b></small>
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
        $ {price}
      </div>

      <div className={style.rating}>
        {[...new Array(rating)].map(index => <AiFillStar className="full" key={index} />)}
        {[...new Array(5 - rating)].map(index => <AiOutlineStar className="empty" key={index} />)}
      </div>
    </button>
  );
};

export default Index;
