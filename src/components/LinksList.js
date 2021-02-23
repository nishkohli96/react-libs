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
        </div>
    );
};

export default LinksList;
