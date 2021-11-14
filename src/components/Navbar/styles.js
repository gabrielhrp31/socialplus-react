import styled from "styled-components";

export const NavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({theme}) => theme.accent};
  color: ${({theme}) => theme.accentText};
  height: 64px;
  padding: 5px;
`

export const LogoButton = styled.button`
  position: relative;
  z-index: 0;

  background-color: transparent;
  color: white !important;
  cursor: pointer;

  font-weight: bold;

  padding: 10px 25px;


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

    background-color: black;
    border-radius: 4px;
  }

  &:hover {
    &::before {
      opacity: 0.25;
      background-color: white;

      transition: background-color .5s;
    }
  }
`

export const ThemeButton = styled.button`
  margin-left: auto;
  margin-right: 20px;
  padding: 0;
  color: ${({theme}) => theme.accentText};
  font-size: 24px;
  cursor: pointer;
  line-height: 0;
`