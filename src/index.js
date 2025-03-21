import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes/Router';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import "bootstrap/dist/css/bootstrap.min.css";
import './styles/Animations.css';
import './styles/Global.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

library.add(fas, fab)

AOS.init({
  duration: 1000, // Duración predeterminada de las animaciones
  once: true,     // Ejecuta la animación solo una vez
  mirror: false,  // No anima al hacer scroll hacia arriba
  debug: true     // Habilita la depuración para verificar problemas
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);