import React from 'react';
import ReactDOM from 'react-dom/client';
import { Theme as ThemeProvider } from '@radix-ui/themes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//@: Styles
import '@radix-ui/themes/styles.css';
import "./styles/main.scss";

//@: Pages
import Home from './pages/Home';
import About from "./pages/About";

const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
