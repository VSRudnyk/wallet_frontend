import styled from 'styled-components';
import '../../stylesheet/fonts.css';
import { Field, Form } from 'formik';
import { ReactComponent as Envelope } from '../../assets/images/email.svg';
import { ReactComponent as Lock } from '../../assets/images/lock.svg';
import { ReactComponent as Account } from '../../assets/images/account.svg';
import { ReactComponent as Eye } from '../../assets/images/VectorEyes.svg';
import { ReactComponent as EyeClose } from '../../assets/images/VectorEyeClose.svg';

export const Base = styled.div`
  display: block;
  height: 4px;
  box-shadow: 1px -2px 16px #e3e8e3;
  margin-top: 1px;
  transition: 1s;
  width: 0%;
  border-radius: 25px;
`;

export const FormContainer = styled(Form)`
  margin-bottom: 20px;
  margin-top: 60px;
`;

export const Input = styled(Field)`
  padding: 10px 55px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  border-bottom: 1px solid var(--light-gray);
  width: 280px;
  outline: none;
  font-family: var(--baseFont);
  font-weight: var(--regular);
  transition: border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  @media screen and (min-width: 767px) {
    width: 409.5px;
    height: 32px;
  }
  ::placeholder {
    color: var(--gray);
    font-family: var(--baseFont);
    font-weight: var(--regular);
    font-size: 18px;
    line-height: 1;
  }
`;

export const InputContainer = styled.div`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const SvgEnvelope = styled(Envelope)`
  position: absolute;
  top: 2px;
  left: 8px;
  @media screen and (min-width: 768px) {
    top: 2px;
  }
`;

export const SvgLock = styled(Lock)`
  position: absolute;
  top: 2px;
  left: 8px;
  @media screen and (min-width: 768px) {
    top: 2px;
  }
`;

export const SvgAccount = styled(Account)`
  position: absolute;
  top: 2px;
  left: 8px;
  @media screen and (min-width: 768px) {
    top: 2px;
  }
`;

export const LoginButtonRegPage = styled.button`
  background-color: var(--white);
  color: var(--active-blue);
  width: 280px;
  border-radius: 50px;
  height: 50px;
  border: 1px solid var(--active-blue);
  font-family: var(--baseFont);
  font-weight: var(--regular);
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: 0.5s;

  &:hover {
    transition: 0.7s;
    transform: scale(1.1);
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  color: var(--error-message);
  font-size: 14px;
  font-family: var(--baseFont);
  font-weight: var(--regular);
`;

export const ErrorTextPassword = styled.p`
  margin-top: 5px;
  position: absolute;
  color: var(--error-message);
  font-size: 12px;
  font-family: var(--baseFont);
  font-weight: var(--regular);
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const RegisterButtonRegPage = styled.button`
  background-color: var(--green);
  color: var(--white);
  width: 280px;
  border-radius: 50px;
  height: 50px;
  border: none;
  font-family: var(--baseFont);
  font-weight: var(--regular);
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: 0.5s;

  &:hover {
    transition: 0.7s;
    transform: scale(1.1);
  }
`;

export const LoginButtonLogPage = styled.button`
  background-color: var(--green);
  color: var(--white);
  width: 280px;
  border-radius: 50px;
  height: 50px;
  border: none;
  font-family: var(--baseFont);
  font-weight: var(--regular);
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: 0.5s;

  &:hover {
    transition: 0.7s;
    transform: scale(1.1);
  }
`;

export const RegisterButtonLogPage = styled.button`
  background-color: var(--white);
  color: var(--active-blue);
  width: 280px;
  border-radius: 50px;
  height: 50px;
  border: 1px solid var(--active-blue);
  font-family: var(--baseFont);
  font-weight: var(--regular);
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: 0.7s;

  &:hover {
    transition: 0.7s;
    transform: scale(1.1);
  }
`;

export const ButtonShow = styled(Eye)`
  position: absolute;
  padding: 7px 7px;
  right: 0;
  top: -3px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    right: 0;
    top: 0;
  }
`;

export const ButtonHide = styled(EyeClose)`
  position: absolute;
  padding: 7px 7px;
  right: 0;
  top: -3px;
  fill: var(--gray);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    right: 0;
    top: 0;
  }
`;
