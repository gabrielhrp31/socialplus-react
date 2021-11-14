import React from 'react';
import {NavigationTabsWrapper, ProfileImage} from "./styles";
import NavigationItem from "./NavigationItem";
import {MdHome, MdPerson, MdPersonAdd} from "react-icons/all";

function NavigationTabs(props) {
    return (
        <NavigationTabsWrapper {...props}>
            <NavigationItem to="/">
                <MdHome/>
            </NavigationItem>
            <NavigationItem to="/friends">
                <MdPerson/>
            </NavigationItem>
            <NavigationItem to="/user/id">
                <MdPersonAdd/>
            </NavigationItem>
            <NavigationItem to="/profile">
                <ProfileImage src="http://socialplus.gabrielhrp31.com/profile/user_3/1615748691.jpeg"
                              alt="profile image"/>
            </NavigationItem>
        </NavigationTabsWrapper>
    );
}

export default NavigationTabs;