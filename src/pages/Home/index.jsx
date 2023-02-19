import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import { Container, Search } from './styles';
import logo from '../../assets/logo.svg';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Container>
      <Search>
        <img src={logo} alt="companys logo" />
        <TextField
          label="Search"
          // onTrailingIconSelect={() => this.setState({ value: '' })}
          // </Search>trailingIcon={<MaterialIcon role="button" icon="delete" />}
        >
          <Input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            outlined
          />
        </TextField>
      </Search>
    </Container>
  );
};

export default Home;
