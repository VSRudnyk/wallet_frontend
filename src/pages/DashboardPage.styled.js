import styled from 'styled-components';

export const DashboardSection = styled.main`
  background-color: var(--background-gray);
  background-image: linear-gradient(
    var(--background-light-grey),
    var(--background-light-grey)
  );

  padding-top: 15px;
  padding-bottom: 15px;
  /* height: 100vh; */
  height: 100%;
  backdrop-filter: blur(50px);
  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 46px;
    padding-bottom: 46px;
  }
`;

export const DashboardWrapper = styled.div`
  /* position: relative; */

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const DashboardFirstSectionWrapper = styled.div`
  /* position: relative; */
  height: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    /* &::after {
      content: '';
      /* position: absolute; */
    /* top: 0; */
    /* bottom: 0; */
    /* width: 100%;
      transform: rotate(90deg);
      border: 1px solid black;
      box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
        1px 0px 0px rgba(255, 255, 255, 0.6);
    }  */
    /* align-items: center; */
    /* justify-content: space-between; */
  }
`;

export const DashboardNavAndBalWrapper = styled.div``;
export const DashboardCurrencyWrapper = styled.div``;
export const DashboardSecondSectionWrapper = styled.div``;
export const Qwe = styled.div`
  @media screen and (min-width: 1280px) {
    /* margin-right: 89px;
    margin-left: 69px; */
    height: 100vh;
    margin-top: -46px;
    margin-bottom: -46px;
    border: 1px solid #e7e5f2;
    box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
      1px 0px 0px rgba(255, 255, 255, 0.6);
  }
`;
