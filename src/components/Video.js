import React from 'react';
import {AspectRatio, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure} from '@chakra-ui/react';

const
    Video = ({src, width, ratio, title, poster}) => {
        const {isOpen, onOpen, onClose} = useDisclosure();

        return (
            <>
                <Image 
                    src={poster}
                    alt={`${title} video`}
                    fallback="Watch Video"
                    onClick={onOpen} />
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{title}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <AspectRatio maxW={width} ratio={ratio}>
                                <iframe 
                                    title={title}
                                    src={src}
                                    allowFullScreen />
                            </AspectRatio>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </>);
    };

Video.propTypes = {

};

Video.defaultProps = {

};

export default Video;