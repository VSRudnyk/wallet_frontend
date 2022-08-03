import { Link } from 'react-router-dom';
import { useLoginMutation } from '../../redux/loginOperation';
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
  FormContainer
} from './Form.styled';

export const LoginForm = () => {
  const [login, { error, isError, isSuccess }] = useLoginMutation();

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
    {isSuccess && toast.success("Welcome back!") && <ToastContainer />}
      {isError && toast.error(error.data.message) && <ToastContainer />}

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
            <SvgLock />
            <Input name="password" type="password" placeholder="Password" />
            <FormError name="password" />
          </InputContainer>
          <ToastContainer />
          <LoginButton type="submit">login</LoginButton>
        </FormContainer>
      </Formik>
      <Link to="/wallet_frontend/register">
        <RegisterButton type="button">register</RegisterButton>
      </Link>
    </>
  );
};
