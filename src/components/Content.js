import React from 'react';
import {Box, Container} from '@chakra-ui/react';

const
    Content = ({children}) => (
        <Container maxW="960px">
            <Box 
                bg="white" 
                width="100%" 
                minH="calc(100vh - 50px)"
                px='6'
                py='10'>
                {children}
            </Box>
        </Container>);

export default Content;