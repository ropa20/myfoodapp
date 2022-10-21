import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from "./store"
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store ={store}>
            <PersistGate loading={null} persistor={persistor}>
                            <App />
            </PersistGate>
            
    </Provider>
    </BrowserRouter>
);
