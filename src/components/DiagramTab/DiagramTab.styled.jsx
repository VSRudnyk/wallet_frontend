import styled from 'styled-components';
import '../../stylesheet/fonts.css';

export const DiagramTabWrapper = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
export const DiagramButtonsWrapper = styled.div``;

export const DiagramTableBar = styled.div`
  @media screen and (min-width: 320px) {
    width: 280px;
    margin-top: 0;
  }
  @media screen and (min-width: 768px) {
    width: 336px;
    //margin-top: 11px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
    margin-top: 56px;
  }
`;

export const StatisticsContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;