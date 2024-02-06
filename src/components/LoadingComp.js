import CircularProgress from '@mui/material/CircularProgress';

const styles = {
  centreDiv: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const LoadingComp = () => (
  <div className="fullscreen">
    <div style={styles.centreDiv}>
      <CircularProgress />
    </div>
  </div>
);

export default LoadingComp;
