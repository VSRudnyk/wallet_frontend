import styled from 'styled-components';
import '../../stylesheet/fonts.css';

export const HeaderSection = styled.header`
  position: fixed;
  z-index: 1;
  width: 100%;
  background-color: var(--white);
  padding-top: 15px;
  padding-bottom: 15px;

  @media screen and (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  &:nth-child(1) {
    height: 30px;
  }
  @media screen and (min-width: 768px) {
    &:nth-child(1) {
      height: 40px;
    }
  }
`;

export const LogoStyle = styled.img`
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }
  @media screen and (min-width: 768px) {
    width: 38px;
    height: 30px;

    margin-right: 30px;
  }
`;

export const LogoName = styled.h1`
  font-family: var(--secondaryFont);
  font-style: normal;
  font-weight: var(--bold);
  font-size: 22px;
  line-height: 45px;
  display: flex;
  align-items: center;
  color: var(--black);
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

export const UserName = styled.p`
  font-family: var(--baseFont);
  font-style: normal;
  font-weight: var(--regular);
  font-size: 18px;
  line-height: 27px;
  text-align: right;
  color: var(--gray);
  margin-right: 8px;
  @media screen and (min-width: 768px) {
    margin-right: 0px;
    &::after {
      content: '';
      height: 30px;
      border: 1px solid var(--gray);
      margin-left: 12px;
      margin-right: 12px;
    }
  }
`;

export const LogoutImg = styled.img`
  @media screen and (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const LogoutButton = styled.button`
  &:hover {
    transform: scale(1.1);
  }
  display: flex;
  align-items: center;
  border: none;
  background-color: inherit;
`;

export const Logout = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    font-family: var(--baseFont);
    font-style: normal;
    font-weight: var(--reqular);
    font-size: 18px;
    line-height: 27px;
    color: var(--gray);
    margin-left: 8px;
  }
`;
