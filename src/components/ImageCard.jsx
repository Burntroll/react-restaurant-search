import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #fefefe;
  font-size: 0.8rem;
  margin: 0.5rem;
`;

const ImageCard = ({ photo, title }) => (
  // eslint-disable-next-line no-unused-expressions
  <Card photo={photo}>
    <Title>{title}</Title>
  </Card>
);

export default ImageCard;
