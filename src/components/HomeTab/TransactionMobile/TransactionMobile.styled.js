import styled from 'styled-components';

export const List = styled.ul`
  @media screen and (max-width: 767px) {
    width: 280px;
    border-radius: 10px;

    overflow: hidden;
  }
  @media screen and (min-width: 768px) {
    display: flex;

    justify-content: space-between;
  }
`;

export const ListItem = styled.li`
  background-color: transparent;

  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    position: relative;

    padding: 12px 20px 8px 20px;
    background-color: var(--transaction-item-bg-color);

    border-bottom: 1px solid;
    border-bottom-color: var(--transaction-underline-color);

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      background-color: ${props =>
        props.type === 'income' ? '#24CCA7' : '#ff6596'};
      width: 5px;
      height: 100%;
    }
  }
  @media screen and (min-width: 768px) {
    width: 110px;
    display: flex;
    justify-content: center;
  }
`;
export const TransactionDescrp = styled.p`
  font-family: var(--baseFont);
  font-style: normal;
  font-weight: var(--bold);
  font-size: 18px;
  line-height: 27px;

  color: var(--black);
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const TransactionData = styled.p`
  position: relative;
  overflow: hidden;
  font-family: var(--baseFont);
  font-style: normal;
  font-weight: var(-regular);
  font-size: 16px;
  line-height: 24px;

  @media (max-width: 767px) {
    margin-left: auto;
  }
`;

export const Sum = styled.span`
  color: ${props => (props.income === 'income' ? '#24CCA7' : '#ff6596')};
`;
