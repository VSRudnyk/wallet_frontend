import { Link } from 'react-router-dom';
import { useLoginMutation } from '../../redux/login/loginOperation';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import { toast, ToastContainer, } from 'react-toastify';
import { LoginFormStyled, Input, InputContainer, SvgEnvelope, lock, LoginButton } from './LoginFormStyled'

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
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }) && <ToastContainer />}
      {isError && toast.error('Something wrong, try again!') && (
        <ToastContainer />
          )}
          < InputContainer >
                <Formik
        initialValues={defaultInitialValues}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <label htmlFor="email">Email </label>
          <Field name="email" type="email" placeholder="E-mail" />
          <FormError name="email" />
          <label htmlFor="password">Password </label>
          <Field name="password" type="password" placeholder="Password" />
          <FormError name="password" />
          <ToastContainer />
        </Form>
      </Formik>
</InputContainer>
      <Link to="/login">
        <button type="button">LogIn</button>
      </Link>
    </>
  );
};
