import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { useRegisterMutation } from '../../redux/authOperation';
import { Formik, ErrorMessage } from 'formik';
import { toast, ToastContainer, Slide } from 'react-toastify';
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
  FormContainer,
} from './Form.styled';
import { PasswordInput } from './PasswordInput';

export const FormRegistration = () => {
  const [register, { isSuccess, isError, status, error }] =
    useRegisterMutation();

  const schema = yup.object().shape({
    name: yup.string().max(16).required(),
    email: yup.string().email().min(6).required(),
    password: yup.string().min(6).max(12).matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*\s)/,
      "must be one uppercase, one number"
    ).required(),
    repeated_password: yup.string().when('password', {
      is: val => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref('password')], 'both password need to be the same'),
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
        render={message => <ErrorText>{message}</ErrorText>}
      />
    );
  };


  return (
    <>
      {isSuccess &&
        status === 'fulfilled' &&
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
      {isError && toast.error(error.data.message) && <ToastContainer />}
      <Formik
        initialValues={defaultInitialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormContainer autoComplete="off">
          <InputContainer>
            <SvgEnvelope />
            <Input name="email" type="email" placeholder="E-mail" />
            <FormError name="email" />
          </InputContainer>
          <PasswordInput />
          <InputContainer>
            <SvgLock />
            <Input
              name="repeated_password"
              type="password"
              placeholder="Confirm password"
            />
            <FormError name="repeated_password" />
          </InputContainer>
          <InputContainer>
            <SvgAccount />
            <Input name="name" type="text" placeholder="Firstname" />
            <FormError name="name" />
          </InputContainer>
          <RegisterButton type="submit">Register</RegisterButton>
          <ToastContainer />
        </FormContainer>
      </Formik>
      <Link to="/wallet_frontend/login">
        <LoginButton type="button">Login </LoginButton>
      </Link>
      <ToastContainer />
    </>
  );
};
