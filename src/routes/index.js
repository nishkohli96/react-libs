import { lazy } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import HomeScreen from '_Pages/HomeScreen';
import Page404 from '_Pages/Page404';

const AlgoliaWidgets = lazy(() => import('_Pages/algolia-widgets'));
const AosGlassIcons = lazy(() => import('_Pages/AosGlassIcons'));
const AxiosEg = lazy(() => import('_Pages/AxiosEg'));
const ColorPickers = lazy(() => import('_Pages/color-pickers'));
const DragNDrop = lazy(() => import('_Pages/DragNDrop'));
const FakerCsv = lazy(() => import('_Pages/FakerCsv'));
const FontSourceEgs = lazy(() => import('_Pages/FontSourceEgs'));
const FormJSPage = lazy(() => import('_Pages/form-js'));
const FormikForm = lazy(() => import('_Pages/FormikForm'));
const ReactChart = lazy(() => import('_Pages/ReactChart'));
const ReactHookForm = lazy(() => import('_Components/ReactHookForm'));
const ReactFinalForm = lazy(() => import('_Pages/FinalForm'));
const ReactWindowEg = lazy(() => import('_Pages/ReactWindowEg'));
const ReduxEgs = lazy(() => import('_Pages/ReduxEg'));
const RtePage = lazy(() => import('_Pages/rte'));
const ToastEgs = lazy(() => import('_Pages/Toasts'));
const VideoJsEg = lazy(() => import('_Pages/VideoJsEg'));

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/algolia-widgets" element={<AlgoliaWidgets/>} />
      <Route path="/aos-glass-icons" element={<AosGlassIcons/>} />
      <Route path="/axios" element={<AxiosEg/>} />
      <Route path="/color-pickers" element={<ColorPickers/>} />
      <Route path="/drag-n-drop" element={<DragNDrop/>} />
      <Route path="/faker-csv" element={<FakerCsv/>} />
      <Route path="/font-source" element={<FontSourceEgs/>} />
      <Route path="/form-js" element={<FormJSPage/>} />
      <Route path="/formik" element={<FormikForm/>} />
      <Route path="/react-charts" element={<ReactChart/>} />
      <Route path="/react-hook-form" element={<ReactHookForm/>} />
      <Route path="/react-final-form" element={<ReactFinalForm/>} />
      <Route path="/react-window" element={<ReactWindowEg/>} />
      <Route path="/redux" element={<ReduxEgs/>} />
      <Route path="/rte" element={<RtePage/>} />
      <Route path="/toasts" element={<ToastEgs/>} />
      <Route path="/videojs" element={<VideoJsEg/>} />
      <Route element={<Page404/>} />
    </Routes>
  </BrowserRouter>
);

export default Routing;
