import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Address, Restaurant, RestaurantInfo, RestaurantPhoto, Title } from './styles';
import restaurant from '../../assets/restaurante-fake.png';

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Restaurants Name</Title>
      <ReactStars count={5} isHalf value={4} edit={false} activeColor="#e7711c" />
      <Address>Rua Joaquim Ferreira, 120</Address>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurant} alt="Restaurants photo" />
  </Restaurant>
);

export default RestaurantCard;
