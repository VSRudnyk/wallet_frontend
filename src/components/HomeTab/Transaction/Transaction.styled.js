import styled from 'styled-components';

export const TableContainer = styled.div`
  position: relative;
  width: 715px;
  height: 38vh;
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #bdbdbd;
    border-radius: 10px;
  }
`;

export const List = styled.ul`
  width: 100%;

  &:not(:last-child) {
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    background-color: var(--white);
    border-radius: 30px;
    padding: 16px 0 15px 0;
  }
`;

export const Li = styled.li`
  width: 100%;
  font-family: var(--baseFont);
  font-style: normal;
  font-weight: var(--bold);
  font-size: 16px;
  line-height: 24px;
`;
