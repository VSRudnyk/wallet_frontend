import styled from 'styled-components';
import { BsFillTrashFill } from 'react-icons/bs';

export const Li = styled.li`
  position: relative;
  display: flex;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
  &::after {
    content: '';
    position: absolute;
    left: 18px;
    top: 56.396px;
    background-color: #dcdcdf;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
    width: 95%;
    height: 1px;
    z-index: -3;
  }
`;
export const Data = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow-wrap: break-word;
  z-index: -2;
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
