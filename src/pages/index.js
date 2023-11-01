import * as React from "react";
import {Text} from '@chakra-ui/react';
import PageLayout from "../components/PageLayout";

const 
    IndexPage = () => {
        return (
            <PageLayout>
                <Text>
                    Currently based in Raleigh, North Carolina, we write, produce, film, and edit Indie Films with a unique vision. We specialize in: horror, surreal, absurd, dark comedy, and thought-provoking films. Browse through our site to find information about past, current, and upcoming projects.
                </Text>
                <Text>
                    Astral Pictures was started in the summer of 2001 when Chris Cunningham and Dani Pelletier decided to make a movie that made fun of all of the terrible horror movies they were watching. Admittingly, our first movie turned out to be awful as well, but it laid the foundation for future endeavors and sparked an interest that continues to this day
                </Text>.
            </PageLayout>);
    };

export default IndexPage;
