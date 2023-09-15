import React from 'react';
import { initFrontEnd } from '@firejet/firejet-js';
import '../styles/ui.css';

initFrontEnd('y4A92arRSaCl49qKBzuM0qHh4kt4O6VH');

function App() {
  const convert = () => {
    parent.postMessage({ pluginMessage: { type: 'convert' } }, '*');
  };

  return (
    <div>
      <h2>Run Conversion (View result in console)</h2>
      <button id="create" onClick={convert}>
        Convert
      </button>
    </div>
  );
}

export default App;
