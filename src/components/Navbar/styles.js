import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  box-shadow: ${
          props => props.scrollPos >= 64 ?
                  '0px 1px 5px rgba(0, 0, 0,0.25) '
                  :
                  '0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)'
  };

  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  background-color: ${({theme}) => theme.accent};
  color: ${({theme}) => theme.textAccent};
`

export const LogoButton = styled(Link)`
  position: relative;
  z-index: 0;

  background-color: transparent;
  color: ${({theme}) => theme.textAccent};
  cursor: pointer;

  font-weight: bold;

  padding: 10px 25px;
  margin: 15px 0;

  text-decoration: none;

  &::before {
    content: "";
    display: block;
    z-index: -1;

    position: absolute;
    top: 0;
    left: 0;

    opacity: 0.25;
    width: 100%;
    height: 100%;

    background-color: ${({theme}) => theme.dark ? 'white' : 'black'};
    border-radius: 4px;
  }

  &:hover {
    color: ${({theme}) => theme.inverse};

    &::before {
      opacity: 0.25;
      background-color: ${({theme}) => theme.dark ? 'black' : 'white'};

      transition: background-color .5s;
    }
  }
`

export const ThemeButton = styled.button`
  padding: 0;
  color: ${({theme}) => theme.textAccent};
  font-size: 24px;
  cursor: pointer;
  line-height: 0;
`