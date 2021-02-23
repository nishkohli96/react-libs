import { lazy } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Sample from '@Components/Sample';

const Page404 = lazy(() => import('@Pages/Page404'));
const Page2 = lazy(() => import('@Pages/Page2'));

const Routing = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Sample} />
                <Route path="/page2" component={Page2} />
                <Route component={Page404} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routing;
