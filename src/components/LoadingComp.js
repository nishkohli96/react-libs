import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingComp = () => (
    <div className="fullscreen">
        <div style={styles.centreDiv}>
            <CircularProgress />
        </div>
    </div>
);

const styles = {
    centreDiv: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export default LoadingComp;
