import styled from 'styled-components';
import '../../stylesheet/fonts.css';
import { ReactComponent as Close } from '../../assets/images/Сlose.svg';
import { ReactComponent as Select } from '../../assets/images/select_open.svg';
import { ReactComponent as Calendar } from '../../assets/images/calendar.svg';
import DatePicker from 'react-datepicker';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  background: transparent;
  z-index: 1200;
  @media screen and (min-width: 768px) {
    justify-content: center;
    align-items: center;
    background: var(--backdrop);
  }
`;

export const Modal = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  margin-top: 60px;
  overflow: scroll;
  overflow-y: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
  overflow-x: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    height: 0;
  }
  background-color: var(--white);
  @media screen and (min-width: 768px) {
    width: 540px;
    border-radius: 20px;
  }
`;

export const ButtonClose = styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 20px;
    height: 20px;
    border: none;
    outline: none;
    position: absolute;
    right: 20px;
    top: 20px;
    background-color: var(--white);
  }
`;

export const CloseSvg = styled(Close)`
  text-align: center;
  width: 16px;
  height: 16px;
`;

export const ModalName = styled.p`
  margin-top: 20px;
  margin-bottom: 40px;
  font-family: var(--secondaryFont);
  font-style: normal;
  font-weight: var(--regular);
  font-size: 24px;
  line-height: 36px;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
    text-shadow: 0px 4px 4px var(--backdrop);
    line-height: 45px;
    font-family: var(--secondaryFont);
    margin-bottom: 40px;
    font-weight: var(--regular);
    font-size: 30px;
  }
`;

export const SwitchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  height: 44px;
  cursor: pointer;
`;

export const SwitchText = styled.span`
  font-family: var(--baseFont);
  font-style: normal;
  font-weight: var(--bold);
  font-size: 16px;
  line-height: 24px;
  text-align: right;
`;

export const SwitchIncome = styled(SwitchText)`
  color: ${props => (props.nonActive ? 'var(--light-gray)' : 'var(--green)')};
  margin-right: 20px;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;

export const SwitchExpence = styled(SwitchText)`
  color: ${props => (props.nonActive ? 'var(--pink)' : 'var(--light-gray)')};
  margin-left: 20px;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;

export const SwtchCase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  border: 1px solid var(--light-gray);
  border-radius: 30px;
`;

export const SwitcherButtonVert = styled.div`
  width: 2px;
  height: 20px;
  background-color: var(--white);
  position: absolute;
  top: 12px;
  left: 20px;
`;

export const SwitcherButtonGor = styled.div`
  width: 20px;
  height: 2px;
  background-color: var(--white);
  position: absolute;
  left: 11px;
  top: 21px;
`;

export const InputsBox = styled.div`
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Input = styled.input`
  width: 280px;
  height: 29px;
  outline: none;
  font-family: var(--baseFont);
  font-style: normal;
  font-weight: var(--regular);
  font-size: 18px;
  line-height: 27px;
  color: var(--black);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-right: 0px;
  padding-left: 0px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid var(--light-gray);
  @media screen and (min-width: 768px) {
    width: 181px;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-right: 0px;
    padding-left: 8px;
  }
`;

export const InputAmount = styled(Input)`
  margin-bottom: 40px;
  padding-left: 8px;
  font-weight: var(--bold);
  @media screen and (min-width: 768px) {
    margin-right: 32px;
    ::placeholder {
      text-align: center;
    }
  }
`;

export const InputCalendarBox = styled.div`
  display: block;
  position: relative;
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 181px;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const InputCalendar = styled(DatePicker)`
  width: 280px;
  height: 29px;
  font-size: 18px;
  line-height: 27px;
  font-family: 'Circe';
  font-style: normal;
  color: var(--black);
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid var(--light-gray);
  @media screen and (min-width: 768px) {
    width: 181px;
    font-weight: (--regular);
    font-size: 18px;
    line-height: 27px;
  }
`;

export const InputCalendarIcon = styled(DatePicker)`
  position: absolute;
`;

export const InputCalendarSVG = styled(Calendar)`
  position: absolute;
  right: 15px;
  top: -40px;
`;

export const InputComment = styled(Input)`
  height: 84px;
  margin-top: 40px;

  ::placeholder {
    padding-left: 20px;
    font-family: var(--baseFont);
    font-style: normal;
    font-weight: var(--regular);
    font-size: 18px;
    line-height: 27px;
  }
  @media screen and (min-width: 768px) {
    width: 394px;
    margin-top: 0;
    height: 29px;

    padding-left: 8px;
    ::placeholder {
      padding-left: 0px;
    }
  }
`;

export const Button = styled.button`
  display: inline;
  width: 300px;
  height: 50px;
  font-family: var(--baseFont);
  font-weight: var(--secondaryFont);
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const ButtonAdd = styled(Button)`
  border: none;
  margin-bottom: 20px;
  background: var(--green);
  border-radius: 20px;
  color: var(--white);
`;

export const ButtonCancel = styled(Button)`
  background: var(--white);
  border: 1px solid var(--active-blue);
  border-radius: 20px;
  color: var(--active-blue);
  margin-bottom: 60px;
`;

export const SelectDiv = styled.div`
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  height: 29px;
  border: none;
  outline: none;
  font-family: var(--baseFont);
  font-style: normal;
  font-weight: var(--regular);
  font-size: 18px;
  line-height: 27px;
  color: ${props => (props.nonActive ? 'var(--black)' : 'var(--light-gray)')};
  text-align: left;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 20px;
  padding-left: 8px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid var(--light-gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 392px;
  }
`;

export const SelectSvg = styled(Select)`
  margin-top: 4px;
  cursor: pointer;
`;

export const SelectWindow = styled.div`
  position: absolute;
  overflow: scroll;
  width: 280px;
  max-height: 350px;
  top: 31px;
  left: 0;
  z-index: 3500;
  background: var(--add-transaction-menu-color);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(50px);
  border-radius: 20px;
  overflow-y: hidden;
  overflow-y: scroll;
  width: 260px;
  &::-webkit-scrollbar {
    width: 0;
  }
  overflow-x: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    height: 0;
  }
  @media screen and (min-width: 768px) {
    width: 392px;
  }
`;

export const SelectOptions = styled.li`
  padding-left: 20px;
  height: 44px;
  font-family: var(--baseFont);
  font-style: normal;
  font-weight: var(--regular);
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: var(--black);
  cursor: pointer;

  :hover,
  :focus {
    background: var(--white);
    color: ${props => (props.oper ? 'var(--green)' : 'var(--pink)')};
  }
`;
