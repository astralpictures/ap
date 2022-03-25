import React from 'react';
import {Box, Link, SimpleGrid, Text} from '@chakra-ui/react';
import Logo from './Logo';

const 
    Header = () => (
        <Box>
            <Logo />
            <Box bg="brand.100">
                <Text fontSize="6xl" color="brand.400">Testing</Text>
            </Box>
            <Box bg="brand.200">
                <Text fontSize="6xl" color="brand.400">Testing</Text>
            </Box>
            <Box bg="brand.300">
                <Text fontSize="6xl" color="brand.100">Testing</Text>
            </Box>
            <Box bg="brand.400">
                <Text fontSize="6xl" color="brand.100">Testing</Text>
            </Box>
        </Box>);

export default Header;