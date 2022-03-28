import React from 'react';
import {Box} from '@chakra-ui/react';

const
    Content = ({children}) => (
        <Box bg="brand.200" width="100%" minH="calc(100vh - 50px)">
            {children}
        </Box>);

export default Content;