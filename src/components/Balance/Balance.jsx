import {
  ContainerBalance,
  BalanceTitle,
  BalanceInWallet,
} from './Balance.styled';

export const Balance = () => {
  return (
    <ContainerBalance>
      <BalanceTitle>Your balance</BalanceTitle>
      <BalanceInWallet>₴ 24 000.00</BalanceInWallet>
    </ContainerBalance>
  );
};
