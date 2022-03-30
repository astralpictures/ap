import React from 'react';
import {SimpleGrid} from '@chakra-ui/react';
import Video from './Video';

const
    VideoGallery = ({videos}) => (
        <SimpleGrid columns={3} spacing={10}>
            {videos.map(
                video => (
                    <Video {...video} key={video.src} />))}
        </SimpleGrid>);

export default VideoGallery;