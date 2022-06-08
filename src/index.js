import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import { CartContextProvider } from './components/CartContext/CartContext';
import { initializeApp } from "firebase/app";

const root = createRoot(document.getElementById("root"))


const firebaseConfig = {
  apiKey: "AIzaSyDpcKyHkyB164vFnWe2So5Sj3QTwLEKlnQ",
  authDomain: "herramientas-toth.firebaseapp.com",
  projectId: "herramientas-toth",
  storageBucket: "herramientas-toth.appspot.com",
  messagingSenderId: "666490894038",
  appId: "1:666490894038:web:bc037cef9b1845c9cbfb77"
};

initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();