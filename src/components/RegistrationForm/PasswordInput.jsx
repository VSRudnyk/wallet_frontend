import { useState } from 'react';
import {
  Input,
  InputContainer,
  ButtonShow,
  SvgLock,
  ErrorTextPassword,
} from './RegistrationForm.styled';
import { PasswordStrenght } from './PasswordStrength';
import { ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';

export const PasswordInput = () => {
  const { t } = useTranslation();
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const showHide = e => {
    e.preventDefault();
    let currentType = type === 'input' ? 'password' : 'input';
    setType(currentType);
  };
  const messageLength = str => {
    if (str.length > 28) {
      return t('registration.password.short');
    }
    return t('registration.password.required');
  };
  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => (
          <ErrorTextPassword>{messageLength(message)}</ErrorTextPassword>
        )}
      />
    );
  };

  return (
    <InputContainer>
      <ButtonShow onClick={showHide} />
      <SvgLock />
      <Input
        onInput={e => setPassword(e.target.value)}
        name="password"
        type={type}
        placeholder={t('registration.placeholders.password')}
      />
      <FormError name="password" />
      <PasswordStrenght password={password} />
    </InputContainer>
  );
};
