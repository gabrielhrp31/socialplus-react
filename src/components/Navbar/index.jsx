import React, {useContext} from 'react';
import {LogoButton, NavbarWrapper, ThemeButton} from "./styles";
import {FaMoon, FaSun} from "react-icons/all";
import {CustomThemeContext} from "../CustomThemeProvider";
import Container from "../Container";
import NavigationTabs from "../NavigationTabs";

function Navbar(props) {
    const {currentTheme, setTheme} = useContext(CustomThemeContext);

    return (
        <NavbarWrapper>
            <Container>
                <LogoButton to="/">
                    Social+
                </LogoButton>
                <NavigationTabs top/>
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