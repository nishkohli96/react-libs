import { Route, Switch, BrowserRouter } from 'react-router-dom';

import SwrEg from '@Pages/SwrEg';
import VideoJsEg from '@Pages/VideoJsEg';
import HomeScreen from '@Pages/HomeScreen';
import FormikForm from '@Pages/FormikForm';
import ReactChart from '@Pages/ReactChart';
import SampleComponents from '@Pages/SampleComponents';
import DragNDrop from '@Pages/DragNDrop';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route path="/formik" component={FormikForm} />
                <Route path="/sample" component={SampleComponents} />
                <Route path="/swr" component={SwrEg} />
                <Route path="/videojs" component={VideoJsEg} />
                <Route path="/react-charts" component={ReactChart} />
                <Route path="/drag-n-drop" component={DragNDrop} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
