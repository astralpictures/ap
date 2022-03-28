import React from 'react';
import {Image, Link, Text} from '@chakra-ui/react';

const
    fallback = <Text color="white">a s t r a l pictures</Text>,
    Logo = () => (
        <Link href="/">
            <Image
                src=""
                fallback={fallback}
                alt="Astral Pictures Logo" />
        </Link>);

export default Logo;