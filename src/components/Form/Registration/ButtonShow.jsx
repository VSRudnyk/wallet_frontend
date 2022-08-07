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
      <label id="password">
        {type === 'input' ? (
          <ButtonShow onClick={showHide} />
        ) : (
          <ButtonHide onClick={showHide} />
        )}

        <SvgLock />
        <Input
          id="password"
          onInput={onInput}
          name="password"
          type={type}
          placeholder="Password"
        />
      </label>
      <FormError name="password" />
    </>
  );
};
