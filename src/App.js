import { Suspense, StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LoadingComp from '_Components/LoadingComp';
import Routing from '_Routes';
import { store, persistor } from '_Store';
// import '_Styles/tailwind.css';
import '_Styles/algolia-styles.css';

function App() {
  const queryClient = new QueryClient();
  const defaultTheme = createTheme();

  Object.assign(defaultTheme, {
    overrides: {
      MUIRichTextEditor: {
        root: {
          marginTop: 20,
          width: '80%',
          color: defaultTheme.palette.error.light
        },
        editor: { borderBottom: '1px solid gray' }
      }
    }
  });

  return (
    <StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Suspense fallback={<LoadingComp />}>
          <Provider store={store}>
            <PersistGate loading={<LoadingComp />} persistor={persistor}>
              <QueryClientProvider client={queryClient}>
                <Routing />
              </QueryClientProvider>
            </PersistGate>
          </Provider>
        </Suspense>
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;
