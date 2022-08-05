import { useTranslation } from 'react-i18next';
import TransactionMobile from './TransactionMobile/TransactionMobile';
import Transaction from './Transaction';
import { Loader } from 'components/Loader';
import { v4 as uuidv4 } from 'uuid';
import { HomeTabWrapper, List, ListItem, Text } from './HomeTab.styled';
import Media from 'react-media';


/*export const HomeTab = ({ transactionsList}) => {
  const { t } = useTranslation();
*/

export const HomeTab = ({ page }) => {
  const { data, isLoading, isSuccess } = useGetAllTransactionsQuery({
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  const { t } = useTranslation();
  const [transactions, setTransactions] = useState([]);

  return (
    <HomeTabWrapper>
      <Media queries={{ mobile: { maxWidth: 767 } }}>
        {matches =>
          matches.mobile ? (
            transactionsList.length === 0 ? (
              !transactionsList ? (
                <Loader />
              ) : (
                <Text>{t('noTransactionText')}</Text>
              )
            ) : (
              <List>
                {transactionsList.map(transaction => {
                  return (
                    <ListItem key={uuidv4()}>
                      <TransactionMobile obj={transaction} />
                    </ListItem>
                  );
                })}
              </List>
            )

          ) : transactionsList.length === 0 ? (
            !transactionsList ? (
              <Loader />
            ) : (
              <Text>{t('noTransactionText')}</Text>
            )
          ) : (
            <Transaction transactionsList={transactionsList} />
          )
        }
      </Media>
    </HomeTabWrapper>
  );
};
