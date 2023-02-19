import styled from 'styled-components';

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 20%;
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
