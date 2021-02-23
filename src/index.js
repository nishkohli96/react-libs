import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoadingComp from '@Components/LoadingComp';
import reportWebVitals from './reportWebVitals';
import '@Styles/tailwind.css';

const ReactApp = () => (
    <React.StrictMode>
        <Suspense fallback={<LoadingComp />}>
            <App />
        </Suspense>
    </React.StrictMode>
);

ReactDOM.render(<ReactApp />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
