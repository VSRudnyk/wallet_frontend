import {
  ContainerBalance,
  BalanceTitle,
  BalanceInWallet,
} from './Balance.styled';

export const Balance = ({ page }) => {
  return (
    <ContainerBalance page={page}>
      <BalanceTitle>Your balance</BalanceTitle>
      <BalanceInWallet>₴ 24 000.00</BalanceInWallet>
    </ContainerBalance>
  );
};
