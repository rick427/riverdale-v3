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
import Blogs from './pages/Blogs';
import Property from './pages/Property';
import NotFound from './pages/NotFound';
import Properties from './pages/Properties';

const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <Home/>,
    errorElement: <NotFound/>
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/property",
    children: [
      {
        index: true,
        element: <Properties/>,
      },
      {
        path: ":slug",
        element: <Property/>
      }
    ]
  },
  {
    path: "/blogs",
    element: <Blogs/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
