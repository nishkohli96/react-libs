import { Suspense, StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import LoadingComp from '_Components/LoadingComp';
import Routing from '_Components/Routing';
import store from '_Store';
import '_Styles/tailwind.css';

function App() {
    const queryClient = new QueryClient();

    return (
        <StrictMode>
            <Suspense fallback={<LoadingComp />}>
                <Provider store={store}>
                    <QueryClientProvider client={queryClient}>
                        <Routing />
                    </QueryClientProvider>
                </Provider>
            </Suspense>
        </StrictMode>
    );
}

export default App;
