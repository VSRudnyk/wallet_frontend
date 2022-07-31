import { Link } from 'react-router-dom';
import { useLoginMutation } from '../../redux/loginOperation';
import { Formik, ErrorMessage, Form } from 'formik';
import { toast, ToastContainer, } from 'react-toastify';
import {
  Input,
  InputContainer,
  SvgEnvelope,
  SvgLock,
  LoginButton
} from './LoginForm.styled'

export const LoginForm = () => {

  const [login, { isSuccess, isError }] = useLoginMutation();

  const defaultInitialValues = {
    email: '',
    password: '',
  };

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
        toast.success('Success log in!', {
          theme: 'colored',
          icon: '🆗',
          autoClose: 8000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }) && <ToastContainer />}
      {isError && toast.error('Something wrong, try again!') && (
        <ToastContainer />
          )}
    
      <Formik
        initialValues={defaultInitialValues}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
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
        </Form>
      </Formik>
      <Link to="/login">
        <LoginButton type="button">Log in</LoginButton>
      </Link>
    </>
  );
};
