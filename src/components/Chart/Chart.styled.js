import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 32px;
  margin-top: 43px;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
  }
`;

export const ChartContainer = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  @media screen and (min-width: 768px) {
    margin-right: 32px;
    width: 336px;
    height: 336px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 32px;
    width: 288px;
    height: 288px;
  }
`;

export const Label = styled.h2`
  display: block;
  font-family: var(--secondaryFont);
  font-weight: var(--regular);
  font-style: normal;
  font-size: 30px;
  line-height: 45px;
  color: var(--black);
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Text = styled.p`
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  font-family: var(--baseFont);
  font-weight: var(--bold);
  font-size: 18px;
  line-height: 27px;
  color: var(--black);
  z-index: -1;
`;
