import styled from 'styled-components';
import '../../stylesheet/fonts.css';

export const ContainerBalance = styled.div`
  background: var(--white);
  border-radius: 30px;
  padding-top: 8px;
  padding-bottom: 11px;
  padding-left: 32px;
  text-align: start;
  margin-top: 15px;
  margin-bottom: 32px;
  padding-right: 20px;
  @media screen and (min-width: 768px) {
    display: block;
    width: 336px;
    padding-left: 40px;
    margin-bottom: 20px;
    margin-top: 28px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
    margin-bottom: 32px;
  }
`;

export const BalanceTitle = styled.p`
  font-family: var(--baseFont);
  font-style: normal;
  font-weight: var(--reqular);
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
  color: var(--dark-grey);
`;

export const BalanceInWallet = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    height: 0;
  }
  & > p:first-child {
    margin-right: 5px;
  }
`;

export const IconInBalance = styled.p`
  font-family: var(--baseFont);
  font-style: normal;
  font-weight: var(--reqular);
  font-size: 30px;
  line-height: 45px;
  color: var(--black);
`;

export const BalanceMain = styled.p`
  font-family: var(--secondaryFont);
  font-style: normal;
  font-weight: var(--bold);
  font-size: 30px;
  line-height: 45px;
  color: var(--black);
`;
