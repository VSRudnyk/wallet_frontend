import {
  ContainerBalance,
  BalanceTitle,
  BalanceInWallet,
} from './Balance.styled';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';

import { useLocation } from 'react-router-dom';

export const Balance = ({ page }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      {pathname === '/wallet_frontend/home' && (
        <ContainerBalance page={page}>
          <BalanceTitle>{t('balanceComponent.yourBalance')}</BalanceTitle>
          <BalanceInWallet>₴ 24 000.00</BalanceInWallet>
        </ContainerBalance>
      )}
      <Media queries={{ tablet: { minWidth: 768 } }}>
        {matches =>
          matches.tablet &&
          pathname === '/wallet_frontend/diagram' && (
            <ContainerBalance page={page}>
              <BalanceTitle>{t('balanceComponent.yourBalance')}</BalanceTitle>
              <BalanceInWallet>₴ 24 000.00</BalanceInWallet>
            </ContainerBalance>
          )
        }
      </Media>
    </>
  );
};
