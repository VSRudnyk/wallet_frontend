import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    margin-bottom: 28px;
  }
`;

export const NavigationButton = styled.button`
  border: none;
  background-color: inherit;
  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-right: 38px;
    }
  }

  @media screen and (min-width: 768px) {
    &:last-child {
      display: none;
    }
    &:nth-child(1) {
      margin-bottom: 21px;
    }
  }
`;

export const Link = styled(NavLink)`
  font-family: var(--secondaryFont);
  font-style: normal;
  font-weight: var(--reqular);
  font-size: 18px;
  line-height: 27px;
  color: var(--black);
  & > svg {
    width: 38px;
    height: 38px;
    fill: #6e78e8;
  }
  &.active {
    font-weight: var(--bold);
    & > svg {
      fill: #4a56e2;
    }
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  }
  @media screen and (min-width: 768px) {
    & > svg {
      width: 18px;
      height: 18px;
    }
    display: flex;
    align-items: center;
  }
`;

export const LinkName = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    margin-left: 23px;
  }
`;
