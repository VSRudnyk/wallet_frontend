import styled from 'styled-components';
import '../../stylesheet/fonts.css';
import '../../stylesheet/vars.css';

export const Switch = styled.div`
  border-radius: 50%;
  width: 44px;
  height: 44px;
  position: relative;
  background: var(--green);
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  cursor: pointer;
`;

export const SwitchElGor = styled.div`
  width: 2px;
  height: 20px;
  background-color: var(--white);
  position: absolute;
  top: 12px;
  left: 21px;
`;

export const SwitchElVert = styled.div`
  width: 20px;
  height: 2px;
  background-color: var(--white);
  position: absolute;
  left: 12px;
  top: 21px;
`;
