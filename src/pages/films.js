import * as React from "react";
import VideoGallery from "../components/VideoGallery";
import PageLayout from "../components/PageLayout";
import films from '../data-objects/films';

const 
    FilmsPage = () => {
        return (
            <PageLayout>
                <VideoGallery videos={films} />
            </PageLayout>);
    };

export default FilmsPage;
