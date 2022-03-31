import * as React from "react";
import VideoGallery from "../components/VideoGallery";
import PageLayout from "../components/PageLayout";
import films from '../data-objects/films';

const 
    FilmsPage = () => {
        return (
            <PageLayout>
                Dancing With Death
The film is the distorted perspective of a suicidal man and how he sees the world. He constantly shifts between violent fantasies and monontonous reality, which makes him just want to end it all. A woman he works with takes on the form of Death and offers him possible happiness, but what he discovers is that the real woman can offer a lot more if he can just open himself up. Format - Super8

Disarmed
Taken from a scene from Danny Pelletier's novel, this short follows the reaction of a suicidal girl after reading a passage in Shakespeare's "Hamlet" about Ophelia drowning herself. Format - Super8

Based on a short poem by Edgar Allen Poe. A man searches for his elusive dead lover, but she is always just out of his reach. Time and space seem to pass as if always in a dream, and the line between fantasy and reality is blurred. The movie is still waiting for the final cut and music. Format - Super8
                <VideoGallery videos={films} />
            </PageLayout>);
    };

export default FilmsPage;
