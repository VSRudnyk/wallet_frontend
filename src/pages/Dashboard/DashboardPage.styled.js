import styled from 'styled-components';

// import BackDes from '../../images/BackgrDes-min.png';
// import BackTab from '../../images/BackgrTablet-min.png';

export const Dashboard = styled.main`
  height: 100%;
  padding-top: 75px;
  padding-bottom: 15px;
  @media screen and (min-width: 768px) {
    padding-top: 112px;
    padding-bottom: 32px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 126px;
    padding-bottom: 103px;
    height: ${props =>
      props.pathname === '/wallet_frontend/home' ? '100vh' : '100%'};
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
  position: relative;
  margin-left: auto;
  margin-right: auto;
  // height: 70vh;
`;
export const DashboardSeparator = styled.div`
  @media screen and (min-width: 1280px) {
    // height: 100%;
    margin-left: 69px;
    margin-right: 89px;
    margin-top: -47px;
    margin-bottom: -103px;
    border: 1px solid var(--vector-color);
    box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
      1px 0px 0px rgba(255, 255, 255, 0.6);
  }
`;
