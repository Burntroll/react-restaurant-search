import React from 'react';
import { Carousel } from '../pages/Home/styles';
import { Card } from '.';
import restaurant from '../assets/restaurante-fake.png';

export default function SimpleSlider() {
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
      <Card photo={restaurant} title="Restaurants name" />
      <Card photo={restaurant} title="Restaurants name" />
      <Card photo={restaurant} title="Restaurants name" />
      <Card photo={restaurant} title="Restaurants name" />
      <Card photo={restaurant} title="Restaurants name" />
      <Card photo={restaurant} title="Restaurants name" />
      <Card photo={restaurant} title="Restaurants name" />
      <Card photo={restaurant} title="Restaurants name" />
    </Carousel>
  );
}
