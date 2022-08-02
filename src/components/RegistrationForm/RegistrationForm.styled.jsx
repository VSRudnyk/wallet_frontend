import styled from 'styled-components';
import '../../stylesheet/fonts.css';
import { Field } from 'formik';
import { ReactComponent as Envelope } from '../../images/email.svg';
import { ReactComponent as Lock } from '../../images/lock.svg';
import { ReactComponent as Account } from '../../images/account.svg';
import { ReactComponent as Eye } from '../../images/VectorEyes.svg';
import { ReactComponent as EyeClose } from '../../images/VectorEyeClose.svg';

export const Input = styled(Field)`
  padding: 10px 55px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid var(--light-gray);
  width: 280px;
  outline: none;

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

  &:hover, &:hover {
    box-shadow: 0 1px 0 0 var(--gray); 
}
`;

export const FormInputContainer = styled.div`
  margin-bottom: 40px;
`

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
  position: relative;
  transition: 0.5s;


  &:hover, &:focus, &:active{
    color: var(--green);
    background: var(--white);
    border: 1px solid var(--green);
    transition: 0.5s;
  }

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
  transition: 0.5s;

  &:hover, &:focus, &:active {
    color: var(--white);
    background-color: var(--active-blue);
    transition: 0.5s;
  }
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

export const ButtonHide = styled(EyeClose)`
position: absolute;
padding: 7px 7px;
right: 0;
top: 5px;
fill: var(--gray);

@media screen and (min-width: 768px) {
  right: 0;
  top: 0;
}
`;


export const ErrorText = styled.p`
position: absolute;
color: #D50C0C;
font-size: 14px;

`

export const ErrorTextPassword = styled.p`
margin-top: 5px;
position: absolute;
color: #D50C0C;
font-size: 14px;


@media screen and (max-width: 767px) {
  margin-top: 5px;
  color: var(--dark-grey);
}
`
