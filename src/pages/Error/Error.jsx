import { Container } from 'stylesheet/Container.styled';
import { useTranslation } from 'react-i18next';
import Error from '../../assets/images/Error.jpeg';
import { ErrorContainer, ErrorText, BackToHome } from './Error.styled';

export const ErrorPage = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <ErrorText>
        {t('errorPage.message')}
        <BackToHome to="/wallet_frontend/home">
          {t('errorPage.home')}
        </BackToHome>
      </ErrorText>

      <ErrorContainer>
        <img src={Error} alt={t('errorPage.alt')} />
      </ErrorContainer>
    </Container>
  );
};
