import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Button from './Button';
import Effect from './Effect'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Button text="Count UP" fontSize={30} />
    <Effect /> 
  </>
  // <React.StrictMode>
  // </React.StrictMode>
); 