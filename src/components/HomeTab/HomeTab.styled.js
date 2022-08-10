import styled from 'styled-components';

export const HomeTabWrapper = styled.div`
  position: relative;
  font-family: var(--baseFont);
  font-style: normal;
  font-weight: var(-regular);
  font-size: 16px;
  line-height: 24px;

  @media (max-width: 767px) {
    overflow-y: auto;
    scrollbar-gutter: stable;

    &::-webkit-scrollbar {
      position: absolute;
      width: 3px;
    }
    &::-webkit-scrollbar-thumb {
      background: #bdbdbd;
      border-radius: 10px;
    }
  }
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const List = styled.ul`
  height: 60vh;
  width: 277px;

  @media (min-width: 768px) {
    margin-top: 55px;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 16px 0 15px 0;
    background-color: transparent;
    border-bottom: 1px solid;
    border-bottom-color: var(--transaction-underline-color);
  }
`;

export const Text = styled.p`
  margin-top: 100px;
  margin-bottom: 100px;
  font-weight: var(--bold);
  font-size: 18px;
  line-height: 27px;
`;
