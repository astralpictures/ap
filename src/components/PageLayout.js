import React from 'react';
import {Box} from '@chakra-ui/react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const
    PageLayout = ({children}) => (
        <Box>
            <Header />
            <Content>
                {children}
            </Content>
            <Footer />
        </Box>);

export default PageLayout;