import styled from 'styled-components';
import '../../stylesheet/fonts.css';
import { Field } from 'formik';
import { ReactComponent as Envelope } from '../../images/email.svg';
import { ReactComponent as Lock } from '../../images/lock.svg';

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
  background: red;
  position: relative;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
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