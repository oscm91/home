import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { getStore } from '@stepform/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { load } from 'redux-localstorage-simple';
import { createRoot } from 'react-dom/client';

import Home from './app/home';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store: Store<any, any> = getStore(load());


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/:step" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
