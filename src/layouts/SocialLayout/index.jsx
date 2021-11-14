import React from 'react';
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";

function SocialLayout({children}) {
    return (
        <div>
            <Navbar/>
            <Container>
                {children}
            </Container>
        </div>
    );
}

export default SocialLayout;