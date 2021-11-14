import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 1904px) {
    max-width: 1785px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1264px) {
    max-width: 1185px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 960px) {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
`