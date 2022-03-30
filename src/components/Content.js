import React from 'react';
import {Box} from '@chakra-ui/react';

const
    Content = ({children}) => (
        <Box 
            bg="white" 
            width="100%" 
            minH="calc(100vh - 50px)"
            px='6'
            py='10'>
            {children}
        </Box>);

export default Content;