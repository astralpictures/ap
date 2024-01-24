import * as React from "react";
import {Text} from '@chakra-ui/react';
import PageLayout from "../components/PageLayout";

const 
    IndexPage = () => {
        return (
            <PageLayout>
                <Text color="orange" pb={1.5}>
                    Astral Pictures is currently under development.
                </Text>
                <Text pb={1.5}>
                    Currently based in Raleigh, North Carolina, and led by C.L. Cunningham and Andrew Carnley, we write, produce, film, and edit Indie Films with a unique vision. We specialize in: horror, surreal, absurd, dark comedy, and thought-provoking films. Browse through our site to find information about past, current, and upcoming projects.
                </Text>
                <Text>
                    Astral Pictures was started in the summer of 2001 when Cunningham and Danielle Griselda decided to make a movie that made fun of all of the terrible horror movies they were watching. Admittingly, their first movie turned out to be awful as well, but it laid the foundation for future endeavors and led to the creation of Astral Pictures.
                </Text>.
            </PageLayout>);
    };

export default IndexPage;
