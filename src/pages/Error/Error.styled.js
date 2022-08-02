import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import '../../stylesheet/fonts.css';

export const ErrorText = styled.h1`
  font-family: var(--baseFont);
  color: var(--black);
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 24px;
  line-height: 1.5;
  & > a {
    margin-left: 4px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 75px;
  }
`;

export const BackToHome = styled(NavLink)`
  color: var(--green);
`;

export const ErrorContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 400px;

    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 1280px) {
    margin-left: auto;
    margin-right: auto;
    width: 450px;
    height: 450px;
  }
`;
