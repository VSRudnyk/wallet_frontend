import styled, { keyframes } from 'styled-components';

export const SettingsBtnWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 25px;
  height: 25px;
  @media (min-width: 768px) {
    margin-right: 15px;
  }
`;
export const Button = styled.button`
  display: flex;
  background-color: transparent;
  width: 100%;
  border: none;
  fill: #bdbdbd;

  @media (min-width: 768px) {
    &:hover {
      fill: var(--blue);
    }
  }
`;
export const DropDown = styled.div`
  position: absolute;
  top: 100%;
  left: -106px;
  width: 130px;
  z-index: 2;
  opacity: ;
  visibility: ${props => (props.visibility === 'true' ? 'unset' : 'hidden')};
`;
export const List = styled.ul`
  background-color: #ffffff;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;

  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
`;
export const MenuListItem = styled.li`
  position: relative;
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  &:not(:last-child) {
    border-bottom: 1px solid;
    border-bottom-color: var(--transaction-underline-color);
  }
`;
export const ListItem = styled.li`
  position: relative;
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  &:not(:last-child) {
    border-bottom: 1px solid;
    border-bottom-color: var(--transaction-underline-color);
  }
`;
export const LangBtn = styled.button`
  display: flex;
  width: 100%;

  fill: #bdbdbd;
  background-color: var(--white);

  border: none;

  padding: 12px 10px 8px 10px;

  font-family: var(--baseFont);
  font-weight: var(--bold);
  font-size: 18px;
  line-height: 27px;

  &:hover {
    background-color: var(--blue);
    color: var(--white);
    cursor: pointer;
  }
`;
export const slideLeftAnimation = keyframes`
from {
    left -80px;
  }
  to {
    left: -215px;
  }
}
`;
export const SlideLeft = styled.div`
  position: absolute;
  top: 40px;
  left: -80px;
  width: 120px;
  height: auto;
  visibility: ${props => (props.visible ? 'unset' : 'hidden')};
  z-index: 1;
  border-radius: 20px;
  animation-name: ${slideLeftAnimation};
  animation-duration: 2250ms;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;
