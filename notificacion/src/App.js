import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const notify = () => toast("Notificacion Ejemplo");

  return (
      <div>
        <button variant="outline-secondary" onClick={notify}>Notificar</button>
        <ToastContainer />
      </div>
  );
}

export default App;
