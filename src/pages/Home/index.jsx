import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import { useSelector } from 'react-redux';
import MaterialIcon from '@material/react-material-icon/dist/index';
import { CarouselBox, CarouselTitle, Container, Search, Logo, Wrapper } from './styles';
import SimpleSlider from '../../components/CarouselSlider';
import { Modal, Map, RestaurantCard } from '../../components/index';
import logo from '../../assets/logo.svg';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(true);
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="companys logo" />
          <TextField
            label="Search Restaurants"
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(event) => setInputValue(event.target.value)}
              outlined
            />
          </TextField>
          <CarouselBox>
            <CarouselTitle>Near Me</CarouselTitle>
            <SimpleSlider />
          </CarouselBox>
          {restaurants.map((restaurant) => (
            <RestaurantCard
              onClick={() => handleOpenModal(restaurant.place_Id)}
              restaurant={restaurant}
            />
          ))}
        </Search>
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        <p>{restaurantSelected?.name}</p>
        {/* eslint-disable-next-line camelcase */}
        <p>{restaurantSelected?.formatted_phone_number}</p>
        {/* eslint-disable-next-line camelcase */}
        <p>{restaurantSelected?.formatted_address}</p>
      </Modal>
    </Wrapper>
  );
};

export default Home;
