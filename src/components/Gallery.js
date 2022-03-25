import React from 'react';
import {Image} from '@chakra-ui/react';

const
    Gallery = ({images}) => (
        images.map(image => (
            <Image
                src={image.src}
                alt={image.alt} />
        )));

export default Gallery;