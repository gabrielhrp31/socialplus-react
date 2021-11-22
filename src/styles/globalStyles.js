// styles/globalStyles.js
import {createGlobalStyle} from 'styled-components'
import OutfitFont from '../assets/fonts/OutfitFont.ttf';

export default createGlobalStyle`

  @font-face {
    font-family: 'OutfitFont';
    src: local('OutfitFont'), url(${OutfitFont}) format('truetype');
  }

  *, a, button {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    transition: 0.1s;
    background-color: unset;
    border: none;
    outline: none;
    font-family: 'OutfitFont', sans-serif;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${props => props.theme.text};
    transition: background-color 0.5s ease;
  }

  h1 {
    color: ${props => props.theme.titles};
  }
`