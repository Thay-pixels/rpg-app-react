import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CSSGlobal from './components/CSSGlobal';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CSSGlobal />
    <App />
  </React.StrictMode>,
);