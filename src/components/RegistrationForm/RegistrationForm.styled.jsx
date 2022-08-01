import styled from 'styled-components';
import '../../stylesheet/fonts.css';
import { Field } from 'formik';
import { ReactComponent as Envelope } from '../../images/email.svg';
import { ReactComponent as Lock } from '../../images/lock.svg';
import { ReactComponent as Account } from '../../images/account.svg';
import { ReactComponent as Eye } from '../../images/VectorEyes.svg';

export const Input = styled(Field)`
  padding: 10px 55px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  border-bottom: 1px solid var(--light-gray);
  width: 280px;
  outline: none;
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
    margin-bottom: 30px;
  }

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
}


`;

export const SvgEnvelope = styled(Envelope)`
  position: absolute;
  top: 8px;
  left: 8px;
  @media screen and (min-width: 768px) {
    top: 2px;
  }
`;

export const SvgLock = styled(Lock)`
position: absolute;   
 top: 8px;
left: 8px;
@media screen and (min-width: 768px) {
    top: 2px;
  }

`;

export const SvgAccount = styled(Account)`
position: absolute;
top: 8px;
left: 8px;
@media screen and (min-width: 768px) {
    top: 2px;
  }
`;

export const RegisterButton = styled.button`
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
  margin-bottom: 20px;
`;

export const LoginButton = styled.button`
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
`;

export const ButtonShow = styled(Eye)`
position: absolute;
padding: 7px 7px;
right: 0;
top: 5px;
@media screen and (min-width: 768px) {
  right: 0;
  top: 0;
}
`;

export const ErrorText = styled.p`
position: absolute;
color: var(--dark-grey);
font-size: 14px;

`

export const ErrorTextPassword = styled.p`
margin-top: 5px;
position: absolute;
color: var(--dark-grey);
font-size: 14px;


@media screen and (max-width: 767px) {
  margin-top: 5px;
  color: var(--dark-grey);
}
`
