import React from 'react';
import {Box, Center, HStack, Link} from '@chakra-ui/react';
import {pages} from '../urls';
import Logo from './Logo';

const 
    Header = () => (
        <Box bg="brand.100" width="100%" minHeight={50} p={3}>
            <HStack spacing="2em">
                <Logo />
                {pages.map(
                    page => (
                        page.nav ? 
                        <Center key={page.url}>
                            <Link color="white" href={page.url}>{page.name}</Link>
                        </Center> :
                        null))}
            </HStack>
        </Box>);

export default Header;