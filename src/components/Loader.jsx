import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="cube-loader">
        <div className="cube-top" />
        <div className="cube-wrapper">
          <span style={{ '--i': 0 }} className="cube-span" />
          <span style={{ '--i': 1 }} className="cube-span" />
          <span style={{ '--i': 2 }} className="cube-span" />
          <span style={{ '--i': 3 }} className="cube-span" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cube-loader {
    position: relative;
    width: 120px;
    height: 120px;
    transform-style: preserve-3d;
    transform: rotateX(-30deg);
    animation: animate 4s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: rotateX(-30deg) rotateY(0);
    }
    100% {
      transform: rotateX(-30deg) rotateY(360deg);
    }
  }

  .cube-loader .cube-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .cube-loader .cube-wrapper .cube-span {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotateY(calc(90deg * var(--i))) translateZ(60px);
    background: linear-gradient(
      to bottom,
      hsl(174, 60%, 50%) 0%, /* Teal base color */
      hsl(174, 65%, 55%) 20%,
      hsl(174, 70%, 60%) 40%,
      hsl(174, 75%, 65%) 60%,
      hsl(174, 80%, 70%) 80%,
      hsl(174, 85%, 75%) 100%
    );
  }

  .cube-top {
    position: absolute;
    width: 120px;
    height: 120px;
    background: hsl(0, 0%, 90%); /* Light gray for light theme */
    transform: rotateX(90deg) translateZ(60px);
    transform-style: preserve-3d;
  }

  .cube-top::before {
    content: '';
    position: absolute;
    width: 120px;
    height: 120px;
    background: hsl(174, 60%, 60%);
    transform: translateZ(-144px);
    filter: blur(12px);
    box-shadow: 
      0 0 15px rgba(0, 128, 128, 0.3),
      0 0 30px rgba(0, 128, 128, 0.2),
      0 0 45px rgba(0, 128, 128, 0.1);
  }
`;

export default Loader;