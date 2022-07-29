import styled from 'styled-components';

export const List = styled.ul`
  margin-left: auto;
  margin-right: auto;
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 16px 0 15px 0;
    border-bottom: 1px solid;
    border-bottom-color: #dcdcdf;
    &nth-of-type(1) {
      margin-top: 53px;
    }
  }
`;

export const TransactionSpan = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const Span = styled.span`
  font-family: var(--baseFont);
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
`;
export const TransactionsContainer = styled.ul`
  position: relative;
  width: 704px;
  border-radius: 30px;

  margin-left: auto;
  margin-right: auto;
  overflow: hidden;

  height: 40vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 1023px) {
    width: 715px;
  }
`;
export const TransactionsContainerItem = styled.li`
  width: 100%;
  background-color: transparent;
  @media (min-width: 1023px) {
    width: 715px;
  }
`;
