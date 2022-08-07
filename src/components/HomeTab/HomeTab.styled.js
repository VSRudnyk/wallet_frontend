import styled from 'styled-components';

export const HomeTabWrapper = styled.div`
  position: relative;
  & > button:nth-child(1) {
    margin-right: 30px;
  }
  @media screen and (min-width: 768px) {
    /* position: relative; */
    display: block;
    margin-top: 46px;
  }
`;

export const List = styled.ul`
  height: 65vh;
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

export const TransactionSpan = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const Span = styled.span`
  font-family: var(--baseFont);
  font-weight: var(--bold);
  font-size: 18px;
  line-height: 27px;
`;
export const TransactionsContainer = styled.ul`
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  height: 40vh;

  @media (min-width: 1280px) {
    &:nth-child(2) {
      margin-top: 50px;
    }
  }
`;

export const TransactionsContainerItem = styled.li`
  background-color: transparent;
  @media (min-width: 768px) {
    width: 704px;
  }
  @media (min-width: 1280px) {
    width: 660px;
  }
`;

export const Text = styled.p`
  margin-top: 100px;
  font-family: var(--baseFont);
  font-weight: var(--bold);
  font-size: 18px;
  line-height: 27px;
`;

export const TempBtn = styled.button`
  background-color: var(--active-blue);
  color: var(--white);
  border: none;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-family: var(--baseFont);
  font-weight: var(--bold);
  font-size: 18px;
  line-height: 27px;
`;
