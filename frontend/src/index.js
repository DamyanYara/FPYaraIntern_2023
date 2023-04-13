import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App  from './App';
import { Provider } from './context/users';

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
    <BrowserRouter>
        <Provider>
            <App/>
        </Provider>
    </BrowserRouter>
)