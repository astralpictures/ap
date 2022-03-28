import * as React from "react";
import Gallery from "../components/Gallery";
import PageLayout from "../components/PageLayout";

const 
    images = [
        {
            src: '',
            alt: ''
        }
    ],
    GalleryPage = () => {
        return (
            <PageLayout>
                <Gallery images={images} />
            </PageLayout>);
    };

export default GalleryPage;
