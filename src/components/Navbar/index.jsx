import React, {useContext} from 'react';
import {LogoButton, NavbarWrapper, ThemeButton} from "./styles";
import {FaMoon, FaSun} from "react-icons/all";
import {CustomThemeContext} from "../CustomThemeProvider";
import Container from "../Container";

function Navbar(props) {
    const {currentTheme, setTheme} = useContext(CustomThemeContext);

    return (
        <NavbarWrapper>
            <Container>
                <LogoButton>
                    Social+
                </LogoButton>
                <ThemeButton>
                    {
                        currentTheme === 'light' &&
                        <FaMoon onClick={() => setTheme('dark')}/>
                    }
                    {
                        currentTheme === 'dark' &&
                        <FaSun onClick={() => setTheme('light')}/>
                    }
                </ThemeButton>
            </Container>
        </NavbarWrapper>
    );
}

export default Navbar;