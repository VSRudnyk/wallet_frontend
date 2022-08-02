import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  background-color: transparent;

  border: none;

  margin-right: 10px;
`;
export const BtnWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropDown = styled.div`
  position: absolute;
  top: 100%;
  left: -75px;
  width: max-content;
  z-index: 2;
`;
export const List = styled.ul`
  width: inherit;
  border-radius: 20px;
  overflow: hidden;

  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
`;
export const ListItem = styled.li`
  width: 100%;
  &:not(:last-child) {
    border-bottom: 1px solid;
    border-bottom-color: var(--transaction-underline-color);
  }
`;
export const LangBtn = styled.button`
  width: 100%;
  background-color: var(--white);

  border: none;

  padding: 12px 20px 8px 20px;

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
