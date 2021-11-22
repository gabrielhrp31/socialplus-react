import React from 'react';
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import {LayoutWrapper} from "./styles";

function SocialLayout({children}) {
    return (
        <LayoutWrapper>
            <Navbar/>
            <Container>
                {children}
            </Container>
        </LayoutWrapper>
    );
}

export default SocialLayout;