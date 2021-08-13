import React from 'react';
import { FaCarSide, FaTruckMoving, FaMotorcycle, FaBusAlt } from 'react-icons/fa';
import { GiCaravan } from 'react-icons/gi';

const categories = [
  {
    name: 'Car',
    icon: <FaCarSide size={24} />,
    count: 894
  }, {
    name: 'Truck',
    icon: <FaTruckMoving size={24} />,
    count: 274
  }, {
    name: 'Motobikes',
    icon: <FaMotorcycle size={24} />,
    count: 369
  }, {
    name: 'Buses',
    icon: <FaBusAlt size={24} />,
    count: 156
  }, {
    name: 'Campers',
    icon: <GiCaravan size={24} />,
    count: 479
  }
];

export default categories;
