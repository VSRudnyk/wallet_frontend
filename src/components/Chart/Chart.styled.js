import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
`;

export const Text = styled.p`
  position: relative;
  display: block;
  top: -50%;
  transform: translate(0, -50%);
  pointer-events: none;
  font-family: var(--baseFont);
  font-weight: var(--bold);
  font-size: 18px;
  line-height: 27px;
  color: var(--black);
  z-index: -1;
`;
