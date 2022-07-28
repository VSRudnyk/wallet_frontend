import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 320px) {
    width: 280px;
  }

  @media screen and (min-width: 768px) {
    width: 532px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 1248px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
