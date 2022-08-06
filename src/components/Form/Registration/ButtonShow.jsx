import { useState } from 'react';
import {
  Input,
  ButtonShow,
  ButtonHide,
  SvgLock,
  ErrorTextPassword,
} from '../Form.styled';
import { ErrorMessage } from 'formik';

export const ButtonShowAndHide = ({ onInput, password }) => {
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
        render={message => <ErrorTextPassword>{message}</ErrorTextPassword>}
      />
    );
  };

  return (
    <>
      {type === 'input' ? (
        <ButtonShow onClick={showHide} />
      ) : (
        <ButtonHide onClick={showHide} />
      )}

      <SvgLock />
      <Input
        onInput={onInput}
        name="password"
        type={type}
        placeholder="Password"
      />
      <FormError name="password" />
    </>
  );
};
