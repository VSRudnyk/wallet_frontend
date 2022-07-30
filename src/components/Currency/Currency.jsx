import { Navigation } from 'components/Navigation/Navigation';
import { Container } from 'stylesheet/Container.styled';
import {
  TableHeaderContainer,
  TableHeaderList,
  TableHeaderListItem,
  TableBodyContainer,
  TableBodyList,
  TableBodyListItem,
  TableBodyText,
  TableWrapper,
} from './Currency.styled';

export const Currency = ({ page }) => {
  return (
    <>
      {/* <Container> */}
      {/* <Navigation /> */}
      <TableWrapper page={page}>
        <TableHeaderContainer>
          <TableHeaderList>
            <TableHeaderListItem>Currency</TableHeaderListItem>
            <TableHeaderListItem>Purchase</TableHeaderListItem>
            <TableHeaderListItem>Sale</TableHeaderListItem>
          </TableHeaderList>
        </TableHeaderContainer>
        <TableBodyContainer>
          <TableBodyList>
            <TableBodyListItem>
              <TableBodyText>USD</TableBodyText>
              <TableBodyText>27.55</TableBodyText>
              <TableBodyText>27.65</TableBodyText>
            </TableBodyListItem>
          </TableBodyList>
          <TableBodyList>
            <TableBodyListItem>
              <TableBodyText>UK</TableBodyText>
              <TableBodyText>27.65</TableBodyText>
              <TableBodyText>27.65</TableBodyText>
            </TableBodyListItem>
          </TableBodyList>
          <TableBodyList>
            <TableBodyListItem>
              <TableBodyText>EUR</TableBodyText>
              <TableBodyText>27.65</TableBodyText>
              <TableBodyText>27.65</TableBodyText>
            </TableBodyListItem>
          </TableBodyList>
        </TableBodyContainer>
      </TableWrapper>
      {/* </Container> */}
    </>
  );
};
