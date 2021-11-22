import styled from "styled-components";

export const NavigationTabsWrapper = styled.div`

  position: fixed;
  height: 64px;
  bottom: 0;
  background-color: ${({theme}) => theme.accent};
  width: 100%;
  display: inline-flex;
  justify-content: center;

  @media only screen and (min-width: 583px) {
    width: unset;
    height: 100%;
    position: relative;
  }


`


export const ProfileImage = styled.img`
  width: 36px;
  height: 36px;

  border-radius: 50%;
`