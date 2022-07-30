import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { useRegisterMutation } from '../../redux/authOperation';
import { Formik, ErrorMessage, Form } from 'formik';
import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { PasswordStrenght } from './PasswordStrength';

import {
  Input,
  InputContainer,
  SvgAccount,
  SvgEnvelope,
  SvgLock,
  RegisterButton,
  LoginButton,
  ButtonShow
} from './RegistrationForm.styled';
import { useNavigate } from 'react-router-dom';

export const FormRegistration = () => {
  const navigate = useNavigate();
  const [register, { isSuccess, isError }] = useRegisterMutation();
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().min(6).required(),
    password: yup.string().min(6).max(12).required(),
    repeated_password: yup.string().when('password', {
      is: val => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref('password')], 'Both password need to be the same'),
    }),
  });

  const defaultInitialValues = {
    name: '',
    email: '',
    password: '',
    repeated_password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const { name, email, password } = values;
    register({ name, email, password });
    resetForm();
    navigate('/login', { replace: true });
  };

  const FormError = ({ name }) => {
    return <ErrorMessage name={name} render={message => <p>{message}</p>} />;
  };

  const showHide = e => {
    e.preventDefault();
    e.stopPropagation();
    let currentType = type === 'input' ? 'password' : 'input';
    setType(currentType);
  };

  return (
    <>
      {isSuccess &&
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
      {isError && toast.error('Something wrong, try again!') && (
        <ToastContainer />
      )}
      <Formik
        initialValues={defaultInitialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form autoComplete="off">
          <InputContainer>
            <SvgEnvelope />
            <Input name="email" type="email" placeholder="E-mail" />
            <FormError name="email" />
          </InputContainer>
          <InputContainer>
            <SvgLock />
            <Input
              onInput={e => setPassword(e.target.value)}
              name="password"
              type={type}
              placeholder="Password"
            />
            <FormError name="password" />
            <PasswordStrenght password={password} />
          </InputContainer>
          <ButtonShow onClick={showHide}> {type === 'input' ? 'Hide' : 'Show'}</ButtonShow>

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
            <Input name="name" type="text" placeholder="First name " />
            <FormError name="name" />
          </InputContainer>
          <RegisterButton type="submit"> Register</RegisterButton>
          <ToastContainer />
        </Form>
      </Formik>
      <Link to="/login">
        <LoginButton type="button">Log in</LoginButton>
      </Link>
    </>
  );
};
