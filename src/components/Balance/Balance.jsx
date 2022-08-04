import {
  ContainerBalance,
  BalanceTitle,
  BalanceInWallet,
} from './Balance.styled';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';

import { useLocation } from 'react-router-dom';
import { useGetAllTransactionsQuery } from 'redux/transactionsOperation';

export const Balance = ({ page }) => {
  const { data } = useGetAllTransactionsQuery();
  const { t } = useTranslation();
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      {pathname === '/wallet_frontend/home' && (
        <ContainerBalance page={page}>
          <BalanceTitle>{t('balanceComponent.yourBalance')}</BalanceTitle>
          <BalanceInWallet>
            {data && data.length > 0
              ? data.map(({ balance }) => {
                  return balance;
                })
              : 0}
          </BalanceInWallet>
        </ContainerBalance>
      )}
      <Media queries={{ tablet: { minWidth: 768 } }}>
        {matches =>
          matches.tablet &&
          pathname === '/wallet_frontend/diagram' && (
            <ContainerBalance page={page}>
              <BalanceTitle>{t('balanceComponent.yourBalance')}</BalanceTitle>
              <BalanceInWallet>
                {data && data.length > 0
                  ? data.map(({ balance }) => {
                      return balance;
                    })
                  : 0}
              </BalanceInWallet>
            </ContainerBalance>
          )
        }
      </Media>
    </>
  );
};
