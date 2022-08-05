import styled from 'styled-components';
export const TableContainer = styled.div`
  position: relative;
  height: 35vh;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Table = styled.table`
  width: 100%;
  @media (min-width: 1280px) {
    width: 715px;
  }
`;

export const Th = styled.th`
  position: sticky;
  top: 0;
  background-color: #ffffff;
  padding: 16px 0 15px 0;
  font-family: var(--baseFont);
  font-style: normal;
  font-weight: var(--bold);
  font-size: 18px;
  line-height: 27px;
  &:first-child {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }
  &:last-child {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
  z-index: 1;
`;

export const BodyTd = styled.td`
  // padding: 16px 0 15px 0;
  font-family: var(--baseFont);
  font-style: normal;
  font-weight: var(--regular);
  font-size: 18px;
  line-height: 27px;
  word-wrap: wrap;
  width: 50px;
  &:first-child {
    padding-left: 20px;
  }
  &:last-child {
    padding-right: 20px;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 56.396px;
    background-color: #dcdcdf;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
    width: 100%;
    height: 1px;
  }
  &:first-child {
    &::after {
      left: 17px;
      width: 84%;
    }
  }
  &:last-child {
    &::after {
      width: 84%;
    }
  }
`;
/////////PAGINATION////////////
export const Pagination = styled.div`
  position: absolute;
  top: 486px;

  width: 100%;
`;
export const PaginationBtn = styled.button`
  width: 50px;
  padding: 10px;
  border: none;
  background-color: transparent;
  outline: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  &:hover {
    background-color: var(--blue);
    fill: var(--white);
  }
`;
export const PaginationSpan = styled.span`
  font-family: var(--baseFont);
  font-style: normal;
  font-weight: var(--regular);
  font-size: 18px;
  line-height: 27px;
  margin-left: 20px;
`;
