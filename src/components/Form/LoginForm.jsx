import { Link } from 'react-router-dom';
import { useLoginMutation } from 'redux/authOperation';
import { Formik, ErrorMessage } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import * as yup from 'yup';
import {
  Input,
  InputContainer,
  SvgEnvelope,
  SvgLock,
  LoginButton,
  RegisterButton,
  ErrorText,
  FormContainer,
  ButtonHide,
  ButtonShow,
} from './Form.styled';
import { useState } from 'react';

export const LoginForm = () => {
  const [login, { isError, isSuccess }] = useLoginMutation();
  const [type, setType] = useState('password');

  const showHide = e => {
    e.preventDefault();
    let currentType = type === 'input' ? 'password' : 'input';
    setType(currentType);
  };

  const defaultInitialValues = {
    email: '',
    password: '',
  };

  const schema = yup.object().shape({
    email: yup.string().email().min(6).required(),
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
      {isError && toast.error('Ooops, something wrong!') && <ToastContainer />}

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
            {type === 'input' ? (
              <ButtonShow onClick={showHide} />
            ) : (
              <ButtonHide onClick={showHide} />
            )}
            <SvgLock />
            <Input name="password" type={type} placeholder="Password" />
            <FormError name="password" />
          </InputContainer>
          <ToastContainer />
          <LoginButton type="submit">log in</LoginButton>
        </FormContainer>
      </Formik>
      <Link to="/wallet_frontend/register">
        <RegisterButton type="button">register</RegisterButton>
      </Link>
    </>
  );
};
