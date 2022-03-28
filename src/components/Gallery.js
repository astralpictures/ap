import React from 'react';
import {Image} from '@chakra-ui/react';

const
    Gallery = ({images}) => (
        images.map(image => (
            <Image
                key={image.src}
                src={image.src}
                alt={image.alt} />
        )));

export default Gallery;