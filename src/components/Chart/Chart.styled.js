import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-width: 250px;
  min-height: 250px;
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
