import React from 'react';
import videojs from 'video.js';
import fieryace from '@Images/fireyace.png';
import 'video.js/dist/video-js.css';

class VideoPlayer extends React.Component {
    componentDidMount() {
        // instantiate Video.js
        this.player = videojs(
            this.videoNode,
            this.props,
            function onPlayerReady() {
                console.log('onPlayerReady', this);
                videojs.log('Your player is ready!');

                // In this context, `this` is the player that was
                // created by Video.js.
                this.play();

                // How about an event listener?
                this.on('ended', function () {
                    videojs.log('Awww...over so soon?!');
                });
            }
        );
    }

    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    render() {
        return (
            <div style={{ margin: 30 }}>
                <div data-vjs-player>
                    <video
                        ref={(node) => (this.videoNode = node)}
                        className="video-js"
                        autoPlay={true}
                        controls
                        preload="auto"
                        width="640"
                        height="264"
                        poster={fieryace}
                        data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=xjS6SftYQaQ"}], "youtube": { "ytControls": 2 } }'
                    >
                        <p className="vjs-no-js">
                            To view this video please enable JavaScript, and
                            consider upgrading to a web browser that
                            <a
                                href="https://videojs.com/html5-video-support/"
                                target="_blank"
                            >
                                supports HTML5 video
                            </a>
                        </p>
                    </video>
                </div>
            </div>
        );
    }
}

export default VideoPlayer;
