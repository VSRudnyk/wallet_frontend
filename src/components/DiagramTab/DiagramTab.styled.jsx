import styled from 'styled-components';
import '../../stylesheet/fonts.css';

export const DiagramTabWrapper = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
export const DiagramButtonsWrapper = styled.div``;
export const DiagramButton = styled.div`
  position: relative;

  &:hover {
    fill: var(--active-blue);
  }
  & svg {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    cursor: pointer;
    transition: fill 500ms ease;
    pointer-events: none;
  }
`;
export const DiagramCustomSelect = styled.select`
  display: flex;

  width: 100%;
  padding: 12px 21px 14px 20px;
  margin-bottom: 20px;
  border: 1px solid var(--black);
  border-radius: 30px;

  font-family: var(--baseFont);
  font-style: normal;
  font-weight: var(--regular);
  font-size: 16px;
  line-height: 1.47;
  background: none;
  cursor: pointer;
  outline: none;

  appearance: none;
`;
export const DiagramTableBar = styled.div`
  //margin-top: 32px;

  @media screen and (min-width: 320px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    width: 336px;
    //margin-top: 11px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
    margin-top: 56px;
  }
`;
