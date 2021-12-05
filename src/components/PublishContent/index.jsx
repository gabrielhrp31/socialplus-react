import React, {useState} from 'react';
import {PublishButton, PublisherArea, PublisherInput, PublisherToolbar, PublisherWrapper} from "./styles";
import {MdAddPhotoAlternate, MdOutlineAddLink} from "react-icons/all";

function PublishContent(props) {
    const [showImageUrl, setShowImageUrl] = useState(false);
    const [showExternalUrl, setShowExternalUrl] = useState(false);

    return (
        <PublisherWrapper>
            <PublisherInput type="text" placeholder="Titulo"/>
            <PublisherArea type="text" placeholder="O que está acontecendo?" rows="5"/>
            {showImageUrl && <PublisherInput type="url" placeholder="Url da Imagem"/>}
            {showExternalUrl && <PublisherInput type="url" placeholder="Link externo"/>}
            <PublisherToolbar>
                <button><MdOutlineAddLink/></button>
                <button><MdAddPhotoAlternate/></button>

                <PublishButton>Publicar</PublishButton>
            </PublisherToolbar>
        </PublisherWrapper>
    );
}

export default PublishContent;