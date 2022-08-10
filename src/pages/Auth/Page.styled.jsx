import styled from 'styled-components';
import '../../stylesheet/fonts.css';
import eclipseGray from '../../assets/images/EllipseGray.png';
import eclipsePink from '../../assets/images/EllipsePink.png';
import RegImage from '../../assets/images/RegistrationPageImage.png';
import RegImageTab from '../../assets/images/RegistrationPageImage_tablet.png';
import LoginImage from '../../assets/images/loginPageImage_desktop.png';
import LoginImageTab from '../../assets/images/loginPageImage_tablet.png';

export const Container = styled.div`
  display: block;
  height: 100%;
  padding: 0;
`;

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  top: 0px;
  justify-content: center;
  left: 0px;
  background-color: var(--white);

  @media (max-width: 767px) {
    position: fixed;
  }

  @media (min-width: 768px) {
    background-color: var(--background-gray);
    background-image: url(${eclipseGray}), url(${eclipsePink});
    background-repeat: no-repeat, no-repeat;
    background-position: 0px 100%, right 0px top 0px;
    padding: 60px 114px 48px;
    width: 100vw;
    min-height: 1024px;
    text-align: center;
    height: 100vh;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    padding: 0;
    min-height: 720px;
  }
`;

export const ImageSection = styled.div`
  @media (min-width: 767px) {
    display: flex;
    margin-bottom: 50px;
    width: 540px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 1280px) {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0px;
  }
`;

export const ImageContainerLog = styled.div`
  @media (min-width: 768px) {
    background-image: url(${LoginImageTab});
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: auto;
    margin-right: auto;
    height: 250px;
    width: 260px;
  }

  @media (min-width: 1280px) {
    background-image: url(${LoginImage});
    width: 435px;
    height: 419px;
    margin-right: 38px;
    margin-bottom: 32px;
  }
`;

export const ImageContainerReg = styled.div`
  @media (min-width: 768px) {
    background-image: url(${RegImageTab});
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: auto;
    margin-right: auto;
    height: 250px;
    width: 274px;
  }

  @media (min-width: 1280px) {
    background-image: url(${RegImage});
    width: 452px;
    height: 412px;
    margin-bottom: 32px;
    margin-right: 32px;
  }
`;
export const Text = styled.p`
  @media (min-width: 768px) {
    color: var(--black);
    display: flex;
    margin-right: auto;
    font-family: var(--secondaryFont);
    font-weight: var(--regular);
    font-size: 30px;
    line-height: 45px;
    margin-left: 40px;
    align-items: center;
  }
  @media (min-width: 1280px) {
    margin-left: auto;
    width: 187px;
  }
`;

export const FormWrapper = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 767px) {
    height: 100vh;
  }
  @media (min-width: 1280px) {
    width: 57%;
    height: 100%;
    background: hsla(0, 0%, 100%, 0.4);
    backdrop-filter: blur(50px);
  }
`;

export const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--white);
  height: 354px;
  width: 320px;
  @media screen and (max-width: 767px) {
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    width: 533px;
    height: 468px;
    padding: 40px 65px 60px;
    border-radius: 20px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const FormContainerRegsiter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--white);
  height: 354px;
  width: 320px;
  @media screen and (max-width: 767px) {
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    width: 533px;
    height: 616px;
    padding: 40px 65px 60px;
    border-radius: 20px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const LogoContainer = styled.div``;
