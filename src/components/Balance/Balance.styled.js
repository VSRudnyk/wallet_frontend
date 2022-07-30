import styled from 'styled-components';
import '../../stylesheet/fonts.css';

export const ContainerBalance = styled.div`
  display: ${({ page }) => (page === 'home' ? 'block' : 'none')};
  background: var(--white);
  border-radius: 30px;
  padding-top: 8px;
  padding-bottom: 11px;
  padding-left: 32px;
  text-align: start;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    display: block;
    width: 336px;
    padding-left: 40px;
    margin-bottom: 20px;
    // ! После добавления валют убрать фиксированную ширину
    // ! После добавления валют задать отступ вниз от общего контейнера, а не от баланса
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
    margin-bottom: 32px;
    // ! После добавления валют задать отступ вниз от общего контейнера, а не от баланса
    // ! После добавления валют убрать фиксированную ширину
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

export const BalanceInWallet = styled.p`
  font-family: var(--secondaryFont);
  font-style: normal;
  font-weight: var(--reqular);
  font-size: 30px;
  line-height: 45px;
  display: flex;
  align-items: center;
  color: var(--black);
`;
