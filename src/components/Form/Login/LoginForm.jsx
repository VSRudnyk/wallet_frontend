import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { toast, ToastContainer, Slide } from 'react-toastify';
import { authSelectors } from 'redux/selector';
import { useLoginMutation } from 'redux/authOperation';
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
  const [login, { isError, error }] = useLoginMutation();
  const [status, setStatus] = useState(false);
  const statuss = useSelector(authSelectors.getStatus);

  useEffect(() => {
    setStatus(statuss);
  }, [statuss]);

  const defaultInitialValues = {
    email: '',
    password: '',
  };

  const schema = yup.object().shape({
    email: yup
      .string()
      .email()
      .min(6, 'must be at least 6 characters')
      .max(63, 'email length must be less than 63 characters')
      .matches(
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        'available latin-based alphabet, numeric character and _ . + -'
      )
      .required(),
    password: yup
      .string()
      .min(6, 'must be at least 6 characters')
      .max(12, 'password length must be less than 13 characters')
      .required(),
  });

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    login({ email, password });
    resetForm();
    setStatus(null);
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
      {isError && toast.error(error.data.message, {
          theme: 'colored',
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Slide,
        }) && <ToastContainer />}
      {status  &&
        toast.success('Registration success! Please, log in!', {
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
      <Formik
        initialValues={defaultInitialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormContainer autoComplete="off">
          <InputContainer>
            <label id="emal">
              <SvgEnvelope />
              <Input id="emal" name="email" type="email" placeholder="E-mail" />
            </label>
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
