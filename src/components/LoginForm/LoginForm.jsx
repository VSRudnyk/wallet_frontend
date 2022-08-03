import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../redux/authOperation';
import { ErrorMessage, Form, Formik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/selector';
import { useTranslation } from 'react-i18next';

import { Input, InputContainer, LoginButton, RegisterButton, SvgEnvelope, SvgLock } from './LoginForm.styled';

export const LoginForm = () => {
  const [login, { isSuccess, isError }] = useLoginMutation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isToken = useSelector(authSelectors.getToken);
  const defaultInitialValues = {
    email: '',
    password: '',
  };
  if (isToken) {
    navigate('/wallet_frontend/home', { replace: true });

    return;
  }

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    login({ email, password });
    resetForm();
  };

  const FormError = ({ name }) => {
    return <ErrorMessage name={name} render={message => <p>{message}</p>} />;
  };

  return (
    <>
      {isSuccess &&
        toast.success(t('login.status.success'), {
          theme: 'colored',
          icon: '🆗',
          autoClose: 8000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }) && <ToastContainer />}
      {isError && toast.error(t('login.status.error')) && <ToastContainer />}

      <Formik initialValues={defaultInitialValues} onSubmit={handleSubmit}>
        <Form autoComplete='off'>
          <InputContainer>
            <SvgEnvelope />
            <Input
              name='email'
              type='email'
              placeholder={t('login.placeholders.e-mail')}
            />
            <FormError name='email' />
          </InputContainer>
          <InputContainer>
            <SvgLock />
            <Input
              name='password'
              type='password'
              placeholder={t('login.placeholders.password')}
            />
            <FormError name='password' />
          </InputContainer>
          <ToastContainer />
          <LoginButton type='submit'>{t('login.buttons.login')}</LoginButton>
        </Form>
      </Formik>
      <Link to='/wallet_frontend/register'>
        <RegisterButton type='button'>
          {t('login.buttons.register')}
        </RegisterButton>
      </Link>
    </>
  );
};
