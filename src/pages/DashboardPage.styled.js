import styled from 'styled-components';

export const DashboardSection = styled.section`
  /* background-color: #e7eaf2; */
  /* background-color: var(--background-light-grey);  */
  padding-top: 15px;
  padding-bottom: 15px;
  height: 100vh;
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
