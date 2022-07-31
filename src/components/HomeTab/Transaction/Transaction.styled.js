import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: space-between;

  background-color: #ffffff;

  border-radius: 30px;
  background-color: white;
  padding: 16px 0 15px 0;
`;
export const ListItem = styled.li`
  width: 110px;
  display: flex;
  justify-content: center;
`;
export const Span = styled.span`
  font-family: var(--baseFont);
  font-weight: var(--bold);
  font-size: 18px;
  line-height: 27px;
`;
////////////////table////////////////
export const TableContainer = styled.div`
  position: relative;

  height: 46vh;
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
export const Thead = styled.thead``;

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
export const Tr = styled.tr``;
export const BodyTd = styled.td`
  position: relative;
  padding: 16px 0 15px 0;
  font-family: var(--baseFont);
  font-style: normal;
  font-weight: var(--regular);
  font-size: 18px;
  line-height: 27px;
  word-wrap: break-word;
  // color: ${props => (props.income === '+' ? '#24CCA7' : '#ff6596')};
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

// ${props => (props.type === '+' ? '#24CCA7' : '#ff6596')};
