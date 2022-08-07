import {
  ContainerBalance,
  BalanceTitle,
  BalanceInWallet,
  IconInBalance,
  BalanceMain,
} from './Balance.styled';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export const Balance = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const balance = useSelector(state => state.global.currentBalance);
  const { pathname } = location;

  return (
    <>
      {pathname === '/wallet_frontend/home' && (
        <ContainerBalance>
          <BalanceTitle>{t('balanceComponent.yourBalance')}</BalanceTitle>

          <BalanceInWallet>
            <IconInBalance>₴ </IconInBalance>
            <BalanceMain>{balance.toFixed(2)}</BalanceMain>
          </BalanceInWallet>
        </ContainerBalance>
      )}
      <Media queries={{ tablet: { minWidth: 768 } }}>
        {matches =>
          matches.tablet &&
          pathname === '/wallet_frontend/diagram' && (
            <ContainerBalance>
              <BalanceTitle>{t('balanceComponent.yourBalance')}</BalanceTitle>

              <BalanceInWallet>
                <IconInBalance>₴ </IconInBalance>
                <BalanceMain>{balance.toFixed(2)}</BalanceMain>
              </BalanceInWallet>
            </ContainerBalance>
          )
        }
      </Media>
    </>
  );
};
