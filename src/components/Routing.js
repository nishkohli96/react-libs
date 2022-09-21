import { lazy } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

const HomeScreen = lazy(() => import('_Pages/HomeScreen'));
const FormikForm = lazy(() => import('_Pages/FormikForm'));
const SampleComponents = lazy(() => import('_Pages/SampleComponents'));
const SwrEg = lazy(() => import('_Pages/SwrEg'));
const VideoJsEg = lazy(() => import('_Pages/VideoJsEg'));
const ReactChart = lazy(() => import('_Pages/ReactChart'));
const ZoomEg = lazy(() => import('_Pages/ZoomEg'));
const DragNDrop = lazy(() => import('_Pages/DragNDrop'));
const ReduxEgs = lazy(() => import('_Pages/ReduxEg'));
const FontSourceEgs = lazy(() => import('_Pages/FontSourceEgs'));
const ReactFinalForm = lazy(() => import('_Pages/FinalForm'));
const Page404 = lazy(() => import('_Pages/Page404'));
const ReactHookForm = lazy(() => import('_Components/ReactHookForm'));

const Routing = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route path="/zoom" component={ZoomEg} />
                <Route exact path="/" component={HomeScreen} />
                <Route path="/formik" component={FormikForm} />
                <Route path="/sample" component={SampleComponents} />
                <Route path="/swr" component={SwrEg} />
                <Route path="/videojs" component={VideoJsEg} />
                <Route path="/react-charts" component={ReactChart} />
                <Route path="/drag-n-drop" component={DragNDrop} />
                <Route path="/font-source" component={FontSourceEgs} />
                <Route path="/redux" component={ReduxEgs} />
                <Route path="/react-hook-form" component={ReactHookForm} />
                <Route path="/react-final-form" component={ReactFinalForm} />
                <Route component={Page404} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routing;
