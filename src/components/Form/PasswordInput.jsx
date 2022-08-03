import { useState } from 'react';
import {
  Input,
  InputContainer,
  ButtonShow,
  ButtonHide,
  SvgLock,
  ErrorTextPassword,
} from './Form.styled';
import { PasswordStrenght } from './PasswordStrength';
import { ErrorMessage } from 'formik';

export const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const showHide = e => {
    e.preventDefault();
    let currentType = type === 'input' ? 'password' : 'input';
    setType(currentType);
  };

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => (
          <ErrorTextPassword>{message}</ErrorTextPassword>
        )}
      />
    );
  };

  return (
    <InputContainer>
      {type === 'input' ? (
        <ButtonShow onClick={showHide} />
      ) : (
        <ButtonHide onClick={showHide} />
      )}

      <SvgLock />
      <Input
        onInput={e => setPassword(e.target.value)}
        name="password"
        type={type}
        placeholder="password"
      />
      <FormError name="Password" />
      <PasswordStrenght password={password} />
    </InputContainer>
  );
};
