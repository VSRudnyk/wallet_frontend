import styled from 'styled-components';
import '../stylesheet/fonts.css';

export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  justify-content: center;
  left: 0px;
  
  @media (min-width: 768px) {
    background-color: var(--background-gray);
    background-image: url(../images/EllipseGray.png), url(../images/EllipsePink.png);

  }

`;

export const LogoReg = styled.img`
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
`;

export const LogoText = styled.p`
  font-family: var(--secondaryFont);
  font-style: normal;
  font-weight: var(--bold);
  font-size: 30px;
  line-height: 45px;
  display: flex;
  align-items: center;
  color: var(--black);
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  justify-content: center;

`;

export const FormContainer = styled.div`

@media screen and (min-width: 767px){
  padding: 40px 58.5px 66px 65px;
  background: var(--white);
  width: 534px;
  height: 616px;
  border-radius: 20px;
  margin-right: auto;
  margin-left: auto;
}

`