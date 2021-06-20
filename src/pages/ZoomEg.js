import { createHmac } from 'crypto';
import { ZoomMtg } from '@zoomus/websdk';
import Button from '@material-ui/core/Button';

ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.6/lib', '/av');
ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

const ZoomEg = () => {
    console.log('here');
    return (
        <div style={styles.fullScreen}>
            <p>Header</p>

            <Button style={styles.btn} onClick={() => startMeeting()}>
                Start Meeting
            </Button>

            <div style={styles.container}>
                <div id="zmmtg-root"></div>
            </div>
            <p>Footer</p>
        </div>
    );
};

const startMeeting = () => {
    const apiKey = process.env.REACT_APP_ZOOM_API_KEY;
    const apiSecret = process.env.REACT_APP_ZOOM_SECRET;
    const meetingNumber = 5404214349;
    const role = 0;
    const pswd = 'PTg0h0';

    const timestamp = new Date().getTime() - 30000;
    const msg = Buffer.from(apiKey + meetingNumber + timestamp + role).toString(
        'base64'
    );
    const hash = createHmac('sha256', apiSecret).update(msg).digest('base64');
    const signature = Buffer.from(
        `${apiKey}.${meetingNumber}
		  .${timestamp}.${role}.${hash}`
    ).toString('base64');

    /* Generate sign from api */
    ZoomMtg.init({
        leaveUrl: '/schedule',
        isSupportAV: true,
        success: function () {
            ZoomMtg.join({
                signature: signature,
                meetingNumber: meetingNumber,
                userName: 'tom',
                apiKey: apiKey,
                userEmail: 'tom@gmail.com',
                passWord: pswd,
                success: (success) => {
                    console.log(success);
                },
                error: (error) => {
                    console.log(error);
                },
            });
        },
    });
};

const styles = {
    fullScreen: {
        backgroundColor: 'powderblue',
        width: '100vw',
        height: '100vh',
    },
    container: {
        padding: 30,
        margin: 30,
        width: 800,
        height: 500,
        backgroundColor: 'silver',
    },
    root: {
        display: 'block',
        backgroundColor: '#414141',
    },
    btn: {
        backgroundColor: '#123432',
        color: 'white',
    },
};

export default ZoomEg;
