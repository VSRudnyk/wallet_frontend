import styled from 'styled-components';

import BackDes from '../../images/BackgrDes-min.png';
import BackTab from '../../images/BackgrTablet-min.png';

export const DashboardSection = styled.main`
  background-color: var(--background-gray);
  background-image: linear-gradient(
    var(--background-light-grey),
    var(--background-light-grey)
  );

  padding-top: 75px;
  padding-bottom: 15px;
  height: 100%;
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
    padding-bottom: 46px;
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

export const DashboardNavAndBalWrapper = styled.div``;
export const DashboardCurrencyWrapper = styled.div``;
export const DashboardSecondSectionWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
export const DashboardSeparator = styled.div`
  @media screen and (min-width: 1280px) {
    margin-left: 69px;
    margin-right: 89px;
    height: 100vh;
    margin-top: -46px;
    margin-bottom: -46px;
    border: 1px solid #e7e5f2;
    box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
      1px 0px 0px rgba(255, 255, 255, 0.6);
  }
`;
