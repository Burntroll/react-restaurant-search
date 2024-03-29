import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Address, Restaurant, RestaurantInfo, RestaurantPhoto, Title } from './styles';
import restaurante from '../../assets/restaurante-fake.png';

const RestaurantCard = ({ restaurant, onClick }) => (
  <Restaurant onClick={onClick}>
    <RestaurantInfo>
      <Title>{restaurant.name}</Title>
      <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor="#e7711c" />
      <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
    </RestaurantInfo>
    <RestaurantPhoto
      src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
      alt="Foto do restaurante"
    />
  </Restaurant>
);

export default RestaurantCard;
