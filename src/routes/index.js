import { lazy } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import HomeScreen from '_Pages/HomeScreen';
import Page404 from '_Pages/Page404';

const AlgoliaWidgets = lazy(() => import('_Pages/algolia-widgets'));
const AxiosEg = lazy(() => import('_Pages/AxiosEg'));
const ColorPickers = lazy(() => import('_Pages/color-pickers'));
const DragNDrop = lazy(() => import('_Pages/DragNDrop'));
const FontSourceEgs = lazy(() => import('_Pages/FontSourceEgs'));
const FormikForm = lazy(() => import('_Pages/FormikForm'));
const ReactChart = lazy(() => import('_Pages/ReactChart'));
const ReactHookForm = lazy(() => import('_Components/ReactHookForm'));
const SampleComponents = lazy(() => import('_Pages/SampleComponents'));
const ReactFinalForm = lazy(() => import('_Pages/FinalForm'));
const ReactWindowEg = lazy(() => import('_Pages/ReactWindowEg'));
const ReduxEgs = lazy(() => import('_Pages/ReduxEg'));
const RtePage = lazy(() => import('_Pages/rte'));
const VideoJsEg = lazy(() => import('_Pages/VideoJsEg'));
const ZoomEg = lazy(() => import('_Pages/ZoomEg'));

const Routing = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/algolia-widgets" component={AlgoliaWidgets} />
      <Route path="/axios" component={AxiosEg} />
      <Route path="/color-pickers" component={ColorPickers} />
      <Route path="/drag-n-drop" component={DragNDrop} />
      <Route path="/font-source" component={FontSourceEgs} />
      <Route path="/formik" component={FormikForm} />
      <Route path="/react-charts" component={ReactChart} />
      <Route path="/react-hook-form" component={ReactHookForm} />
      <Route path="/react-final-form" component={ReactFinalForm} />
      <Route path="/react-window" component={ReactWindowEg} />
      <Route path="/redux" component={ReduxEgs} />
      <Route path="/rte" component={RtePage} />
      <Route path="/sample" component={SampleComponents} />
      <Route path="/videojs" component={VideoJsEg} />
      <Route path="/zoom" component={ZoomEg} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>
);

export default Routing;
