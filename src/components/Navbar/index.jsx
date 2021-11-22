import React, {useContext, useEffect, useState} from 'react';
import {LogoButton, NavbarWrapper, ThemeButton} from "./styles";
import {FaMoon, FaSun} from "react-icons/all";
import {CustomThemeContext} from "../CustomThemeProvider";
import Container from "../Container";
import NavigationTabs from "../NavigationTabs";

function Navbar(props) {
    const {currentTheme, setTheme} = useContext(CustomThemeContext);
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", updateScroll);
        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
    }, []);


    const updateScroll = () => {
        setScrollPos(document.documentElement.scrollTop);
    };

    return (
        <NavbarWrapper scrollPos={scrollPos}>
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