import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader } from 'components/Loader';
// import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import { toast } from 'react-toastify';

// import { HashLoader } from 'react-spinners';

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
  // LoaderWrapper,
} from './Currency.styled';
import { useLocation, Navigate } from 'react-router-dom';
// import { getCurrency } from './API/ApiCurrency';

export const Currency = ({ page }) => {
  const [currency, setCurrency] = useState([]);
  const [status, setStatus] = useState('pending');
  const { t } = useTranslation();

  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    setStatus('pending');
    let data = new Date();
    let currentDate = data.getTime();

    const isSaveLocal = JSON.parse(localStorage.getItem('currency'));
    if (isSaveLocal) {
      const time = currentDate - isSaveLocal.date;
      if (time < 3600000) {
        setStatus('resolve');
        setCurrency(isSaveLocal.currency);
        return;
      }
    }
    async function FetchCurrency() {
      const arrMainCurrency = [];
      let result = null;
      try {
        const currency = await axios(
          'https://wallet-backend-1.herokuapp.com/api/currency'
        );

        for (let currencyBack of currency.data.exchangeRate) {
          if (
            currencyBack.currency === 'USD' ||
            currencyBack.currency === 'EUR' ||
            currencyBack.currency === 'PLZ'
          ) {
            arrMainCurrency.push(currencyBack);
          }
        }
        result = currency.data.exchangeRate.filter(
          cur =>
            cur.currency !== 'RUB' &&
            cur.currency !== 'USD' &&
            cur.currency !== 'EUR' &&
            cur.currency !== 'PLZ'
        );
        result.push(...arrMainCurrency);
        const DateToLocal = {
          date: data.getTime(),
          currency: result.reverse(),
        };
        localStorage.setItem('currency', JSON.stringify(DateToLocal));
        setStatus('resolve');
        return setCurrency(result);
      } catch (error) {
        console.log(error);
        toast.error('Something wrong, try again!');
      }
    }
    FetchCurrency();
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
                  <TableHeaderListItem key={uuidv4()}>
                    {t('currencyPage.currency')}
                  </TableHeaderListItem>
                  <TableHeaderListItem key={uuidv4()}>
                    {t('currencyPage.purchase')}
                  </TableHeaderListItem>
                  <TableHeaderListItem key={uuidv4()}>
                    {t('currencyPage.sale')}
                  </TableHeaderListItem>
                </TableHeaderList>
              </TableHeaderContainer>
              <TableBodyContainer>
                <TableBodyList>
                  {currency.length > 0 &&
                    currency.map(({ currency, purchaseRateNB, saleRateNB }) => {
                      return (
                        <TableBodyListItem key={uuidv4()}>
                          <TableBodyText>{currency}</TableBodyText>
                          <TableBodyText>
                            {Number(purchaseRateNB).toFixed(2)}
                          </TableBodyText>
                          <TableBodyText>
                            {Number(saleRateNB).toFixed(2)}
                          </TableBodyText>
                        </TableBodyListItem>
                      );
                    })}

                  {
                    status === 'pending' && <Loader color="red" size="35" />
                    // <Loader color="#f7f7f7" size="35" />
                    // <LoaderWrapper>
                    //   <HashLoader
                    //     color="#f7f7f7"
                    //     loading
                    //     size={35}
                    //     speedMultiplier={1.5}
                    //   />
                    // </LoaderWrapper>
                  }
                </TableBodyList>
              </TableBodyContainer>
              {/* <ToastContainer /> */}
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
                  <TableHeaderListItem>
                    {t('currencyPage.currency')}
                  </TableHeaderListItem>
                  <TableHeaderListItem>
                    {t('currencyPage.purchase')}
                  </TableHeaderListItem>
                  <TableHeaderListItem>
                    {t('currencyPage.sale')}
                  </TableHeaderListItem>
                </TableHeaderList>
              </TableHeaderContainer>
              <TableBodyContainer>
                <TableBodyList>
                  {currency.length > 0 &&
                    currency.map(({ currency, purchaseRateNB, saleRateNB }) => {
                      return (
                        <TableBodyListItem key={uuidv4()}>
                          <TableBodyText>{currency}</TableBodyText>
                          <TableBodyText>
                            {Number(purchaseRateNB).toFixed(2)}
                          </TableBodyText>
                          <TableBodyText>
                            {Number(saleRateNB).toFixed(2)}
                          </TableBodyText>
                        </TableBodyListItem>
                      );
                    })}
                  {/* <Loader color="red" size="35" /> */}
                  {status === 'pending' && (
                    <Loader color="red" size="35" />
                    // <Loader color="#f7f7f7" size="35" />
                    // <LoaderWrapper>
                    //   <HashLoader
                    //     color="#f7f7f7"
                    //     loading
                    //     size={45}
                    //     speedMultiplier={1.5}
                    //   />
                    // </LoaderWrapper>
                  )}
                </TableBodyList>
              </TableBodyContainer>
              {/* <ToastContainer /> */}
            </TableWrapper>
          )
        }
      </Media>
    </>
  );
};
