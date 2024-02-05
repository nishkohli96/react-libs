import { Suspense, StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import LoadingComp from '_Components/LoadingComp';
import Routing from '_Components/Routing';
import { store, persistor } from '_Store';
import '_Styles/tailwind.css';
import '_Styles/algolia-styles.css';

function App() {
  const queryClient = new QueryClient();

  return (
    <StrictMode>
      <Suspense fallback={<LoadingComp />}>
        <Provider store={store}>
          <PersistGate loading={<LoadingComp />} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
              <Routing />
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      </Suspense>
    </StrictMode>
  );
}

export default App;
