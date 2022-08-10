import styled from 'styled-components';
import '../../stylesheet/fonts.css';

export const Switch = styled.div`
  position: absolute;
  bottom: 3vh;
  right: 20px;
  border-radius: 50%;
  width: 44px;
  height: 44px;

  background: var(--green);

  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  cursor: pointer;
  @media screen and (min-width: 768px) {
    top: 48vh;
    left: 702px;
  }
  @media screen and (min-width: 1280px) {
    left: 644px;
  }
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
