import React from 'react';
import {StyledContainer} from "./styles";

function Container({children, ...props}) {
    return (
        <StyledContainer {...props}>
            {children}
        </StyledContainer>
    );
}

export default Container;