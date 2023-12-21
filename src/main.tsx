import ReactDOM from 'react-dom/client';
import React from 'react';
import '@/index.css';

import {AppRouter} from "@/routing/components/AppRouter.tsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>,
);
