import { useState } from 'react';
import { Input, InputContainer, ButtonShow, SvgLock, ErrorTextPassword } from './RegistrationForm.styled';
import { PasswordStrenght } from './PasswordStrength';
import { ErrorMessage } from 'formik';


export const Pass = () => {
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const showHide = e => {
    e.preventDefault();
    let currentType = type === 'input' ? 'password' : 'input';
    setType(currentType);
  };
  const FormError = ({ name }) => {
    return <ErrorMessage name={name} render={message => <ErrorTextPassword>{message}</ErrorTextPassword>} />;
  };

  return (
    <InputContainer>
    <ButtonShow onClick={showHide}/>
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
    

  );
};
