import styled from 'styled-components';
import { BsFillTrashFill } from 'react-icons/bs';

export const List = styled.ul`
  @media screen and (max-width: 767px) {
    width: 277px;
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

  @media (max-width: 767px) {
    margin-left: auto;
  }
`;

export const Sum = styled.span`
  color: ${props => (props.income === 'income' ? '#24CCA7' : '#ff6596')};
`;
export const DelBtn = styled.button`
  position: absolute;
  left: 50%;
  top: 64%;
  transform: translate(-50%, -50%);

  background-color: transparent;
  outline: none;
  border: none;
  padding: 9px;
`;

export const Icon = styled(BsFillTrashFill)`
  cursor: pointer;
  color: #bdbdbd;
  &:hover {
    fill: #ff6596;
  }
`;
