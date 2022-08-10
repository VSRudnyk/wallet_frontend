import styled from 'styled-components';

import Line from '../../assets/images/line-currency-min.png';

export const TableWrapper = styled.div`
  margin-top: 15px;
  @media screen and (min-width: 768px) {
    position: relative;
    display: block;
    width: 336px;
    margin-top: 0;
  }
  @media screen and (min-width: 1280px) {
    width: 393px;
  }
`;

export const TableHeaderContainer = styled.div`
  background: var(--blue);
  padding: 11px 20px 12px 20px;
  border-radius: 30px 30px 0px 0px;
  @media screen and (min-width: 1280px) {
    padding: 17px 64px 16px 44px;
  }
`;

export const TableHeaderList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TableHeaderListItem = styled.li`
  font-family: var(--baseFont);
  font-style: normal;
  font-weight: var(--bold);
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: var(--white);
`;

export const TableBodyContainer = styled.div`
  background: var(--active-blue);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 12px 15px 16px 20px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 16px 15px 12px 20px;
  }
  @media screen and (min-width: 1280px) {
    height: 282px;
    padding: 20px 61px 20px 58px;
  }
  background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2) -8.67%,
      rgba(255, 255, 255, 0) 116.22%
    ),
    url(${Line});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
`;

export const TableBodyList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 124px;
  overflow-y: hidden;
  overflow-y: scroll;
  width: 260px;
  &::-webkit-scrollbar {
    width: 0;
  }
  @media screen and (min-width: 768px) {
    width: 310px;
    height: 111px;
  }
  @media screen and (min-width: 1280px) {
    width: 290px;
    height: 270px;
  }
`;

export const TableBodyListItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 240px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
  @media screen and (min-width: 1280px) {
    width: 269px;
  }
`;

export const TableBodyText = styled.p`
  font-family: var(--baseFont);
  font-style: normal;
  font-weight: var(--reqular);
  font-size: 16px;
  line-height: 24px;

  width: 36px;
  height: 24px;
  &:not(:last-child) {
    margin-right: 64px;
  }

  color: var(--white);
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  @media screen and (min-width: 768px) {
    width: 40px;
    &:not(:last-child) {
      margin-right: 95px;
    }
  }
  @media screen and (min-width: 1280px) {
    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 24px;
    }
  }
`;

export const LoaderWrapper = styled.div`
  @media screen and (min-width: 320px) {
    margin-left: 100px;
    margin-top: 30px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 20px;
    margin-left: 120px;
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    margin-top: 0px;
    margin-left: 0px;
  }
`;
