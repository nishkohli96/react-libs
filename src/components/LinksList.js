import { Link } from 'react-router-dom';

const LinksList = () => {
    return (
        <div className="root">
            <Link className="link" to="/formik">
                Formik
            </Link>
            <Link className="link" to="/sample">
                Sample Components
            </Link>
            <Link className="link" to="/swr">
                Swr with Axios
            </Link>
            <Link className="link" to="/videojs">
                VideoJS Example
            </Link>
            <Link className="link" to="/react-charts">
                React-charts
            </Link>
            <Link className="link" to="/zoom">
                Zoom web sdk
            </Link>
            <Link className="link" to="/drag-n-drop">
                Drag and drop list
            </Link>
        </div>
    );
};

export default LinksList;
