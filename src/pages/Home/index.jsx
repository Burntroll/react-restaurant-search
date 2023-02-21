import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon/dist/index';
import { CarouselBox, CarouselTitle, Container, Search, Logo, Map, Wrapper } from './styles';
import SimpleSlider from '../../components/CarouselSlider';
import { Modal, RestaurantCard } from '../../components/index';
import logo from '../../assets/logo.svg';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);

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
              onChange={(event) => setInputValue(event.target.value)}
              outlined
            />
          </TextField>
          <CarouselBox>
            <CarouselTitle>Near Me</CarouselTitle>
            <SimpleSlider />
          </CarouselBox>
          <RestaurantCard />
          <button type="button" onClick={() => setModalOpened(true)}>
            Abrir Modal
          </button>
        </Search>
      </Container>
      <Map />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  );
};

export default Home;
