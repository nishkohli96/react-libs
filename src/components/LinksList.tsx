import { Link } from 'react-router-dom';

const LinksList = () => {
    const LinkComponent = ({ path = '', text = '' }) => (
        <div className="link">
            <Link to={path}>{text}</Link>
        </div>
    );

    return (
        <div className="root">
            <LinkComponent path="/formik" text="Formik" />
            <LinkComponent path="/sample" text="Sample Components" />
            <LinkComponent path="/swr" text="Swr with Axios" />
            <LinkComponent path="/videojs" text="VideoJS &amp; React-player" />
            <LinkComponent path="/react-charts" text="React-charts" />
            <LinkComponent path="/zoom" text="Zoom web sdk" />
            <LinkComponent path="/drag-n-drop" text="Drag and drop list" />
            <LinkComponent path="/redux" text="Redux Egs" />
            <LinkComponent path="/font-source" text="Font Source" />
            <LinkComponent path="/react-hook-form" text="React Hook Form" />
            <LinkComponent path="/react-final-form" text="React Final Form" />
        </div>
    );
};

export default LinksList;
