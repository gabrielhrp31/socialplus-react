import styled from "styled-components";

export const NavigationTabsWrapper = styled.div`
  position: relative;

  height: 100%;
  //583
  ${({top}) => top ? `
    display: none;
    
    @media only screen and (min-width:583px){
        display: inline-flex;
    }
  `
          : `      
    display: inline-flex;
    
    @media only screen  and(min-width:583px){
        display: none;
    }
  `}


`


export const ProfileImage = styled.img`
  width: 36px;
  height: 36px;

  border-radius: 50%;
`