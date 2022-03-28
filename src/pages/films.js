import * as React from "react";
import VideoGallery from "../components/VideoGallery";
import PageLayout from "../components/PageLayout";

const 
    videos = [
        {
            src: 'https://www.youtube.com/embed/keHJJRxum4E',
            width: '560',
            ratio: 1,
            title: 'Disarmed',
            poster: ''
        },
        {
            src: 'https://www.youtube.com/embed/JSz5775Vqcg',
            width: '560',
            ratio: 1,
            title: 'A Dream Within a Dream',
            poster: ''
        },
        {
            src: 'https://www.youtube.com/embed/QbtEHbBbN14',
            width: '560',
            ratio: 1,
            title: 'Dancing with Death',
            poster: ''
        },
        {
            src: 'https://www.youtube.com/embed/uoA674m0n3s',
            width: '560',
            ratio: 1,
            title: 'BMPCC 4k Slider Test',
            poster: ''
        }
    ],
    FilmsPage = () => {
        return (
            <PageLayout>
                Test
                <VideoGallery videos={videos} />
            </PageLayout>);
    };

export default FilmsPage;
