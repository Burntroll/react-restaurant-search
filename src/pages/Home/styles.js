import Slider from 'react-slick';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  min-width: 20%;
  max-width: 20%;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fefefe;
  margin-top: 16px;
`;

export const Logo = styled.img`
  margin-bottom: 16px;
`;

export const Map = styled.div`
  background-color: lightblue;
  height: 100vh;
  width: 100%;
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 1.45rem;
  font-weight: bold;
  line-height: 3rem;
`;

export const CarouselBox = styled.div`
  padding: 0 16px 16px 16px;
`;

export const Carousel = styled(Slider)`
  .slick-slider {
    margin: 16px;
  }
`;
