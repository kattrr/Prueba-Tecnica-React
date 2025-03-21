import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes/Router';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import "bootstrap/dist/css/bootstrap.min.css";

library.add(fas, fab)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);