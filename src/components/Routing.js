import { lazy } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

const HomeScreen = lazy(() => import('@Pages/HomeScreen'));
const FormikForm = lazy(() => import('@Pages/FormikForm'));
const SampleComponents = lazy(() => import('@Pages/SampleComponents'));
const SwrEg = lazy(() => import('@Pages/SwrEg'));
const VideoJsEg = lazy(() => import('@Pages/VideoJsEg'));
const ReactChart = lazy(() => import('@Pages/ReactChart'));
const ZoomEg = lazy(() => import('@Pages/ZoomEg'));
const DragNDrop = lazy(() => import('@Pages/DragNDrop'));
const Page404 = lazy(() => import('@Pages/Page404'));

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
                <Route component={Page404} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routing;
