import React from 'react';
import videojs from 'video.js';
import ReactPlayer from 'react-player';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import fieryace from '_Images/fireyace.png';
import 'video.js/dist/video-js.css';

class VideoPlayer extends React.Component {
    constructor() {
        super();
        this.state = {
            videoPlaying: false,
        };
    }

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
                <div className="text-lavendar">VideoJS Example</div>
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
                                rel="noreferrer"
                            >
                                supports HTML5 video
                            </a>
                        </p>
                    </video>
                </div>

                <div className="text-purple-500" style={{ marginTop: 30 }}>
                    React-player Example
                </div>
                <ReactPlayer
                    url="https://youtu.be/bFFNHRvJGq8"
                    controls
                    width={600}
                    height={400}
                    playing={this.state.videoPlaying}
                />
                <div className="text-yellow-700">
                    Click the below icon to pause/play video
                </div>
                <PlayCircleOutlineIcon
                    onClick={() =>
                        this.setState({
                            videoPlaying: !this.state.videoPlaying,
                        })
                    }
                />
            </div>
        );
    }
}

export default VideoPlayer;
