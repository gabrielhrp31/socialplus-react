import React from 'react';
import SocialLayout from "../../layouts/SocialLayout";
import PublishContent from "../../components/PublishContent";

function Home({...props}) {
    return (
        <SocialLayout {...props}>
            <PublishContent/>
        </SocialLayout>
    );
}

export default Home;