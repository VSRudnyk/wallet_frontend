import styled from 'styled-components';

export const Dashboard = styled.main`
  height: 100vh;
  padding-top: 75px;
  padding-bottom: 15px;
  @media screen and (min-width: 768px) {
    padding-top: 112px;
    padding-bottom: 32px;
    height: ${props =>
      props.pathname === '/wallet_frontend/home' ? '100vh' : '100%'};
  }
  @media screen and (min-width: 1280px) {
    padding-top: 126px;
    padding-bottom: 103px;
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
`;
export const DashboardSeparator = styled.div`
  @media screen and (min-width: 1280px) {
    margin-left: 69px;
    margin-right: 89px;
    margin-top: -47px;
    margin-bottom: ${({ pathname }) =>
      pathname === '/wallet_frontend/home' ? '-83px' : '-103px'};
    border: 1px solid var(--vector-color);
    box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
      1px 0px 0px rgba(255, 255, 255, 0.6);
  }
`;
