import React from 'react';
import styled from 'styled-components';
import SphereAnimation from "./SphereAnimation"

const BackgroundWrapper = styled.div`
  position: fixed;;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1; /* Place this behind other content */
`;

const Background = () => (
  <BackgroundWrapper>
    <SphereAnimation />
  </BackgroundWrapper>
);

export default Background;
