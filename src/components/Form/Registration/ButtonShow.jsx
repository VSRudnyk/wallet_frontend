import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { ErrorMessage } from 'formik';
import {
  Input,
  ButtonShow,
  ButtonHide,
  SvgLock,
  ErrorTextPassword,
} from '../Form.styled';

export const ButtonShowAndHide = ({ onInput }) => {
  const [type, setType] = useState('password');
  const passInFocus = useRef();

  useEffect(() => {
    if (passInFocus.active) {
      passInFocus.current.focus();
    }
  }, [passInFocus]);

  const showHide = () => {
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
          innerRef={passInFocus}
        />
      </label>
      <FormError name="password" />
    </>
  );
};
