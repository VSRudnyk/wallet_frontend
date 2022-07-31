import styled from 'styled-components';

export const TableWrapper = styled.div`
  display: ${({ page }) => (page === 'currency' ? 'block' : 'none')};
  @media screen and (min-width: 768px) {
    display: block;
    width: 336px;
    height: 182px;
  }
  @media screen and (min-width: 1280px) {
    width: 393px;
    height: 347px;
  }
`;

export const TableHeaderContainer = styled.div`
  background: var(--blue);
  padding: 11px 20px 12px 20px;
  border-radius: 30px 30px 0px 0px;
  @media screen and (min-width: 1280px) {
    padding: 17px 64px 16px 44px;
  }
`;

export const TableHeaderList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TableHeaderListItem = styled.li`
  font-family: var(--baseFont);
  font-style: normal;
  font-weight: var(--bold);
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: var(--white);
`;

export const TableBodyContainer = styled.div`
  background: var(--active-blue);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 12px 20px 16px 20px;
  @media screen and (min-width: 768px) {
    padding: 16px 20px 12px 20px;
  }
  @media screen and (min-width: 1280px) {
    padding: 20px 61px 147px 58px;
  }
  /* background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) -8.67%,
    rgba(255, 255, 255, 0) 116.22%
  ); */
`;

export const TableBodyList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const TableBodyListItem = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const TableBodyText = styled.p`
  width: 33px;
  text-align: start;
  font-family: var(--baseFont);
  font-style: normal;
  font-weight: var(--reqular);
  font-size: 16px;
  line-height: 24px;
  color: var(--white);
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  @media screen and (min-width: 1280px) {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;
