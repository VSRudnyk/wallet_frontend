import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { useRegisterMutation } from '../../redux/authOperation';
import { Formik, ErrorMessage, Form } from 'formik';
import { toast, ToastContainer, Slide } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';
import {
  Input,
  InputContainer,
  SvgAccount,
  SvgEnvelope,
  SvgLock,
  RegisterButton,
  LoginButton,
  ErrorText,
  FormInputContainer,
} from './RegistrationForm.styled';
import { PasswordInput } from './PasswordInput';

export const FormRegistration = () => {
  const [register, { isSuccess, isError, status, error }] =
    useRegisterMutation();
  const { t } = useTranslation();

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().min(6).required(),
    password: yup.string().min(6).max(12).required(),

    repeated_password: yup.string().when('password', {
      is: val => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref('password')], t('registration.password.notequal')),
    }),
  });

  const defaultInitialValues = {
    name: '',
    email: '',
    password: '',
    repeated_password: '',
  };

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    register({ name, email, password });
    resetForm();
  };

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => (
          <ErrorText>{t(`registration.required.${name}`)}</ErrorText>
        )}
      />
    );
  };

  return (
    <>
      {isSuccess &&
        status === 'fulfilled' &&
        toast.success(t('registration.status.success'), {
          theme: 'colored',
          icon: '🚀',
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Slide,
        }) && <ToastContainer />}
      {isError && toast.error(t('registration.status.error')) && (
        <ToastContainer />
      )}
      <Formik
        initialValues={defaultInitialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form autoComplete="off">
          <FormInputContainer>
            <InputContainer>
              <SvgEnvelope />
              <Input
                name="email"
                type="email"
                placeholder={t('registration.placeholders.e-mail')}
              />
              <FormError name="email" />
            </InputContainer>
            <PasswordInput />
            <InputContainer>
              <SvgLock />
              <Input
                name="repeated_password"
                type="password"
                placeholder={t('registration.placeholders.confirmpassword')}
              />
              <FormError name="repeated_password" />
            </InputContainer>
            <InputContainer>
              <SvgAccount />
              <Input
                name="name"
                type="text"
                placeholder={t('registration.placeholders.firstname')}
              />
              <FormError name="name" />
            </InputContainer>
          </FormInputContainer>
          <RegisterButton type="submit">
            {t('registration.buttons.register')}
          </RegisterButton>
          <ToastContainer />
        </Form>
      </Formik>
      <Link to="/wallet_frontend/login">
        <LoginButton type="button">
          {t('registration.buttons.login')}
        </LoginButton>
      </Link>
      <ToastContainer />
    </>
  );
};
