import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { toast, ToastContainer, Slide } from 'react-toastify';
import { useRegisterMutation } from '../../../redux/authOperation';
import { PasswordInput } from './PasswordInput';
import 'react-toastify/dist/ReactToastify.css';
import {
  Input,
  InputContainer,
  SvgAccount,
  SvgEnvelope,
  SvgLock,
  RegisterButtonRegPage,
  LoginButtonRegPage,
  ErrorText,
  FormContainer,
  ButtonShow,
  ButtonHide,
} from '../Form.styled';

export const FormRegistration = () => {
  const navigate = useNavigate();
  const [type, setType] = useState('password');
  const confirmPassInFocus = useRef();

  useEffect(() => {
    if (confirmPassInFocus.active) {
      confirmPassInFocus.current.focus();
    }
  }, [confirmPassInFocus]);

  const showHide = () => {
    let currentType = type === 'input' ? 'password' : 'input';
    setType(currentType);
  };

  const [password, setPassword] = useState('');

  const [register, { isSuccess, status, error }] = useRegisterMutation();
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(1)
      .max(16, 'must be less than 16 characters')
      .required(),
    email: yup
      .string()
      .email()
      .matches(
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        'available latin-based alphabet, numeric character and _ . + -'
      )
      .min(6, 'must be at least 6 characters')
      .max(63, 'email length must be less than 63 characters')
      .required(),
    password: yup
      .string()
      .min(6, 'must be at least 6 characters')
      .max(12, 'password length must be less than 13 characters')
      .matches(/^(?!.*\s)/, ' whitespaces are forbidden.')
      .matches(/^(?=.*[0-9])/, 'must contain at least one numeric character')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])/,
        'must contain at least: one upper case letter, one lower case letter, only latin-based alphabet'
      )
      .required(),
    repeated_password: yup
      .string()
      .oneOf([yup.ref('password')], 'both passwords need to be the same')
      .required('is required field'),
  });

  const Pass = e => {
    setPassword(e.target.value);
  };

  const defaultInitialValues = {
    name: '',
    email: '',
    password: '',
    repeated_password: '',
  };

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    register({ name, email, password });
    setPassword('');
    resetForm();
  };

  useEffect(() => {
    if (!isSuccess) {
      return;
    }
    navigate('/wallet_frontend/login');
  }, [isSuccess, navigate]);

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
      {isSuccess &&
        status === 'fulfilled' &&
        password === '' &&
        toast.success('Success! Please, log in!', {
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
      {status === 'rejected' &&
        password === '' &&
        toast.error(error.data.message, {
          theme: 'colored',
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Slide,
        }) && <ToastContainer />}
      <Formik
        initialValues={defaultInitialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormContainer autoComplete="off">
          <InputContainer>
            <label id="email">
              <SvgEnvelope />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="E-mail"
              />
            </label>
            <FormError name="email" />
          </InputContainer>
          <PasswordInput onInput={Pass} password={password} />
          <InputContainer>
            <label id="repeated_password">
              {type === 'input' ? (
                <ButtonShow onClick={showHide} />
              ) : (
                <ButtonHide onClick={showHide} />
              )}
              <SvgLock />
              <Input
                id="repeated_password"
                name="repeated_password"
                type={type}
                placeholder="Confirm password"
                innerRef={confirmPassInFocus}
              />
            </label>
            <FormError name="repeated_password" />
          </InputContainer>
          <InputContainer>
            <label id="name">
              <SvgAccount />
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="First name"
              />
              <FormError name="name" />
            </label>
          </InputContainer>
          <RegisterButtonRegPage type="submit">Register</RegisterButtonRegPage>
          <ToastContainer />
        </FormContainer>
      </Formik>
      <Link to="/wallet_frontend/login">
        <LoginButtonRegPage type="button">Log in </LoginButtonRegPage>
      </Link>
      <ToastContainer />
    </>
  );
};
