import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { HashLoader } from 'react-spinners';
import Media from 'react-media';

import {
  TableHeaderContainer,
  TableHeaderList,
  TableHeaderListItem,
  TableBodyContainer,
  TableBodyList,
  TableBodyListItem,
  TableBodyText,
  TableWrapper,
  LoaderWrapper,
} from './Currency.styled';
import { useLocation, Navigate } from 'react-router-dom';

export const Currency = ({ page }) => {
  const [currency, setCurrency] = useState([]);
  const [status, setStatus] = useState('pending');

  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    axios('https://wallet-backend-1.herokuapp.com/api/currency').then(res => {
      setStatus('pending');
      const arrMainCurrency = [];
      let result = null;
      for (let currencyBack of res.data.exchangeRate) {
        if (
          currencyBack.currency === 'USD' ||
          currencyBack.currency === 'EUR' ||
          currencyBack.currency === 'PLZ'
        ) {
          arrMainCurrency.push(currencyBack);
        }
      }
      result = res.data.exchangeRate.filter(
        cur =>
          cur.currency !== 'RUB' &&
          cur.currency !== 'USD' &&
          cur.currency !== 'EUR' &&
          cur.currency !== 'PLZ'
      );
      result.push(...arrMainCurrency);

      result.reverse();
      setCurrency(result);
      setStatus('resolve');
    });
  }, []);
  return (
    <>
      <Media queries={{ table: { minWidth: 768 } }}>
        {matches =>
          matches.table &&
          pathname !== '/wallet_frontend/home' &&
          pathname !== '/wallet_frontend/diagram' && (
            <Navigate to="/wallet_frontend/home" />
          )
        }
      </Media>
      <Media queries={{ mobile: { minWidth: 320 } }}>
        {matches =>
          matches.mobile &&
          pathname === '/wallet_frontend/currency' && (
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
                  {currency.length > 0 &&
                    currency.map(({ currency, purchaseRateNB, saleRateNB }) => {
                      return (
                        <>
                          <TableBodyListItem key={uuidv4()}>
                            <TableBodyText key={uuidv4()}>
                              {currency}
                            </TableBodyText>
                            <TableBodyText key={uuidv4()}>
                              {Number(purchaseRateNB).toFixed(2)}
                            </TableBodyText>
                            <TableBodyText key={uuidv4()}>
                              {Number(saleRateNB).toFixed(2)}
                            </TableBodyText>
                          </TableBodyListItem>
                        </>
                      );
                    })}
                  {status === 'pending' && (
                    <LoaderWrapper>
                      <HashLoader
                        color="#f7f7f7"
                        loading
                        size={35}
                        speedMultiplier={1.5}
                      />
                    </LoaderWrapper>
                  )}
                </TableBodyList>
              </TableBodyContainer>
            </TableWrapper>
          )
        }
      </Media>
      <Media queries={{ tablet: { minWidth: 768 } }}>
        {matches =>
          matches.tablet && (
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
                  {currency.length > 0 &&
                    currency.map(({ currency, purchaseRateNB, saleRateNB }) => {
                      return (
                        <>
                          <TableBodyListItem key={uuidv4()}>
                            <TableBodyText key={uuidv4()}>
                              {currency}
                            </TableBodyText>
                            <TableBodyText key={uuidv4()}>
                              {Number(purchaseRateNB).toFixed(2)}
                            </TableBodyText>
                            <TableBodyText key={uuidv4()}>
                              {Number(saleRateNB).toFixed(2)}
                            </TableBodyText>
                          </TableBodyListItem>
                        </>
                      );
                    })}

                  {status === 'pending' && (
                    <LoaderWrapper>
                      <HashLoader
                        color="#f7f7f7"
                        loading
                        size={45}
                        speedMultiplier={1.5}
                      />
                    </LoaderWrapper>
                  )}
                </TableBodyList>
              </TableBodyContainer>
            </TableWrapper>
          )
        }
      </Media>
    </>
  );
};
