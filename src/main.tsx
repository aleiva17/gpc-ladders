import ReactDOM from 'react-dom/client';
import React from 'react';
import '@/index.css';
import 'atropos/css';

import {AppRouter} from "@/routing/components/AppRouter.tsx";
import {BrowserRouter} from "react-router-dom";
import {PrimeReactProvider} from "primereact/api";

import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
        <AppRouter />
        <ToastContainer />
      </BrowserRouter>
    </PrimeReactProvider>
  </React.StrictMode>,
);
