import { Link } from 'react-router-dom';
import { useLoginMutation } from 'redux/authOperation';
import { Formik, ErrorMessage } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import * as yup from 'yup';
import { ButtonShowAndHide } from '../Registration/ButtonShow';

import {
  Input,
  InputContainer,
  SvgEnvelope,
  LoginButtonLogPage,
  RegisterButtonLogPage,
  ErrorText,
  FormContainer,
} from '../Form.styled';

export const LoginForm = () => {

  const [login, { isError, isSuccess }] = useLoginMutation();

  const defaultInitialValues = {
    email: '',
    password: '',
  };

  const schema = yup.object().shape({
    email: yup.string().email().min(6).max(63).required(),
    password: yup.string().min(6).max(12).required(),
  });

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    login({ email, password });
    resetForm();
  };

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <ErrorText>{message}</ErrorText>}
      />
    );
  };

  return (
    <>
      {isSuccess && toast.success('Welcome back!') && <ToastContainer />}
      {isError && toast.error('Email or password wrong') && <ToastContainer />}

      <Formik
        initialValues={defaultInitialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormContainer autoComplete="off">
          <InputContainer>
            <SvgEnvelope />
            <Input name="email" type="email" placeholder="E-mail" />
            <FormError name="email" />
          </InputContainer>
          <InputContainer>
            <ButtonShowAndHide />
          </InputContainer>
          <ToastContainer />
          <LoginButtonLogPage type="submit">log in</LoginButtonLogPage>
        </FormContainer>
      </Formik>
      <Link to="/wallet_frontend/register">
        <RegisterButtonLogPage type="button">register</RegisterButtonLogPage>
      </Link>
    </>
  );
};
