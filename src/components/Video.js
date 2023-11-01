import PropTypes from 'prop-types';
import React from 'react';
import {
    AspectRatio, 
    Box, 
    Image, 
    Modal, 
    ModalBody, 
    ModalCloseButton, 
    ModalContent, 
    ModalHeader, 
    ModalOverlay,
    useDisclosure} from '@chakra-ui/react';

const
    Video = ({src, width, ratio, title, poster, description}) => {
        const {isOpen, onOpen, onClose} = useDisclosure();

        return (
            <>
                <Box 
                    onClick={onOpen}
                    cursor="pointer">
                    <Image 
                        src={poster}
                        alt={`${title} video`}
                        fallback={`Watch ${title}`} />
                    {title}
                </Box>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{title}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={5}>
                            <Box pb={3}>
                                {description}
                            </Box>
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
    src: PropTypes.string.isRequired,
    width: PropTypes.string,
    ratio: PropTypes.number,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

Video.defaultProps = {
    width: '560',
    ratio: 1
};

export default Video;