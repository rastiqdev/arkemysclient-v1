import React from 'react';
import styled from 'styled-components';

const Logo = styled.svg`
  width: ${props => props.size}px;
  cursor: ${props => (props.pointer ? 'cursor' : 'pointer')};
  * {
    cursor: ${props => (props.pointer ? 'cursor' : 'pointer')};
    transition: 0.2s;
  }
  &:hover {
    *:not(.innerHorizontalLogoPath) {
      fill: ${({ theme }) => theme.palette.primary.dark};
    }
  }
`;

const HorizontalLogo = ({ size, pointer, onClick }) => {
  return (
    <img src="https://raw.githubusercontent.com/AQRRastiq/arkemysclient/main/src/ui/footer_50.png"></img>
  );
};

export default HorizontalLogo;
