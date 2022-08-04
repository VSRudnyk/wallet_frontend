import styled from 'styled-components';

import BackDes from '../../images/BackgrDes-min.png';
import BackTab from '../../images/BackgrTablet-min.png';

export const Dashboard = styled.main`
  background-color: var(--background-gray);
  background-image: linear-gradient(
    var(--background-light-grey),
    var(--background-light-grey)
  );
  padding-top: 75px;
  padding-bottom: 15px;
  height: ${({ pathname }) =>
    pathname === '/wallet_frontend/diagram' ? '100%' : '100vh'};
  backdrop-filter: blur(50px);
  @media screen and (min-width: 768px) {
    background: url(${BackTab});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 112px;
    padding-bottom: 32px;
  }
  @media screen and (min-width: 1280px) {
    background: url(${BackDes});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 126px;
    padding-bottom: 47px;
  }
`;

export const DashboardWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

export const DashboardFirstSectionWrapper = styled.div`
  height: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`;

export const DashboardSecondSectionWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
export const DashboardSeparator = styled.div`
  @media screen and (min-width: 1280px) {
    margin-left: 69px;
    margin-right: 89px;
    margin-top: -47px;
    margin-bottom: -120px;
    border: 1px solid var(--vector-color);
    box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
      1px 0px 0px rgba(255, 255, 255, 0.6);
  }
`;
