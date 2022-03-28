import React from 'react';
import Video from './Video';

const
    VideoGallery = ({videos}) => (
        videos.map(video => (
            <Video {...video} key={video.src} />)));

export default VideoGallery;