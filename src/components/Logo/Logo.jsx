import LogoSrc from '../../assets/images/Logo.svg';
import {
    LogoText,
    LogoContainer,
    LogoImg,
  } from './Logo.styled';

const Logo = () => {
    return (
        <LogoContainer>
              <LogoImg src={LogoSrc} alt="Logo" />
              <LogoText>Wallet</LogoText>
            </LogoContainer>
    )
}

export default Logo