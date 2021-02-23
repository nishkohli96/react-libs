import VideoPlayer from '@Atoms/VideoPlayer';

const VideoJsEg = () => {
    const videoJsOptions = {
        autoplay: true,
        controls: true,
        sources: [
            {
                src: 'https://youtu.be/7EXXSOy9D4U',
                type: 'embed',
            },
        ],
    };

    return (
        <>
            <VideoPlayer {...videoJsOptions} />
        </>
    );
};

export default VideoJsEg;
