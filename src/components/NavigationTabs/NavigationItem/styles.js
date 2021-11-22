import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavigationItemWrapper = styled(Link)`
  position: relative;
  height: 100%;
  width: 90px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: ${({theme, to}) => window.location.pathname === to ? `3px solid ${theme.inverse}` : 'none'};
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  color: ${({theme}) => theme.textAccent};

  font-size: 28px;

  &:hover {
    &::before {
      content: "";
      display: block;
      z-index: -1;

      position: absolute;

      width: 100%;
      height: 100%;

      background-color: black;
      opacity: 0.3;
    }
  }
`;