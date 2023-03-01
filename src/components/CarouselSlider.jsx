import React from 'react';
import { useSelector } from 'react-redux';
import { Carousel } from '../pages/Home/styles';
import { Card } from '.';
import restaurante from '../assets/restaurante-fake.png';

export default function SimpleSlider() {
  const { restaurants } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Carousel {...settings}>
      {restaurants.map((restaurant) => (
        <Card
          key={restaurant.place_id}
          photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
          title={restaurant.name}
        />
      ))}
    </Carousel>
  );
}
