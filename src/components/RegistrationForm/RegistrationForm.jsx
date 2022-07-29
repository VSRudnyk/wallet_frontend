import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { useRegisterMutation } from '../../redux/authOperation';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import { toast, ToastContainer, Slide } from 'react-toastify';

export const FormRegistration = () => {
  // const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(12).required(),
    repeated_password: yup.string().when('password', {
      is: val => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref('password')], 'Both password need to be the same'),
    }),
  });

  const [register, { isSuccess, isError }] = useRegisterMutation();

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
    // navigate("/login", { replace: true })
  };

  const FormError = ({ name }) => {
    return <ErrorMessage name={name} render={message => <p>{message}</p>} />;
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
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" placeholder="Enter your name" />
          <FormError name="name" />
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" placeholder="Enter your e-mail" />
          <FormError name="email" />
          <label htmlFor="password">Password</label>
          <Field name="password" type="password" placeholder="Password" />
          <FormError name="password" />
          <Field
            name="repeated_password"
            type="password"
            placeholder="Confirm password"
          />
          <FormError name="repeated_password" />
          <button type="submit"> Create!</button>
          <ToastContainer />
        </Form>
      </Formik>
      <Link to="/login">
        <button type="button">Login</button>
      </Link>
    </>
  );
};
