// @ts-ignore
import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
// @ts-ignore
import {store} from "./redux/store/store.ts";
// @ts-ignore
import App from "./App.tsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>

);
