import styled from 'styled-components';
import { BsFillTrashFill } from 'react-icons/bs';

export const Li = styled.li`
  position: relative;
  display: flex;
`;
export const Data = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: var(--baseFont);
  font-style: normal;
  font-weight: var(-regular);
  font-size: 16px;
  line-height: 24px;
  overflowwrap: break-word;
  &::after {
    content: '';
    position: absolute;
    left: 18px;
    top: 56.396px;
    background-color: #dcdcdf;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
    width: 95%;
    height: 1px;
  }
`;
export const Span = styled.span`
  color: ${props => (props.income === 'income' ? '#24CCA7' : '#ff6596')}; ;
`;

export const DelBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
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
