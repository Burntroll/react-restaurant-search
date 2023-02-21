import styled from 'styled-components';

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 6px;
  background-color: #fefefe;
  border-left: 5px solid transparent;
  padding: 16px;
  :hover {
    background-color: ${(props) => props.theme.colors.background};
    border-left-color: ${(props) => props.theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.4rem;
`;

export const Address = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 0.9rem;
  line-height: 1.2rem;
  margin-top: 8px;
`;

export const RestaurantPhoto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 6px;
  object-fit: cover;
`;
